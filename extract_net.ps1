$base = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio"
$reportDir = "$base\reports"
$outputDir = "$base\assets\reports"

$files = @(
    @{name="Bao Cao Tuan 1.docx"; folder="tuan1"},
    @{name="BÀI 2.docx"; folder="tuan2"},
    @{name="tuan 3.docx"; folder="tuan3"},
    @{name="tmpowajq1_bai-tap-bao-cao-tuan-4.docx"; folder="tuan4"},
    @{name="tuan 5.docx"; folder="tuan5"},
    @{name="tuan 6.docx"; folder="tuan6"},
    @{name="tuan 7.docx"; folder="tuan7"}
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

foreach ($f in $files) {
    $destDir = "$outputDir\$($f.folder)"
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    
    $srcPath = "$reportDir\$($f.name)"
    
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($srcPath)
        $mediaEntries = $zip.Entries | Where-Object { $_.FullName.StartsWith('word/media/') -and -not [string]::IsNullOrEmpty($_.Name) }
        
        foreach ($entry in $mediaEntries) {
            $targetPath = "$destDir\$($entry.Name)"
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $targetPath, $true)
        }
        Write-Host "$($f.folder): Extracted $($mediaEntries.Count) images"
        $zip.Dispose()
    } catch {
        Write-Host "$($f.folder): Error - $_"
    }
}
