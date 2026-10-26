const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const dir=path.resolve(__dirname,'../tests');for(const f of fs.readdirSync(dir).filter(x=>x.endsWith('.test.cjs')).sort()){const result=spawnSync(process.execPath,[path.join(dir,f)],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);}
