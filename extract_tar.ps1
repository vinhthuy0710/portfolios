$ErrorActionPreference = "Stop"
$reportsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\reports"
$assetsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\assets\reports"

if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir | Out-Null
}

$files = Get-ChildItem -Path $reportsDir -Filter "*.docx"
foreach ($file in $files) {
    Write-Output "Processing $($file.Name)..."
    
    $baseName = $file.BaseName
    $tempDir = Join-Path $reportsDir "temp_$baseName"
    
    if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    
    $zipPath = Join-Path $reportsDir "$baseName.zip"
    Copy-Item -Path $file.FullName -Destination $zipPath -Force
    
    # Try using tar
    Push-Location $tempDir
    tar -xf $zipPath
    Pop-Location
    
    # Process text
    $docXmlPath = Join-Path $tempDir "word\document.xml"
    if (Test-Path $docXmlPath) {
        $content = [System.IO.File]::ReadAllText($docXmlPath)
        $matches = [regex]::Matches($content, '<w:t(?: xml:space="preserve")?>(.*?)</w:t>')
        $extractedText = @()
        foreach ($match in $matches) {
            $extractedText += $match.Groups[1].Value
        }
        $outPath = Join-Path $reportsDir "$baseName.txt"
        $extractedText -join "`n" | Set-Content -Path $outPath -Encoding UTF8
        Write-Output "Text extracted to $outPath"
    } else {
        Write-Output "document.xml not found for $($file.Name)"
    }
    
    # Process images
    $mediaDir = Join-Path $tempDir "word\media"
    if (Test-Path $mediaDir) {
        $targetMediaDir = Join-Path $assetsDir $baseName
        if (-not (Test-Path $targetMediaDir)) {
            New-Item -ItemType Directory -Path $targetMediaDir | Out-Null
        }
        Copy-Item -Path "$mediaDir\*" -Destination $targetMediaDir -Force -Recurse
        Write-Output "Images copied to $targetMediaDir"
    }
    
    # Cleanup
    Remove-Item -Recurse -Force $tempDir
    Remove-Item -Force $zipPath
}
Write-Output "Done!"

