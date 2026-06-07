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

foreach ($f in $files) {
    $destDir = "$outputDir\$($f.folder)"
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    
    $srcPath = "$reportDir\$($f.name)"
    $zipPath = "$destDir\temp.zip"
    $extractPath = "$destDir\extracted"
    
    Copy-Item -Path $srcPath -Destination $zipPath -Force
    
    try {
        Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force
        
        $mediaPath = "$extractPath\word\media"
        if (Test-Path $mediaPath) {
            $images = Get-ChildItem -Path $mediaPath
            foreach ($img in $images) {
                Copy-Item -Path $img.FullName -Destination $destDir -Force
            }
            Write-Host "$($f.folder): Found $($images.Count) images"
        } else {
            Write-Host "$($f.folder): No media folder"
        }
    } catch {
        Write-Host "$($f.folder): Error - $_"
    } finally {
        Remove-Item -Path $zipPath -Force -ErrorAction SilentlyContinue
        Remove-Item -Path $extractPath -Recurse -Force -ErrorAction SilentlyContinue
    }
}
