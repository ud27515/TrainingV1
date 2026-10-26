from pathlib import Path
root = Path(__file__).resolve().parent
text = (root/'dist/index.html').read_text()
text = text.replace('<link rel="stylesheet" href="style.css">', '<style>'+(root/'dist/style.css').read_text()+'</style>')
for name in ['content.js','curriculum.js','equations.js','language-science.js','reading-society.js','variety.js','signed-numbers.js','expressions.js','ratios.js','algebra-batch.js','geometry.js','geometry-content.js','engine.js','storage.js','app.js']:
    text = text.replace(f'<script src="{name}"></script>', '<script>'+(root/'dist'/name).read_text().replace('</script', '<\\/script')+'</script>')
(root/'index.html').write_text(text)
print('Built standalone index.html')
