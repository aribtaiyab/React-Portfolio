import fitz
import os

pdfs_to_convert = [
    ("css certificate (2).pdf", "src/components/css certificate.jpeg"),
    ("javascript_basic certificate.pdf", "src/components/javascript certificate.jpeg")
]

for pdf_path, out_path in pdfs_to_convert:
    if os.path.exists(pdf_path):
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)  # first page
        pix = page.get_pixmap(dpi=150)
        pix.save(out_path)
        print(f"Converted {pdf_path} to {out_path}")
        doc.close()

if os.path.exists("html certificate.jpeg"):
    import shutil
    shutil.copy("html certificate.jpeg", "src/components/html certificate.jpeg")
    print("Copied html certificate.jpeg to src/components")
