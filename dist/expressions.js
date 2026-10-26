(function(root){'use strict';const C=root.TrailContent,U='ma-expression';
const labels=['文字式の積・商','代入と式の値','同類項','分配法則','数量の表現','等式・不等式','式の変形'];
const p=C.pilots[U]={skills:labels.map((name,i)=>({id:U+':0'+(i+1),name})),bank:[],families:[],seeds:121,description:'式の表し方・計算・数量の意味を分け、式の誤りや条件も確かめます。',limitation:'式全体の自由入力や記述の理由は採点しません。式の変形は発展的な確認を含み、未習でもヒントを使えます。'};
function make(id,k,f,mode,prompt,answer,wrong,why,hint,extra={}){return {id:U+'-v7-'+id,unit:U,primarySkill:U+':0'+k,family:f,mode,prompt,answer:String(answer),options:wrong?[String(answer),...wrong]:null,grading:wrong?'choice':'number',explanation:why,hints:[hint,why],passage:'',tags:[U,'algebra'],version:7,...extra};}
function add(...args){p.bank.push(make(...args));}
add('product',1,'expr-product-notation','solve','a×a×3を、乗算記号を省いて表すと？','3a²',['3a','a³'],'aが2個掛かるのでa²。数の係数3は前に書きます。','掛けるaの個数と、係数を区別します。');
add('quotient',1,'expr-quotient-scope','detect','(a＋b)÷3をa＋b/3と書いた。正しくは？','(a＋b)/3',['a/3＋b','a＋3b'],'和全体を3で割るため、括弧で分子の範囲を示します。','aもbも3で割られる必要があります。');
add('coefficient',1,'expr-unit-coefficient','create','(−1)×x×yを、係数1を省いて表すと？','−xy',['xy','−x−y'],'−1の1は省き、負の符号は残します。xとyは積です。','掛け算を足し算に変えないようにしよう。');
add('negative-sub',2,'expr-substitution-square','solve','x＝−3のとき、x²＋2xの値は？',3,null,'(−3)²＋2×(−3)＝9−6＝3です。','負の数を代入するときは括弧を付けます。');
add('substitution-error',2,'expr-substitution-error','detect','a＝−2を3a＋1に代入する最初の式として正しいのは？','3×(−2)＋1',['3−2＋1','3×2＋1'],'3aは3とaの積です。aの負の符号を含めて代入します。','文字の前にある数字は掛け算の係数です。');
add('two-values',2,'expr-two-variable-substitution','connect','a＝2、b＝−3のとき、a−2bの値は？',8,null,'2−2×(−3)＝2＋6＝8です。','bの値と、その前の引き算を両方残します。');
add('like-terms',3,'expr-like-coefficient','solve','3x−5xをまとめた式は？','−2x',['−2','−2x²'],'xが3個から5個減るので、係数3−5＝−2です。','文字部分は変えず、係数を計算します。');
add('unlike',3,'expr-unlike-terms','detect','2a＋3bを5abとした。正しい説明は？','文字部分が異なるので、一つの同類項にはまとめられない',['係数を掛ければ6abにまとめられる','aとbの順番を変えれば5baにまとめられる'],'加算と乗算は別です。aとbは文字部分が違い、同類項ではありません。','足している量が同じ文字の何個分か確認しよう。');
add('reverse-coefficient',3,'expr-missing-coefficient','create','どのxでも、□x＋2x＝7xとなる。□に入る数は？',5,null,'係数について□＋2＝7なので、□＝5です。','x＝0だけでなく、どの値でも成り立つ必要があります。');
add('distribution',4,'expr-distribute-negative','solve','−2(x−3)の括弧を外すと？','−2x＋6',['−2x−6','−2x＋3'],'−2をxにも−3にも掛けます。負×負で定数項は＋6です。','括弧内の両方の項に掛けます。');
add('minus-bracket',4,'expr-minus-bracket','detect','5x−(2x−4)を5x−2x−4とした。正しい結果は？','3x＋4',['3x−4','7x−4'],'括弧の前の−は−1倍。中の両方の符号が変わります。','−(2x−4)＝−2x＋4です。');
add('reverse-distribution',4,'expr-factor-common','create','6x＋9を、3を共通因数として括弧でまとめると？','3(2x＋3)',['3(2x＋9)','3(6x＋3)'],'各項を3で割った2xと3を括弧内に置きます。','括弧を外して元の式に戻るか確かめよう。');
add('cost',5,'expr-total-cost','create','1冊a円のノート3冊と、1本80円のペン2本の代金は？','3a＋160円',['3(a＋160)円','3a＋80円'],'ノートは3a円、ペンは80×2＝160円で、合計します。','品物ごとに単価×個数を求めます。');
add('speed-unit',5,'expr-speed-units','connect','毎分v mで30秒歩いた距離は？','v/2 m',['30v m','2v m'],'30秒は1/2分なので、距離はv×1/2です。','速さの「毎分」に時間の単位をそろえよう。');
add('rectangle',5,'expr-perimeter','detect','縦a cm、横b cmの長方形の周の長さをab cmとした。正しくは？','2(a＋b) cm',['a＋b cm','2ab cm'],'周は縦2本と横2本の合計です。abは面積を表します。','囲む線の長さを全て足します。');
add('budget',6,'expr-inclusive-boundary','create','1個x円の品物を3個買い、代金が500円以下になる条件は？','3x≤500',['3x＜500','3x≥500'],'以下には500円ちょうども含むため≤を使います。','境界の500円を含むか確かめよう。');
add('strict-boundary',6,'expr-boundary-check','detect','a＞5を満たす数を選んでください。','5.1',['5','4.9'],'＞は等しい場合を含まないため、5より大きい5.1だけが満たします。','不等号に等号が付いているか見よう。');
add('equation-meaning',6,'expr-balance-condition','connect','箱Aにはa個、箱Bにはb個ある。AからBへ2個移すと同数になる条件は？','a−2＝b＋2',['a−2＝b−2','a＋2＝b−2'],'Aは2個減り、Bは2個増えた後で等しくなります。','移動前後でどちらが増えるか確認しよう。');
add('isolate-sum',7,'expr-isolate-addition','solve','y＝3x＋2を、xについて表すと？','x＝(y−2)/3',['x＝y−2/3','x＝(y＋2)/3'],'両辺から2を引き、全体を3で割ります。','足した操作、掛けた操作を逆順に戻します。');
add('isolate-area',7,'expr-isolate-product','create','三角形の面積S＝ah/2。a≠0としてhを表すと？','h＝2S/a',['h＝S/(2a)','h＝2a/S'],'両辺を2倍し、aで割ります。0で割れないのでa≠0が必要です。','まず分母の2を取り除きます。');
add('zero-condition',7,'expr-isolation-condition','detect','ax＝bからx＝b/aと変形するとき必要な条件は？','a≠0',['b≠0','x≠0'],'割る数aが0でないことが必要です。bが0でも、a≠0なら変形できます。','何で割っているかに注目します。');
add('fraction-sub',2,'expr-linear-substitution','solve','x＝−1/2のとき、4x＋3の値は？',1,null,'4×(−1/2)＋3＝−2＋3＝1です。','分数を一つの数として括弧付きで代入します。');
add('coefficient-zero',3,'expr-like-coefficient','solve','どのxでも、5x−5xは何になる？',0,null,'係数の差が0になるので0x＝0です。','文字が残る必要があるか、xの個数を考えよう。');
const signed=n=>n<0?'('+n+')':String(n);
p.families=['expr-linear-substitution','expr-two-variable-substitution','expr-like-coefficient','expr-missing-coefficient','expr-distribute-value','expr-total-cost-value','expr-isolate-value','expr-substitution-square'];
p.generate=(f,seed)=>{if(!Number.isInteger(seed)||seed<0||seed>=121)throw Error('Invalid expression seed');const a=seed%11-5,b=Math.floor(seed/11)-5,k=2+seed%4;let q;
if(f==='expr-linear-substitution')q=make('g',2,f,'solve',`x＝${a}のとき、${k}x＋${signed(b)}の値は？`,k*a+b,null,`${k}×${signed(a)}＋${signed(b)}＝${k*a+b}です。`,'xを括弧付きの数に置き換えます。');
if(f==='expr-two-variable-substitution')q=make('g',2,f,'connect',`a＝${a}、b＝${b}のとき、a−2bの値は？`,a-2*b,null,`${a}−2×${signed(b)}＝${a-2*b}です。`,'掛け算を先に行い、引く数の符号を確認します。');
if(f==='expr-like-coefficient')q=make('g',3,f,'solve',`${signed(a)}x＋${signed(b)}x＝cxがどのxでも成り立つ。cはいくつ？`,a+b,null,`同類項なので係数を足して${a}＋${signed(b)}＝${a+b}です。`,'文字部分は同じなので、係数だけをまとめます。');
if(f==='expr-missing-coefficient')q=make('g',3,f,'create',`□x＋${signed(a)}x＝${signed(b)}xがどのxでも成り立つ。□は？`,b-a,null,`係数について□＋${signed(a)}＝${b}。□＝${b-a}です。`,'係数どうしの関係を考えます。');
if(f==='expr-distribute-value')q=make('g',4,f,'solve',`${k}(x＋${signed(a)})＝${k}x＋cがどのxでも成り立つ。cはいくつ？`,k*a,null,`括弧内の${a}にも${k}を掛けるので、c＝${k*a}です。`,'分配法則では両方の項に掛けます。');
if(f==='expr-total-cost-value'){const price=50+10*(a+5),count=b+6;q=make('g',5,f,'connect',`1冊a円のノート${count}冊と60円のペン1本の代金は${count}a＋60円。a＝${price}のとき、合計は何円？`,count*price+60,null,`${count}×${price}＋60＝${count*price+60}円です。`,'単価を代入し、冊数を掛けてからペン代を足します。',{answerUnit:'円'});}
if(f==='expr-isolate-value'){const y=k*a+b;q=make('g',7,f,'solve',`y＝${k}x＋${signed(b)}。y＝${y}のとき、xはいくつ？`,a,null,`両辺から${b}を引いて${k}で割ると、x＝${a}です。`,'まず足されている数を両辺から引きます。');}
if(f==='expr-substitution-square')q=make('g',2,f,'solve',`x＝${a}のとき、x²＋${signed(b)}xの値は？`,a*a+b*a,null,`${signed(a)}²＋${signed(b)}×${signed(a)}＝${a*a+b*a}です。`,'負の値の2乗では、負の符号も括弧に入れます。');
if(!q)throw Error('Unknown expression family');q.id=U+'-g7-'+f+'-'+seed;return q;};
C.allPilotSkills=Object.values(C.pilots).flatMap(p=>p.skills);
})(typeof window==='undefined'?globalThis:window);
