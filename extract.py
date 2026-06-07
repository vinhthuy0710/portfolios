import os
import zipfile
import shutil

base_dir = r"C:\Users\HELLO\.gemini\antigravity\scratch\portfolio"
reports_dir = os.path.join(base_dir, "reports")
assets_dir = os.path.join(base_dir, "assets", "reports")

files = [
    ("Bao Cao Tuan 1.docx", "tuan1"),
    ("BÀI 2.docx", "tuan2"),
    ("tuan 3.docx", "tuan3"),
    ("tmpowajq1_bai-tap-bao-cao-tuan-4.docx", "tuan4"),
    ("tuan 5.docx", "tuan5"),
    ("tuan 6.docx", "tuan6"),
    ("tuan 7.docx", "tuan7")
]

os.makedirs(assets_dir, exist_ok=True)

for docx_name, folder_name in files:
    docx_path = os.path.join(reports_dir, docx_name)
    dest_dir = os.path.join(assets_dir, folder_name)
    os.makedirs(dest_dir, exist_ok=True)
    
    try:
        with zipfile.ZipFile(docx_path, 'r') as zip_ref:
            media_files = [m for m in zip_ref.namelist() if m.startswith('word/media/')]
            for media_file in media_files:
                filename = os.path.basename(media_file)
                if filename:
                    source = zip_ref.open(media_file)
                    target_path = os.path.join(dest_dir, filename)
                    with open(target_path, "wb") as target:
                        shutil.copyfileobj(source, target)
        print(f"Extracted {len(media_files)} images for {folder_name}")
    except Exception as e:
        print(f"Failed to extract {docx_name}: {e}")
