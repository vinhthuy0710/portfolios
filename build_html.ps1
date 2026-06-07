$ErrorActionPreference = "Stop"
$htmlPath = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\index.html"
$reportsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\reports"
$assetsDir = "C:\Users\HELLO\.gemini\antigravity\scratch\portfolio\assets\reports"

$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Find the projects-grid block
$startPattern = '<div class="projects-grid">'
$endPattern = '</section>'
$startIndex = $html.IndexOf($startPattern)
$endIndex = $html.IndexOf($endPattern, $startIndex)

if ($startIndex -eq -1 -or $endIndex -eq -1) {
    Write-Host "Could not find projects grid"
    exit
}

$newContent = "<div class='reports-container' style='display: flex; flex-direction: column; gap: 2rem;'>"

$weeks = @(
    @{ Title="BÁO CÁO TUẦN 1"; File="Bao Cao Tuan 1"; Id="week1" },
    @{ Title="BÁO CÁO TUẦN 2"; File="BÀI 2"; Id="week2" },
    @{ Title="BÁO CÁO TUẦN 3"; File="tuan 3"; Id="week3" },
    @{ Title="BÁO CÁO TUẦN 4"; File="tmpowajq1_bai-tap-bao-cao-tuan-4"; Id="week4" },
    @{ Title="BÁO CÁO TUẦN 5"; File="tuan 5"; Id="week5" },
    @{ Title="BÁO CÁO TUẦN 6"; File="tuan 6"; Id="week6" },
    @{ Title="BÁO CÁO TUẦN 7"; File="tuan 7"; Id="week7" }
)

foreach ($w in $weeks) {
    $newContent += "
    <div class='t6-part' id='$($w.Id)'>
        <div class='t6-part-header'>
            <h3 class='t6-part-title'>$($w.Title)</h3>
        </div>
        <div class='t6-content'>
"
    # Text
    $txtFile = Join-Path $reportsDir "$($w.File).txt"
    if (Test-Path $txtFile) {
        $textLines = [System.IO.File]::ReadAllLines($txtFile, [System.Text.Encoding]::UTF8)
        $currentParagraph = ""
        foreach ($line in $textLines) {
            $t = $line.Trim()
            if ($t.Length -gt 0) {
                # Just add some basic formatting logic:
                if ($t.Length -lt 50 -and $t -match '^\d+\.') {
                    $newContent += "<p class='t6-p'><strong>$t</strong></p>`n"
                } else {
                    $newContent += "<p class='t6-p'>$t</p>`n"
                }
            }
        }
    } else {
        $newContent += "<p class='t6-p'><em>(Chưa có nội dung văn bản)</em></p>`n"
    }
    
    # Images
    $imgDir = Join-Path $assetsDir $w.File
    if (Test-Path $imgDir) {
        $imgs = Get-ChildItem $imgDir -Filter "*.*" -Include "*.png", "*.jpg", "*.jpeg", "*.gif"
        if ($imgs.Count -gt 0) {
            $newContent += "<div class='report-img-grid'>`n"
            foreach ($img in $imgs) {
                # Replace backslashes with forward slashes for URLs
                $imgUrl = "assets/reports/$($w.File)/$($img.Name)"
                $newContent += "<img src='$imgUrl' class='report-img' loading='lazy' alt='Hình ảnh báo cáo' />`n"
            }
            $newContent += "</div>`n"
        }
    }
    
    $newContent += "
        </div>
    </div>
"
}

$newContent += "</div>`n        </div>`n    "

$finalHtml = $html.Substring(0, $startIndex) + $newContent + $html.Substring($endIndex)
[System.IO.File]::WriteAllText($htmlPath, $finalHtml, [System.Text.Encoding]::UTF8)

Write-Host "HTML Updated."
