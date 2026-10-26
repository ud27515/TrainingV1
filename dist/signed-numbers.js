(function(root){'use strict';const C=root.TrailContent,U='ma-signed';
const labels=['数直線・大小・絶対値','符号を含む加減','乗除の符号','累乗と括弧','四則混合','変化と基準との差'];
const p=C.pilots[U]={skills:labels.map((name,i)=>({id:U+':0'+(i+1),name})),bank:[],families:[],seeds:121,description:'数直線の位置、符号の意味、計算手順、基準との差を別々に確かめます。',limitation:'選択・数値入力による確認です。自分の言葉で理由を説明する力は別に確かめる必要があります。'};
function make(id,k,f,mode,prompt,answer,wrong,why,hint,extra={}){return {id:U+'-v6-'+id,unit:U,primarySkill:U+':0'+k,family:f,mode,prompt,answer:String(answer),options:wrong?[String(answer),...wrong]:null,grading:wrong?'choice':'number',explanation:why,hints:[hint,why],passage:'',tags:[U,'number'],version:6,...extra};}
function add(...args){p.bank.push(make(...args));}
add('order',1,'signed-order','solve','−0.8、−0.3、0の中で最も小さい数は？','−0.8',['−0.3','0'],'数直線では左ほど小さく、−0.8は−0.3より左です。','負の数どうしでは、0から遠い方が小さくなります。');
add('absolute',1,'signed-absolute-solutions','create','絶対値が4になる数を、漏れなく選んでいるものは？','−4と4',['4だけ','−4だけ'],'0からの距離が4の点は、左右に一つずつあります。','絶対値は符号ではなく0からの距離です。');
add('absolute-error',1,'signed-order-distance','detect','「−7は−2より絶対値が大きいので、数としても大きい」の誤りは？','絶対値の大小と数の大小を混同している',['−7の絶対値を7としたことが誤り','−2の絶対値を2としたことが誤り'],'絶対値は7の方が大きい一方、数としては−7＜−2です。','距離と数直線上の左右を分けよう。');
add('sub-error',2,'signed-subtraction-repair','detect','3−(−5)を3−5として計算した。正しい最初の変形は？','3＋5',['−3＋5','−3−5'],'負の数を引くことは、その反対の正の数を足すことです。','引く数の符号を変えて、足し算に直そう。');
add('missing-addend',2,'signed-missing-addend','create','(−6)＋□＝−2。□に入る数は？',4,null,'−6から−2までは右へ4進むので、加える数は4です。','−6からどちらへどれだけ動く？');
add('movement',2,'signed-directed-movement','connect','数直線で−2から左へ5進んだ点は？',-7,null,'左への移動は5を引くことなので−2−5＝−7です。','右は増える方向、左は減る方向です。');
add('product-sign',3,'signed-sign-parity','solve','0を含まない三つの負の数を掛けた積の符号は？','負',['正','0'],'負×負で正、さらに負を掛けて負になります。','負の因数が奇数個か偶数個か考えよう。');
add('zero-divisor',3,'signed-zero-division','detect','0÷(−3)と(−3)÷0の扱いとして正しいのは？','前者は0、後者は定義できない',['どちらも0','前者は定義できず、後者は0'],'0÷(−3)は0です。0を掛けて−3になる数はないため、−3÷0は定義できません。','割る数が0なのか、割られる数が0なのか区別しよう。');
add('missing-factor',3,'signed-missing-factor','create','(−4)×□＝12。□に入る数は？',-3,null,'負の数に負の数を掛けると正。12÷(−4)＝−3です。','符号を先に判断してから、大きさを求めよう。');
add('power-scope',4,'signed-power-scope','detect','−3²と(−3)²の値の組は？','−9と9',['9と9','−9と−9'],'−3²は−(3×3)、(−3)²は(−3)×(−3)です。','2乗する範囲にマイナスが含まれているか見よう。');
add('power-vs-times',4,'signed-power-meaning','solve','(−2)³の値は？',-8,null,'(−2)を3回掛けるので−8です。−2に3を掛けるのではありません。','累乗は同じ数を繰り返し掛けることです。');
add('parenthesis-plan',4,'signed-operation-plan','create','2×(−3＋5)²の計算で最初に行うのは？','括弧の中の−3＋5',['2×(−3)','5の2乗'],'括弧の中を先に計算し、その結果を2乗してから2倍します。','括弧→累乗→乗除→加減の順です。');
add('precedence-error',5,'signed-precedence-error','detect','−4＋2×3を、先に−4＋2として計算した。正しい結果は？',2,null,'乗算を先に行い、−4＋6＝2です。','加算より乗算が先です。');
add('distribution',5,'signed-distribution','create','(−7)×98を、98＝100−2として計算する正しい式は？','(−7)×100−(−7)×2',['(−7)×100−2','(−7)×100＋(−7)×2'],'括弧内の両方に−7を掛け、引き算の関係を残します。','a(b−c)＝ab−acを使います。');
add('division-order',5,'signed-equal-precedence','solve','(−24)÷6×(−2)の値は？',8,null,'乗除は同じ優先順位なので左から。−24÷6＝−4、−4×(−2)＝8です。','後ろの6×(−2)だけを先に計算しないようにしよう。');
add('temperature',6,'signed-net-change','connect','朝は−3℃、昼は4℃。朝から昼への気温の変化を、上昇を正として何℃と表す？',7,null,'変化＝後−前なので、4−(−3)＝7℃です。','0℃をまたぐ上昇分を足しても求められます。',{answerUnit:'℃'});
add('baseline',6,'signed-baseline-reconstruction','connect','基準の重さは500g。ある品物の「実測−基準」が−8gだった。実測は何g？',492,null,'基準より8g軽いため500−8＝492gです。','差が負であることの意味を考えよう。',{answerUnit:'g'});
add('change-vs-value',6,'signed-change-vs-level','detect','水位の変化が＋2cmだった。この情報だけで言えることは？','以前より2cm上がった',['現在の水位は基準より2cm上だ','以前の水位は基準より2cm下だ'],'変化量から現在位置を求めるには、以前の位置も必要です。','位置と変化を区別しよう。');
add('fraction-add',2,'signed-addition','solve','(−1/2)＋3/4＝？','1/4',null,'−1/2＝−2/4なので、−2/4＋3/4＝1/4です。','分母をそろえてから符号を含めて計算します。');
add('decimal-subtract',2,'signed-subtraction','solve','1.2−(−0.7)＝？','1.9',null,'負の数を引くので、1.2＋0.7＝1.9です。','小数でも引き算の符号の規則は同じです。');
add('fraction-divide',3,'signed-division','solve','(−2/3)÷(−4/5)＝？','5/6',null,'同符号の除算なので正。2/3×5/4＝10/12＝5/6です。','割る分数の逆数を掛け、約分します。');
add('decimal-mixed',5,'signed-mixed','solve','(−0.5)×4＋3＝？',1,null,'先に−0.5×4＝−2。−2＋3＝1です。','小数を含んでも乗算を先に行います。');
const signed=n=>n<0?'('+n+')':String(n);
p.families=['signed-addition','signed-subtraction','signed-missing-addend','signed-multiplication','signed-division','signed-power-scope','signed-mixed','signed-net-change','signed-distance'];
p.generate=(f,seed)=>{if(!Number.isInteger(seed)||seed<0||seed>=p.seeds)throw Error('Invalid signed seed');const a=seed%11-5,b=Math.floor(seed/11)-5;let q;
if(f==='signed-addition')q=make('g',2,f,'solve',`${signed(a)}＋${signed(b)}＝？`,a+b,null,`${a}に${b}を加えると${a+b}です。`,'同符号なら大きさを足し、異符号なら大きさの差と符号を考えます。');
if(f==='signed-subtraction')q=make('g',2,f,'solve',`${signed(a)}−${signed(b)}＝？`,a-b,null,`${b}を引くことは${-b}を加えること。答えは${a-b}です。`,'引く数の符号を変えて足します。');
if(f==='signed-missing-addend')q=make('g',2,f,'create',`${signed(a)}＋□＝${b}。□に入る数は？`,b-a,null,`□＝${b}−${signed(a)}＝${b-a}です。`,'出発点から結果までの変化を求めます。');
if(f==='signed-multiplication')q=make('g',3,f,'solve',`${signed(a)}×${signed(b)}＝？`,a*b,null,`符号を判断し、大きさを掛けます。結果は${a*b}です。`,'一方が0なら積は0。同符号の積は正、異符号の積は負です。');
if(f==='signed-division'){const d=b===0?6:b;q=make('g',3,f,'solve',`${signed(a*d)}÷${signed(d)}＝？`,a,null,`${d}に${a}を掛けると${a*d}なので、商は${a}です。`,'掛け算で逆に確かめよう。');}
if(f==='signed-power-scope'){const n=1+seed%11,bracket=Math.floor(seed/11)%2===0;q=make('g',4,f,'solve',`${bracket?'(−'+n+')':'−'+n}²＝？`,bracket?n*n:-n*n,null,bracket?`括弧内全体を2乗し、(−${n})×(−${n})＝${n*n}です。`:`2乗するのは${n}だけ。−(${n}×${n})＝${-n*n}です。`,'2乗する範囲を確認します。');}
if(f==='signed-mixed')q=make('g',5,f,'solve',`${signed(a)}＋${signed(b)}×(−3)＝？`,a-3*b,null,`先に${b}×(−3)＝${-3*b}。これを${a}に足して${a-3*b}です。`,'乗算を先に計算します。');
if(f==='signed-net-change')q=make('g',6,f,'connect',`朝の気温${a}℃、夕方の気温${b}℃。上昇を正として、夕方までの変化は何℃？`,b-a,null,`後−前＝${b}−${signed(a)}＝${b-a}℃です。`,'下がった場合は負の変化になります。',{answerUnit:'℃'});
if(f==='signed-distance')q=make('g',1,f,'connect',`数直線の${a}の点と${b}の点の距離は？`,Math.abs(b-a),null,`大きい数から小さい数を引き、${Math.max(a,b)}−${signed(Math.min(a,b))}＝${Math.abs(b-a)}です。`,'距離は負になりません。');
if(!q)throw Error('Unknown signed family');q.id=U+'-g6-'+f+'-'+seed;return q;};
C.allPilotSkills=Object.values(C.pilots).flatMap(p=>p.skills);
})(typeof window==='undefined'?globalThis:window);
