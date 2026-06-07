Add-Type -AssemblyName System.IO.Compression.FileSystem

$reportsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\reports"
$assetsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\assets\reports"

if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir | Out-Null
}

$files = Get-ChildItem -Path $reportsDir -Filter "*.docx"
foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    
    $baseName = $file.BaseName
    $tempDir = Join-Path $reportsDir "temp_$baseName"
    
    if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    
    $zipPath = Join-Path $reportsDir "$baseName.zip"
    Copy-Item -Path $file.FullName -Destination $zipPath -Force
    
    # Extract using .NET
    [System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $tempDir)
    
    # Process text
    $docXmlPath = Join-Path $tempDir "word\document.xml"
    if (Test-Path $docXmlPath) {
        # A simple regex to get text inside w:t tags
        $content = Get-Content $docXmlPath -Raw
        $matches = [regex]::Matches($content, '<w:t[^>]*>(.*?)</w:t>')
        $extractedText = @()
        foreach ($match in $matches) {
            $extractedText += $match.Groups[1].Value
        }
        $outPath = Join-Path $reportsDir "$baseName.txt"
        $extractedText -join "`n" | Set-Content $outPath -Encoding UTF8
    }
    
    # Process images
    $mediaDir = Join-Path $tempDir "word\media"
    if (Test-Path $mediaDir) {
        $targetMediaDir = Join-Path $assetsDir $baseName
        if (-not (Test-Path $targetMediaDir)) {
            New-Item -ItemType Directory -Path $targetMediaDir | Out-Null
        }
        Copy-Item -Path "$mediaDir\*" -Destination $targetMediaDir -Force -Recurse
        Write-Host "Copied images for $baseName"
    }
    
    # Cleanup
    Remove-Item -Recurse -Force $tempDir
    Remove-Item -Force $zipPath
}

Write-Host "Done!"
