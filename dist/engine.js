(function(root){'use strict';
const C=root.TrailContent,DAY=86400000;
const uid=()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
const day=t=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date(t));
function fresh(){return {kind:'study-trail',version:1,pointRateVersion:1,priorXp:0,name:'見習い魔法使い',attempts:[],sessions:[],ledger:[],awards:[],school:{},legacy:[],active:null,title:null,createdAt:Date.now()};}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const questionKey=q=>JSON.stringify([q.prompt,q.passage||'',q.table||null,q.graph||null,q.diagram||null]);
const materialKey=q=>q.passage||q.table||q.graph||q.diagram?JSON.stringify([q.passage||'',q.table||null,q.graph||null,q.diagram||null]):null;
function offered(s,u,mode,now=Date.now()){
const recent=s.attempts.filter(a=>now-a.at<DAY&&a.unit===u.id),used=new Set(recent.map(a=>a.qid));
if(C.pilots[u.id]){
 const pilot=C.pilots[u.id],recentPrompts=new Set(recent.map(a=>questionKey(a.question))),pool=pilot.bank.filter(q=>!used.has(q.id)&&!recentPrompts.has(questionKey(q))&&(!mode||q.mode===mode));
 for(const f of pilot.families){let start=(s.sessions.length*37+Math.floor(now/DAY))%pilot.seeds;for(let j=0;j<pilot.seeds;j++){const q=pilot.generate(f,(start+j)%pilot.seeds);if(mode&&q.mode!==mode)break;if(!used.has(q.id)&&!recentPrompts.has(questionKey(q))){pool.push(q);break;}}}
 return shuffle(pool);
}
return shuffle(C.questions.filter(q=>q.unit===u.id&&!used.has(q.id)&&(!mode||q.mode===mode)));
}
function makeSession(s,unitId,mode=null,now=Date.now()){
let us=C.units.filter(u=>!unitId||u.id===unitId);
us.sort((a,b)=>priority(s,b.id,now)-priority(s,a.id,now));
for(const u of us){let pool=offered(s,u,mode,now);if(!pool.length)continue;
let picked=[];
if(C.pilots[u.id]){
 let history=s.attempts.filter(x=>x.unit===u.id).slice(-7).map(x=>x.question.family).filter(Boolean);
 for(let i=0;i<3;i++){
  let candidates=pool.filter(q=>!picked.includes(q)&&q.family!==history.at(-1)&&history.filter(f=>f===q.family).length<(mode?Math.max(2,Math.ceil(8/new Set(pool.map(p=>p.family)).size)):2)&&!picked.some(p=>p.family===q.family));
  if(!candidates.length&&mode)candidates=pool.filter(q=>!picked.includes(q)&&q.family!==history.at(-1)&&!picked.some(p=>p.family===q.family));
  if(!mode&&i>0){const different=candidates.filter(q=>!picked.some(p=>p.mode===q.mode));if(different.length)candidates=different;}
  if(!candidates.length)break;
  const rank=q=>{const p=skillProgress(s,q.primarySkill);return (p.count===0?30:p.recheck?20:!p.independent?10:!p.retained?5:0)+(s.attempts.some(a=>a.question.family===q.family)?0:3);};
  // Within the same learning priority, prefer a fresh source and less recent structures.
  const recentQuestions=s.attempts.filter(a=>a.unit===u.id).slice(-12).map(a=>a.question).concat(picked);
  const variation=q=>{const key=materialKey(q);return (key&&recentQuestions.slice(-3).some(p=>materialKey(p)===key)?-100:0)-recentQuestions.filter(p=>p.family===q.family).length;};
  candidates.sort((a,b)=>rank(b)-rank(a)||variation(b)-variation(a));const q=candidates[0];picked.push(q);history.push(q.family);history=history.slice(-7);
 }
 if(!picked.length)continue;
}else if(mode)picked=pool.slice(0,3);else{for(const m of shuffle(Object.keys(C.modes))){let q=pool.find(q=>q.mode===m);if(q)picked.push(q);}picked=picked.slice(0,3);}
// Avoid a one-question set with full reward when only one item remains; each task has its own effort credit.
return {id:uid(),unit:u.id,mode:mode||'mixed',started:now,queue:picked.map(q=>({...q,options:q.options?shuffle(q.options):null})),index:0,rows:[],draft:'',hint:false,taught:false,hintStep:0,inputError:null,feedback:null,review:false};}
return null;
}

function parseNumber(value,unit=''){
 let text=String(value).normalize('NFKC').trim().replace(/[−–]/g,'-').replace(/\s/g,'').replace(/^[xc]=/i,'');
 if(unit&&text.endsWith(unit))text=text.slice(0,-unit.length);
 if(text.length>60)return null;
 const decimal=t=>{if(!/^[+-]?(?:\d{1,18}(?:\.\d{1,12})?|\.\d{1,12})$/.test(t))return null;let sign=t.startsWith('-')?-1n:1n;t=t.replace(/^[+-]/,'');let [a,b='']=t.split('.');return [sign*BigInt((a||'0')+b),10n**BigInt(b.length)];};
 let parts=text.split('/');if(parts.length>2)return null;let a=decimal(parts[0]);if(!a)return null;if(parts.length===1)return a;let b=decimal(parts[1]);if(!b||b[0]===0n)return null;return [a[0]*b[1],a[1]*b[0]];
}
function skillProgress(s,id){
 const h=s.attempts.filter(a=>a.question.primarySkill===id);
 const good=h.filter(a=>a.ok&&!a.hint&&!a.taught&&a.question.family);
 // Immediate repeats of a displayed problem cannot manufacture new evidence.
 const seen=new Set(),unique=good.filter(a=>{if(seen.has(questionKey(a.question)))return false;seen.add(questionKey(a.question));return true;});
 const families=new Set(unique.map(a=>a.question.family));
 let retained=false;
 for(const a of unique){const before=unique.filter(b=>b.at<=a.at-2*DAY&&b.question.family!==a.question.family);if(new Set(before.map(b=>b.question.family)).size>=2)retained=true;}
 const independent=families.size>=2;
 return {label:retained?'日を置いて確認':independent?'異なる型で自力確認':good.length?'自力の証拠を収集中':h.length?'支援・見直し中':'未確認',count:h.length,families:families.size,independent,retained,transfer:false,recheck:h.slice(-3).some(a=>!a.ok),reason:'記述による説明力・転用はまだ判定しません。'};
}

function answer(s,value,now=Date.now()){
let a=s.active;if(!a||a.feedback)return false;let q=a.queue[a.index];if(!String(value).trim())return false;
const normalize=v=>String(v).normalize('NFKC').trim().replace(/\s/g,'');let ok;
if(q.grading==='number'){const actual=parseNumber(value,q.answerUnit),expected=parseNumber(q.answer);if(!actual){a.inputError='数を入力してください。整数・小数・分数が使えます（例：-2、0.5、1/2）。';return false;}ok=actual[0]*expected[1]===expected[0]*actual[1];}else if(q.grading==='short_text'){const norm=v=>String(v).normalize('NFKC').trim().toLowerCase().replace(/[’‘]/g,"'").replace(/[.!?]+$/,'').replace(/^(yes|no),\s*/,'$1 ').replace(/\s+/g,' ');ok=(q.acceptedAnswers||[q.answer]).some(v=>norm(v)===norm(value));}else ok=normalize(value)===normalize(q.answer);
a.inputError=null;
let row={id:uid(),session:a.id,qid:q.id,unit:q.unit,mode:q.mode,at:now,ok,input:String(value),hint:a.hint,hintStep:a.hintStep||0,taught:a.taught,question:{...q}};
s.attempts.push(row);a.rows.push(row.id);a.feedback={ok,answer:q.answer,explanation:q.explanation};return true;
}
function advance(s,now=Date.now()){
const beforeLevel=mageLevel(s).level;const a=s.active;if(!a||!a.feedback||(!a.feedback.ok&&!a.review))return null;
if(a.index+1<a.queue.length){a.index++;a.draft='';a.hint=false;a.taught=false;a.hintStep=0;a.inputError=null;a.feedback=null;a.review=false;return {next:true};}
if(s.sessions.some(x=>x.id===a.id)){s.active=null;return null;}
const record={id:a.id,unit:a.unit,at:now,started:a.started,count:a.queue.length,modes:[...new Set(a.queue.map(q=>q.mode))],rows:[...a.rows]};s.sessions.push(record);
const amount=a.queue.length,xp=a.queue.length*10;s.ledger.push({id:'complete:'+a.id,at:now,amount,xp,kind:'earn',session:a.id});s.active=null;
const unlocked=unlock(s,now);return {done:true,amount,xp,unlocked,unit:record.unit,beforeLevel,afterLevel:mageLevel(s).level};
}
const awards=[];
function add(id,name,mark,hint,test){awards.push({id,name,mark,hint,test});}
[1,5,12,30,75,180,400,900].forEach((n,i)=>add('steps'+n,['はじまりの灯','小さな航路','風をつかむ','歩みの記章','遠くの岬','旅の羅針盤','大きな航海','星の航路'][i],['✦','◈','✧','❖'][i%4],'足跡は、いつか形になる。',s=>s.sessions.length>=n));
[3,7,15,30,60,100,180,365].forEach((n,i)=>add('days'+n,'日々のかけら '+(i+1),'☼','途切れても、歩いた日は残る。',s=>new Set(s.sessions.map(x=>day(x.at))).size>=n));
C.units.slice(0,5).forEach((u,i)=>{
[3,10,25,60,150].forEach((n,j)=>add(u.id+'visits'+n,['琥珀','蒼玉','紫水晶','翡翠','黄玉'][i]+'の標本 '+(j+1),'◇','同じ場所にも、新しい景色がある。',s=>s.sessions.filter(x=>x.unit===u.id).length>=n));
add(u.id+'modes','四面の'+['鍵','羽根','栞','水晶','地図'][i],'❖','見方を変えると、輪郭が変わる。',s=>new Set(s.attempts.filter(x=>x.unit===u.id).map(x=>x.mode)).size===4);
add(u.id+'return','再会の'+['鍵','羽根','栞','水晶','地図'][i],'↟','一度離れた道の、その先へ。',s=>new Set(s.sessions.filter(x=>x.unit===u.id).map(x=>day(x.at))).size>=3);
add(u.id+'learn','芽吹く'+['鍵','羽根','栞','水晶','地図'][i],'❧','はじめての景色にも、一歩。',s=>s.sessions.some(x=>x.unit===u.id&&x.rows.some(id=>s.attempts.find(a=>a.id===id)?.taught)));
});
for(let i=0;i<5;i++)for(let j=i+1;j<5;j++)add('bridge'+i+j,'交差する光 '+(i*5+j),'⌘','遠い場所が、つながることも。',s=>C.units.filter((u,k)=>k===i||k===j).every(u=>s.sessions.some(x=>x.unit===u.id)));
add('all','五色の窓','✺','世界はいくつもの色でできている。',s=>new Set(s.sessions.map(x=>C.units.find(u=>u.id===x.unit)?.subject)).size===5);
add('graph','波と風の便り','≋','同じ読み方を、違う場所で。',s=>['science-wave','social-climate'].every(u=>s.attempts.some(a=>a.unit===u&&a.question.tags.includes('graph'))));
add('language','二つのことば','♧','問いと根拠を、行き来して。',s=>['english-question','japanese-evidence'].every(u=>s.attempts.some(a=>a.unit===u&&a.mode==='connect')));
add('return-route','回り道の星','✧','出発した場所へ、新しい足跡で。',s=>s.sessions.some((x,i)=>i>=2&&x.unit===s.sessions[i-2].unit&&x.unit!==s.sessions[i-1].unit));
add('rethink','考え直す勇気','❋','迷いも、旅の一部。',s=>s.sessions.some(x=>x.rows.some(id=>s.attempts.find(a=>a.id===id)?.ok===false)));

const spellNames=['灯火の詠唱','風紋の結界','星糸の召喚','月影の転写','暁光の守護','時環の律動','天球の調律','黎明の大魔法'];
const prefixes=['琥珀','蒼月','紫苑','翠晶','黄金'];
const effects=['灯火','結界','星雨','幻影','波紋'];
awards.forEach((a,i)=>{
 const branch=C.units.findIndex(u=>a.id.startsWith(u.id));
 let name;
 if(a.id.startsWith('steps')) name=spellNames[['steps1','steps5','steps12','steps30','steps75','steps180','steps400','steps900'].indexOf(a.id)];
 else if(a.id.startsWith('days'))name='刻印の詠唱・'+['初月','宵星','満月','星環','天輪','銀河','永夜','暁天'][i-8];
 else if(branch>=0){const suffix=a.id.slice(C.units[branch].id.length); name=prefixes[branch]+'の'+(suffix.startsWith('visits')?['微光','光輪','秘紋','星冠','天蓋'][['visits3','visits10','visits25','visits60','visits150'].indexOf(suffix)]:suffix==='modes'?'四重詠唱':suffix==='return'?'回帰結界':'萌芽の術');}
 else name=({'all':'五芒星の大結界','graph':'波紋の共鳴','language':'双言の盟約','return-route':'巡環の門','rethink':'再生の灯'})[a.id]||'融合術・'+['双月','雷光','星雲','月虹','燐光','天文','霧雨','光翼','暁星','銀樹'][i-56];
 a.name=name||'秘術・'+(i+1);a.kind='spell';a.element=i%5;a.effect=effects[i%5];a.rank=i<8?Math.min(5,1+Math.floor(i/2)):a.id.startsWith('bridge')?3:a.id==='all'?5:Math.min(4,1+Math.floor((i%8)/2));
 a.mark=['✧','⟡','✦','❈','✺'][i%5];a.incantation=['小さき光よ、知の先を照らせ。','巡る紋よ、意志を形に。','星の欠片よ、この手に集え。','眠れる記憶よ、姿を結べ。','静かな波よ、遠くへ響け。'][i%5];
 a.hint=a.hint.replaceAll('旅','修練').replaceAll('足跡','知識').replaceAll('歩いた日','学んだ日');
});

// New entries are appended: earlier collection identifiers and display numbers stay stable.
const newRoots=['星霜','銀樹','月虹','深碧','暁天','燐火','紫電','白夜','天鏡','霧月'];
const newForms=['の封印','の書環','の導き','の結晶','の灯籠','の紋章','の秘鍵','の幻翼','の守り'];
C.units.slice(5).forEach((u,i)=>{
 const a={id:'lore:'+u.id,name:newRoots[i%10]+newForms[Math.floor(i/10)],mark:['✧','⟡','✦','❈','✺'][i%5],kind:'spell',element:i%5,effect:'知識',rank:3,incantation:'蓄えた知が、ひとつの術式を結ぶ。',hint:'一度では見えなかった形が、再び出会うと見えてくる。',test:s=>{const h=s.attempts.filter(x=>x.unit===u.id);return new Set(h.map(x=>x.mode)).size>=3&&new Set(h.map(x=>day(x.at))).size>=3;}};
 awards.push(a);
});
['数学','英語','国語','理科','社会'].forEach((subject,i)=>{
 [3,5,8,12,20,40,80,160].forEach((n,j)=>awards.push({id:'discipline:'+i+':'+n,name:['創成','蒼穹','言霊','万象','地平'][i]+'の'+['一雫','双環','三叉','四季','五光','六花','七星','八雲'][j],mark:['✧','⟡','✦','❈','✺'][i],kind:'spell',element:i,effect:'知識',rank:Math.min(5,j+1),incantation:'遠く広がる知を、この書に。',hint:'広がりと積み重ねが、ひとつにつながる。',test:s=>{const ids=new Set(C.units.filter(u=>u.subject===subject).map(u=>u.id));const h=s.sessions.filter(x=>ids.has(x.unit));return new Set(h.map(x=>x.unit)).size>=Math.min(n,ids.size)&&new Set(h.map(x=>day(x.at))).size>=Math.max(1,Math.floor(n/2));}}));
});
function unitStatus(s,id,now=Date.now()){
 const h=s.attempts.filter(x=>x.unit===id),last=h.at(-1);
 const independent=h.filter(x=>x.ok&&!x.hint&&!x.taught);
 const modes=[...new Set(independent.map(x=>x.mode))],days=new Set(independent.map(x=>day(x.at))).size;
 const recent=h.slice(-4),needsHelp=recent.some(x=>!x.ok||x.hint||x.taught);
 const gap=needsHelp?1:days>=3&&modes.length>=3?7:days>=2?3:1;
 const due=last?last.at+gap*DAY:null;
 return {count:h.length,modes,days,due,isDue:due!==null&&now>=due,needsHelp,interval:gap};
}
function priority(s,id,now=Date.now()){
 const u=C.units.find(x=>x.id===id),p=unitStatus(s,id,now);
 const missing=(u.prerequisites||[]).filter(k=>!s.attempts.some(a=>a.unit===k&&a.ok&&!a.hint&&!a.taught)).length;
 const scoped=Array.isArray(s.examScope)&&s.examScope.includes(id)?200:0;
 if(p.isDue)return scoped+100+Math.min(30,(now-p.due)/DAY)+(p.needsHelp?10:0);
 if(!p.count)return scoped+50-missing*15-(u.grade||1)*2;
 return scoped+Math.min(20,(now-s.attempts.filter(x=>x.unit===id).at(-1).at)/DAY);
}
function recommendations(s,limit=5,now=Date.now()){
 return [...C.units].sort((a,b)=>priority(s,b.id,now)-priority(s,a.id,now)).filter(u=>offered(s,u,null,now).length).slice(0,limit);
}

function unlock(s,now){let found=awards.filter(a=>!s.awards.some(x=>x.id===a.id)&&a.test(s));found.forEach(a=>s.awards.push({id:a.id,at:now}));return found.map(a=>a.id);}
function totals(s,now=Date.now()){let date=new Date(now+9*3600000),dow=date.getUTCDay()||7;let monday=Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()-(dow-1))-9*3600000;return {total:s.ledger.filter(x=>x.kind==='earn').reduce((a,x)=>a+x.amount,0),week:s.ledger.filter(x=>x.kind==='earn'&&x.at>=monday&&x.at<=now).reduce((a,x)=>a+x.amount,0),balance:s.ledger.reduce((a,x)=>a+x.amount,0)};}
function mageLevel(s){const xp=(s.priorXp||0)+s.ledger.filter(x=>x.kind==='earn').reduce((sum,x)=>sum+(x.xp??x.amount),0);const threshold=l=>20*(l-1)*(l-1)+40*(l-1);let level=Math.max(1,Math.floor(Math.sqrt(1+xp/20)));while(threshold(level+1)<=xp)level++;while(threshold(level)>xp)level--;const start=threshold(level),end=threshold(level+1);const rank=level>=40?'星冠の魔導師':level>=25?'大魔導師':level>=15?'上級魔法使い':level>=8?'魔法使い':level>=4?'修練の魔法使い':'見習い魔法使い';return {level,xp,start,end,remaining:end-xp,percent:(xp-start)/(end-start)*100,rank};}
function redeem(s,amount,note,now=Date.now()){if(!Number.isSafeInteger(amount)||amount<=0||amount>totals(s).balance)throw Error('残高以内の正の整数を入力してください。');s.ledger.push({id:uid(),at:now,kind:'redeem',amount:-amount,note:String(note).slice(0,100)});}
function progress(s,unit){let a=s.attempts.filter(x=>x.unit===unit);if(!a.length)return {label:'まだ探索していない',count:0};let good=a.filter(x=>x.ok&&!x.hint&&!x.taught);return {label:good.length>=3&&new Set(good.map(x=>x.mode)).size>=2&&new Set(good.map(x=>day(x.at))).size>=2?'複数の角度で確認':good.length?'自力で確かめたところあり':'学び始めた',count:a.length};}
function validate(v){
if(!v||v.kind!=='study-trail'||v.version!==1)throw Error('この試作のバックアップではありません。');
for(const k of ['attempts','sessions','ledger','awards','legacy'])if(!Array.isArray(v[k])||v[k].length>200000)throw Error('記録の形式を確認してください。');
if(v.pointRateVersion!==undefined&&v.pointRateVersion!==1)throw Error('ポイント形式が不正です。');
if(v.priorXp!==undefined&&(!Number.isSafeInteger(v.priorXp)||v.priorXp<0))throw Error('経験値が不正です。');
const units=new Set(C.units.map(u=>u.id)),modes=new Set(Object.keys(C.modes));
const validMedia=q=>(!q.diagram||root.TrailGeometry.valid(q.diagram))&&(!q.acceptedAnswers||(Array.isArray(q.acceptedAnswers)&&q.acceptedAnswers.length>0&&q.acceptedAnswers.every(x=>typeof x==='string')))&&(!q.table||(typeof q.table.caption==='string'&&Array.isArray(q.table.columns)&&q.table.columns.every(x=>typeof x==='string')&&Array.isArray(q.table.rows)&&q.table.rows.every(row=>Array.isArray(row)&&row.length===q.table.columns.length&&row.every(x=>typeof x==='string'))))&&(!q.graph||(Number.isFinite(q.graph.durationMs)&&q.graph.durationMs>0&&Array.isArray(q.graph.traces)&&q.graph.traces.length<=4&&q.graph.traces.every(t=>typeof t.name==='string'&&Number.isFinite(t.cycles)&&t.cycles>0&&t.cycles<=30&&Number.isFinite(t.amplitude)&&t.amplitude>0&&t.amplitude<=3)));
const validQ=q=>q&&units.has(q.unit)&&modes.has(q.mode)&&typeof q.id==='string'&&typeof q.prompt==='string'&&typeof q.answer==='string'&&typeof q.explanation==='string'&&Array.isArray(q.tags)&&validMedia(q)&&(!q.grading||['choice','number','short_text'].includes(q.grading))&&(q.grading!=='number'||!!parseNumber(q.answer))&&(!q.primarySkill||C.allPilotSkills.some(k=>k.id===q.primarySkill))&&(!q.hints||(Array.isArray(q.hints)&&q.hints.every(h=>typeof h==='string')))&&(!q.options||(Array.isArray(q.options)&&q.options.every(x=>typeof x==='string')));
if(v.attempts.some(a=>!a||typeof a.id!=='string'||!Number.isFinite(a.at)||typeof a.ok!=='boolean'||!validQ(a.question)||a.unit!==a.question.unit||a.mode!==a.question.mode))throw Error('解答記録が不正です。');
if(v.sessions.some(x=>!x||typeof x.id!=='string'||!units.has(x.unit)||!Number.isFinite(x.at)||!Array.isArray(x.rows)||x.rows.some(id=>!v.attempts.some(a=>a.id===id))||!Array.isArray(x.modes)))throw Error('学習セットの記録が不正です。');
let ids=new Set();if(v.ledger.some(x=>!x||typeof x.id!=='string'||ids.has(x.id)||(ids.add(x.id),false)||!Number.isFinite(x.at)||!Number.isSafeInteger(x.amount)||(x.xp!==undefined&&(x.kind!=='earn'||!Number.isSafeInteger(x.xp)||x.xp<=0))||!['earn','redeem'].includes(x.kind)||(x.kind==='earn'?x.amount<=0||!v.sessions.some(z=>z.id===x.session):x.amount>=0)))throw Error('ポイント記録が不正です。');
if(totals(v).balance<0)throw Error('ポイント残高が不正です。');
if(v.awards.some(x=>!x||!awards.some(a=>a.id===x.id)||!Number.isFinite(x.at)))throw Error('コレクション記録が不正です。');
if(!v.school||typeof v.school!=='object'||Array.isArray(v.school))throw Error('設定が不正です。');
if(v.active){const a=v.active;if(!units.has(a.unit)||!Array.isArray(a.queue)||!a.queue.length||!a.queue.every(validQ)||!Number.isInteger(a.index)||a.index<0||a.index>=a.queue.length||!Array.isArray(a.rows)||typeof a.id!=='string'||(a.feedback&&typeof a.feedback.ok!=='boolean'))throw Error('途中の記録が不正です。');}
if(v.examScope!==undefined&&(!Array.isArray(v.examScope)||v.examScope.some(id=>!units.has(id))))throw Error('テスト範囲が不正です。');
const migrated=v.pointRateVersion===undefined?{...v,pointRateVersion:1,priorXp:mageLevel(v).xp,ledger:[]}:v;
if(!Number.isSafeInteger(migrated.priorXp||0))throw Error('経験値が不正です。');
return {...migrated,name:String(v.name==='探検家'?'見習い魔法使い':v.name||'見習い魔法使い').slice(0,24),title:awards.some(a=>a.id===v.title)?v.title:null};
}
root.TrailEngine={fresh,uid,day,makeSession,answer,advance,totals,redeem,progress,validate,awards,mageLevel,unitStatus,recommendations,parseNumber,skillProgress,questionKey,materialKey};
})(typeof window==='undefined'?globalThis:window);
