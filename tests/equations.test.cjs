const assert=require('node:assert/strict');require('../dist/content.js');require('../dist/curriculum.js');require('../dist/equations.js');require('../dist/language-science.js');require('../dist/reading-society.js');require('../dist/variety.js');require('../dist/signed-numbers.js');require('../dist/expressions.js');require('../dist/ratios.js');require('../dist/algebra-batch.js');require('../dist/geometry.js');require('../dist/geometry-content.js');require('../dist/engine.js');
const C=TrailContent,E=TrailEngine,now=Date.UTC(2026,9,24),DAY=86400000;let passed=0;
function test(n,f){f();passed++;console.log('PASS '+n);}
const value=s=>{const [n,d]=E.parseNumber(s);return Number(n)/Number(d);};
function complete(s,t=now,mode=null){s.active=E.makeSession(s,'math-equation',mode,t);assert.ok(s.active);const qs=[...s.active.queue];while(s.active){const q=s.active.queue[s.active.index];assert.ok(E.answer(s,q.answer,t));E.advance(s,t);}return qs;}
test('all 4851 generator parameter combinations independently satisfy their equations',()=>{
 for(const f of C.equationFamilies)for(let seed=0;seed<441;seed++){
  const a=2+seed%7,b=2+Math.floor(seed/7)%7,x=2+Math.floor(seed/49)%9,q=C.generateEquation(f,seed);
  assert.ok(C.equationSkills.some(k=>k.id===q.primarySkill));assert.equal(q.hints.length,2);
  if(q.options){assert.equal(new Set(q.options).size,q.options.length);assert.equal(q.options.filter(o=>o===q.answer).length,1);}
  if(f==='inverse_operations')assert.equal(a*value(q.answer)+b,a*x+b);
  if(f==='both_sides_brackets'){let y=value(q.answer);assert.equal(a*(y-b),(a-1)*y-(x+a*b));}
  if(f==='fraction_equation'){let n=12+a,u=n-2*b,v=n-3*x,y=value(q.answer);assert.equal(3*(y-u)+2*(y-v),6*(b+x));}
  if(f==='inverse_construction')assert.equal(a*x+value(q.answer),a*x+b);
  if(f==='percentage_model'){let base=(a+5)*100,rate=(b+1)*5;assert.equal(q.answer,`${(100-rate)/100}x＝${base*(100-rate)/100}`);}
  if(f==='perimeter_model')assert.equal(q.answer,`2x＋2(x＋${b})＝${2*(2*x+b)}`);
  if(f==='negative_shift')assert.equal(a*value(q.answer)-b,a*x-b);
  if(f==='candidate_check')assert.ok(q.answer.includes(String(a*(x+1)+b)));
  if(f==='time_units')assert.equal(value(q.answer),a*60/(b*60));
  if(f==='contradiction_variant'){assert.notEqual(b,b+x);assert.equal(q.answer,'当てはまる数はない');}
  if(f==='identity_variant'){assert.equal(a*(x+b),a*x+a*b);assert.equal(q.answer,'どの数でもよい');}
 }
});
test('fixed answer identities and separate condition interpretations',()=>{
 assert.equal(C.equationBank.length,13);for(const q of C.equationBank){if(q.options){assert.equal(new Set(q.options).size,q.options.length);assert.equal(q.options.filter(o=>o===q.answer).length,1);}else assert.ok(E.parseNumber(q.answer));}
 assert.equal((420+180)/((420-180)/12),value(C.equationBank.find(q=>q.id==='eq-v2-tunnel').answer));
 assert.ok(!Array.from({length:10},(_,i)=>i).some(x=>5*x+3*(9-x)===40));
 assert.equal(1000*3+600*6,1000*6+600*1);
});
test('safe numeric parsing accepts equivalent decimals and fractions without eval',()=>{
 for(const [input,expected] of [['−２',-2],['1/2',0.5],['.5',0.5],['-1/-2',0.5],['x = 5',5],['30秒',30]])assert.equal(valueWithUnit(input),expected);
 function valueWithUnit(s){let [n,d]=E.parseNumber(s,'秒');return Number(n)/Number(d);}
 for(const input of ['','1/0','2+3','alert(1)','1e309','NaN','Infinity','1/2/3','1cm','9'.repeat(100)])assert.equal(E.parseNumber(input),null);
});
test('invalid numeric input does not become a wrong learning record',()=>{
 let s=E.fresh();s.active=E.makeSession(s,'math-equation','solve',now);assert.equal(E.answer(s,'2+3',now),false);assert.equal(s.attempts.length,0);assert.ok(s.active.inputError);let q=s.active.queue[0];assert.ok(E.answer(s,q.answer+'/1',now));assert.equal(s.attempts[0].ok,true);assert.equal(s.active.inputError,null);
});
test('100 sessions preserve structural variety, point rewards and distinct displayed problems',()=>{
 let s=E.fresh(),all=[];for(let i=0;i<100;i++)all.push(...complete(s,now));
 assert.equal(E.totals(s).total,300);assert.equal(new Set(all.map(q=>q.prompt)).size,all.length);
 for(let i=1;i<all.length;i++){assert.notEqual(all[i].family,all[i-1].family);assert.ok(all.slice(Math.max(0,i-7),i+1).filter(q=>q.family===all[i].family).length<=2);}
 for(let i=0;i<all.length;i+=3){assert.equal(new Set(all.slice(i,i+3).map(q=>q.family)).size,3);assert.ok(new Set(all.slice(i,i+3).map(q=>q.mode)).size>=2);}
 assert.equal(new Set(all.map(q=>q.primarySkill)).size,7);
});
test('mode-specific sessions continue without same-family adjacent repeats',()=>{for(const mode of Object.keys(C.modes)){let s=E.fresh(),qs=[];for(let i=0;i<12;i++)qs.push(...complete(s,now,mode));assert.ok(qs.every(q=>q.mode===mode));for(let i=1;i<qs.length;i++)assert.notEqual(qs[i].family,qs[i-1].family);}});
function evidence(s,q,at,hint=false){s.attempts.push({id:'e'+s.attempts.length,unit:q.unit,qid:q.id,mode:q.mode,ok:true,hint,taught:false,at,question:q});}
test('skill evidence needs distinct families and delayed evidence without granting transfer',()=>{
 let s=E.fresh(),q1=C.generateEquation('both_sides_brackets',0),q2=C.generateEquation('fraction_equation',1),q3=C.equationBank.find(q=>q.id==='eq-v2-distribution');
 evidence(s,q1,now);evidence(s,C.generateEquation('both_sides_brackets',1),now);assert.equal(E.skillProgress(s,q1.primarySkill).independent,false);
 evidence(s,q2,now);assert.equal(E.skillProgress(s,q1.primarySkill).independent,true);assert.equal(E.skillProgress(s,q1.primarySkill).retained,false);
 evidence(s,q3,now+3*DAY);let p=E.skillProgress(s,q1.primarySkill);assert.equal(p.retained,true);assert.equal(p.transfer,false);
 evidence(s,q1,now+4*DAY);assert.equal(E.skillProgress(s,q1.primarySkill).retained,true);
});
test('hints and old unmapped records do not create skill mastery',()=>{let s=E.fresh();evidence(s,C.generateEquation('both_sides_brackets',0),now,true);evidence(s,C.generateEquation('fraction_equation',1),now,true);evidence(s,C.mathQuestion('solve',1),now);assert.equal(E.skillProgress(s,'math-equation:03').independent,false);assert.equal(E.skillProgress(s,'math-equation:01').count,0);});
test('new hints and metadata round trip; invalid numeric backup is rejected',()=>{let s=E.fresh();s.active=E.makeSession(s,'math-equation','solve',now);s.active.hint=true;s.active.hintStep=2;assert.deepEqual(E.validate(JSON.parse(JSON.stringify(s))),s);s.active.queue[0].answer='invalid';assert.throws(()=>E.validate(s));});
console.log(passed+' equation tests passed');
