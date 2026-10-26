(function(root){'use strict';
const C=root.TrailContent;
C.equationSkills=[['01','等式の性質'],['02','移項と符号'],['03','解法の選択'],['04','検算'],['05','数量関係の立式'],['06','文脈・単位の確認'],['07','条件の吟味']].map(([id,name])=>({id:'math-equation:'+id,name}));
const make=(id,family,skill,mode,prompt,answer,explanation,options,hints)=>({id,unit:'math-equation',mode,prompt,answer:String(answer),explanation,options:options||null,passage:'',tags:['equation',family],version:2,family,primarySkill:'math-equation:'+skill,grading:options?'choice':'number',hints:hints||['何が未知数で、どの量が等しいかを確かめよう。','両辺に同じ操作をして、未知数を一方へ集めよう。'],evidenceLevel:'application'});
const items=[];
function fixed(id,family,skill,mode,prompt,answer,explanation,options,hints){items.push(make('eq-v2-'+id,family,skill,mode,prompt,answer,explanation,options,hints));}
fixed('balance','balance_reason','01','detect','3x＋5＝20。等式を保ったまま5を取り除く操作は？','両辺から5を引く','左辺だけを変えると左右の等しさが保てません。両辺から5を引くと3x=15です。',['両辺から5を引く','左辺だけから5を引く','左辺から5を引き、右辺に5を足す'],['左右を同じ重さのてんびんと考えよう。','片側だけを変えると、等しさはどうなる？']);
fixed('division','balance_division','01','detect','6x＝18をx＝3へ変形した。行った操作は？','両辺を6で割った','左辺の6xも右辺の18も6で割るとx=3です。',['両辺を6で割った','左辺を6で割り、右辺から6を引いた','左辺だけを6で割った']);
fixed('transpose','transpose_sign','02','detect','4x−7＝9を4x＝9−7とした。正しく直すと？','4x＝9＋7','両辺に7を足す操作なので右辺は9+7になります。',['4x＝9＋7','4x＝7−9','4x＝9÷7'],['移項という言葉を使わず、両辺に何をするか考えよう。','−7を消すには7を足します。']);
fixed('negative','negative_coefficient','02','solve','−3x＝12。xの値は？',-4,'両辺を−3で割ります。12÷(−3)=−4です。');
fixed('distribution','distribution_error','03','detect','2(x＋3)＝14 → 2x＋3＝14 → 2x＝11 → x＝5.5。最初に誤った操作は？','括弧を外す操作','2はxにも3にも掛かるので、2x+6=14が正しい展開です。',['括弧を外す操作','両辺から3を引く操作','両辺を2で割る操作'],['最初の式から、一段ずつ等しさを確かめよう。','括弧の外の2は、中のどの項に掛かる？']);
fixed('check','substitution_check','04','solve','4x−3＝−11の解をx＝−2と予想した。代入した左辺の値は？',-11,'4×(−2)−3=−11。右辺と一致するので予想は正しいと確認できます。',null,['左辺のxだけを−2に置き換えます。','掛け算を先に計算してから3を引こう。']);
fixed('model','fixed_plus_variable','05','create','1本80円の鉛筆をx本と、120円の消しゴムを1個買い、合計520円だった。式を選んでください。','80x＋120＝520','鉛筆の代金は80x、消しゴム代は固定の120です。',['80x＋120＝520','(80＋120)x＝520','80＋120x＝520'],['xが表すものと、個数が固定されたものを分けよう。','鉛筆の代金と消しゴムの代金を足します。']);
fixed('table','table_model','05','connect','ある料金は、利用1回で350円、2回で500円、3回で650円。基本料金と1回ごとの料金が一定なら、x回の料金yは？','y＝150x＋200','1回増えると150円増えます。基本料金は350−150=200円です。',['y＝150x＋200','y＝200x＋150','y＝350x'],['回数が1増えると、料金はいくら増える？','1回の料金から、その増加分を引くと基本料金が分かります。']);
fixed('integer','discrete_feasibility','06','connect','40人を3人班と5人班に分けて計9班にしたい。5人班をxとすると5x＋3(9−x)＝40からx＝6.5となった。結論は？','この条件では分けられない','班数は整数でなければなりません。6.5を7へ丸めると総人数が変わります。',['この条件では分けられない','5人班を7班に丸める','5人班を6班に丸める'],['xは何の個数を表している？','その個数に小数を使ってよいか考えよう。']);
fixed('tunnel','hidden_vs_crossing','06','connect','長さ180mの電車が長さ420mのトンネルを一定の速さで通る。電車全体が隠れている時間は12秒。先頭が入り始めてから最後尾が出るまで何秒？',30,'全体が隠れる間に進む距離は420−180=240m。速さは20m/秒。入り始めから出終わるまで進む距離は420+180=600mなので30秒です。',null,['全体が隠れ始めるとき、最後尾は入口、先頭は入口から180m先です。','隠れる間は420−180m、入り始めから出終わるまでは420＋180m進みます。']);
fixed('missing','underdetermined','07','detect','大人券1000円、子ども券600円をそれぞれ1枚以上買って6600円だった。大人券の枚数は？','一つに決まらない','大人3枚と子ども6枚でも、大人6枚と子ども1枚でも6600円です。合計枚数など別の条件が必要です。',['一つに決まらない','3枚に決まる','6枚に決まる'],['条件に合う組が見つかっても、それだけで唯一とは限りません。','大人3枚と6枚の場合を、それぞれ試そう。']);
fixed('contradiction','contradiction','07','detect','x＋4＝x＋7を満たす数xは？','当てはまる数はない','両辺からxを引くと4=7となり成立しません。',['当てはまる数はない','x＝3だけ','x＝−3だけ'],['両辺に同じxがあります。','両辺からxを引いた結果は成り立つ？']);
fixed('identity','identity','07','detect','3(x＋2)＝3x＋6を満たすxは？','どの数でもよい','左辺を展開すると右辺と同じ式です。どの数を代入しても成立します。',['どの数でもよい','x＝0だけ','当てはまる数はない'],['左辺の括弧を外そう。','両辺が同じ式になる場合、xを一つに決められる？']);
items.find(q=>q.id==='eq-v2-tunnel').answerUnit='秒';
C.equationBank=items;
C.equationFamilies=['inverse_operations','both_sides_brackets','fraction_equation','inverse_construction','percentage_model','perimeter_model','negative_shift','candidate_check','time_units','contradiction_variant','identity_variant'];
C.generateEquation=function(f,seed){
const a=2+seed%7,b=2+Math.floor(seed/7)%7,x=2+Math.floor(seed/49)%9;
let q;
if(f==='inverse_operations')q=make('',f,'01','solve',`${a}x＋${b}＝${a*x+b}。xの値は？`,x,`両辺から${b}を引くと${a}x=${a*x}。両辺を${a}で割ります。`);
if(f==='both_sides_brackets'){let c=x+a*b;q=make('',f,'03','solve',`${a}(x−${b})＝${a-1}x−${c}。xの値は？`,-x,`左辺を展開して${a}x−${a*b}=${a-1}x−${c}。両辺から${a-1}xを引き、${a*b}を足すとx=${-x}です。`);}
if(f==='fraction_equation'){let n=12+a,u=n-2*b,v=n-3*x;q=make('',f,'03','solve',`(x−(${u}))/2 ＋ (x−(${v}))/3 ＝${b+x}。xの値は？`,n,`両辺を6倍すると2つの分母が消えます。2ではなく3を最初の分子に、3ではなく2を次の分子に掛け、5x=${5*n}からx=${n}です。`,null,['分母2と3の最小公倍数は6です。','両辺を6倍すると3(x−('+u+'))＋2(x−('+v+'))＝'+6*(b+x)+'です。']);}
if(f==='inverse_construction')q=make('',f,'04','create',`x＝${x}が${a}x＋c＝${a*x+b}の解になるように、定数cを決めてください。`,b,`xへ${x}を代入すると${a*x}+c=${a*x+b}。c=${b}です。`,null,['解として指定されたxを式に代入しよう。','残ったcの式を解こう。']);
if(f==='percentage_model'){let base=(a+5)*100,rate=(b+1)*5,total=base*(100-rate)/100;q=make('',f,'05','create',`定価x円の品物を${rate}％引きで買ったら${total}円。式は？`,`${(100-rate)/100}x＝${total}`,`支払う割合は100−${rate}=${100-rate}％です。`,[`${(100-rate)/100}x＝${total}`,`${rate/100}x＝${total}`,`x−${rate}＝${total}`],['割引額と支払額を区別しよう。','支払うのは定価の'+(100-rate)+'％です。']);}
if(f==='perimeter_model'){let width=x,len=x+b,per=2*(width+len);q=make('',f,'05','connect',`長方形の横は縦より${b}cm長く、周の長さは${per}cm。縦をx cmとする式は？`,`2x＋2(x＋${b})＝${per}`,`縦と横がそれぞれ2本あります。`,[`2x＋2(x＋${b})＝${per}`,`x＋(x＋${b})＝${per}`,`x(x＋${b})＝${per}`],['周の長さと面積を区別しよう。','縦2本と横2本を足します。']);}
if(f==='negative_shift')q=make('','inverse_operations','02','solve',`${a}x−${b}＝${a*x-b}。xの値は？`,x,`両辺に${b}を足すと${a}x=${a*x}。両辺を${a}で割ります。`);
if(f==='candidate_check'){let right=a*x+b;q=make('',f,'04','detect',`${a}x＋${b}＝${right}の解としてx＝${x+1}を示した。代入による確認として正しいものは？`,`左辺は${right+a}で右辺と一致しない`,`代入すると${a}×${x+1}+${b}=${right+a}なので、示された候補は解ではありません。`,[`左辺は${right+a}で右辺と一致しない`,`左辺は${right}で右辺と一致する`,`左辺は${right-a}で右辺と一致しない`],['候補の値を、元の式のxに入れよう。','掛け算を先に計算し、最後に'+b+'を足します。']);}
if(f==='time_units')q=make('',f,'06','connect',`${a*60}mの道のりを${b}分で一定の速さで進んだ。速さは毎秒何m？ 分数でも答えられます。`,`${a}/${b}`,`${b}分は${b*60}秒。${a*60}÷${b*60}=${a}/${b}m/秒です。`,null,['分と秒をそろえてから距離を時間で割ろう。','1分は60秒です。']);
if(f==='contradiction_variant')q=make('', 'contradiction','07','detect',`${a}x＋${b}＝${a}x＋${b+x}を満たすxは？`,'当てはまる数はない',`両辺から${a}xを引くと${b}=${b+x}となり成立しません。`,['当てはまる数はない',`x＝${x}だけ`,`x＝${-x}だけ`],['両辺のxの項は同じです。','両辺からその項を引くと何が残る？']);
if(f==='identity_variant')q=make('', 'identity','07','detect',`${a}(x＋${b})＝${a}x＋${a*b}を満たすxは？`,'どの数でもよい',`左辺を展開すると${a}x+${a*b}で右辺と同じです。`,['どの数でもよい','x＝0だけ','当てはまる数はない'],['括弧を外して左右の式を比べよう。','左右が同じ式なら、xを変えるとどうなる？']);
if(!q)throw Error('Unknown equation family');
if(f==='inverse_operations')q.hints=['まず両辺から'+b+'を引きます。','残った'+a+'xの係数'+a+'で両辺を割ります。'];
if(f==='negative_shift')q.hints=['−'+b+'を消すには、両辺に'+b+'を足します。','その後、両辺をxの係数'+a+'で割ろう。'];
if(f==='both_sides_brackets')q.hints=['括弧の中の両方の項に'+a+'を掛けます。','両辺から'+(a-1)+'xを引き、その後に'+(a*b)+'を足します。'];
// Identity follows the actual displayed problem, not a seed that may produce a duplicate.
q.id='eq-g2:'+f+':'+[a,b,x].join(':');q.fingerprint=q.prompt;return q;
};
})(typeof window==='undefined'?globalThis:window);
