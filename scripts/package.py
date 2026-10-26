from pathlib import Path
import sys, shutil, zipfile
root=Path(__file__).resolve().parents[1]
out=Path(sys.argv[1]).resolve();out.mkdir(parents=True,exist_ok=True)
shutil.copyfile(root/'index.html',out/'grimoire-preview.html')
with zipfile.ZipFile(out/'grimoire-GitHub.zip','w',zipfile.ZIP_DEFLATED) as z:
 for name in ['index.html','README.md','RELEASE.md','PROGRESS.md','build.py','.nojekyll']:z.write(root/name,name)
 for directory in ['dist','authoring','tests','design','scripts']:
  for p in sorted((root/directory).rglob('*')):
   if p.is_file() and '__pycache__' not in p.parts:z.write(p,p.relative_to(root))
with zipfile.ZipFile(out/'grimoire-GitHub.zip') as z:
 assert z.testzip() is None
 print('ZIP verified:',len(z.namelist()),'files')
