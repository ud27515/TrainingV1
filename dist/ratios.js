(function(root){'use strict';const C=root.TrailContent,U='ma-ratio';
const labels=['割合の基準','増減と基準の変化','比の配分','濃度と質量','速さと単位','過不足・売買の立式','移動と重なり'];
const p=C.pilots[U]={skills:labels.map((name,i)=>({id:U+':0'+(i+1),name})),bank:[],families:[],seeds:121,description:'何を基準に比べるか、どの距離・時間を使うかを確かめてから式にします。',limitation:'立式は選択と数値入力で確認します。自由記述や図形を直接動かす操作は未対応です。'};
function make(id,k,f,mode,prompt,answer,wrong,why,hint,extra={}){return {id:U+'-v8-'+id,unit:U,primarySkill:U+':0'+k,family:f,mode,prompt,answer:String(answer),options:wrong?[String(answer),...wrong]:null,grading:wrong?'choice':'number',explanation:why,hints:[hint,why],passage:'',tags:[U,'number'],version:8,...extra};}
function add(...args){p.bank.push(make(...args));}
add('base',1,'ratio-base-identification','detect','「女子は男子の80％」の80％を求めるとき、基準量は？','男子の人数',['女子の人数','全員の人数'],'「男子の」を基準に女子を比べるので、女子÷男子＝0.8です。','何を100％としているか読み取ろう。');
add('part',1,'ratio-part','solve','全体150人のうち40％が参加した。参加者は何人？',60,null,'150×0.4＝60人です。','40％を小数に直して、基準の人数に掛けます。',{answerUnit:'人'});
add('reverse',1,'ratio-reverse-base','create','ある数xの30％が18である。基準の数を求める式は？','x＝18÷0.3',['x＝18×0.3','x＝18÷30'],'0.3x＝18なので0.3で割ります。','比較する量＝基準量×割合です。');
add('successive',2,'ratio-successive-change','detect','1000円を20％値上げし、その価格から20％値下げした。最後の価格は？','960円',['1000円','800円'],'1000×1.2×0.8＝960円。値下げの基準は1200円です。','同じ20％でも、掛ける元の価格が違います。');
add('growth-rate',2,'ratio-growth-rate','solve','人数が80人から100人になった。増加率は何％？',25,null,'増えた20人を増加前の80人で割り、100倍して25％です。','増えた人数を、元の人数と比べます。',{answerUnit:'%'});
add('restore-rate',2,'ratio-recovery-rate','connect','価格を20％下げた後、元の価格に戻すには、値下げ後の価格を何％上げる？',25,null,'元を100とすると値下げ後は80。20÷80×100＝25％です。','元の価格を100として考えてみよう。',{answerUnit:'%'});
add('share',3,'ratio-partition','solve','120個をAとBに2：3で分ける。Aは何個？',48,null,'全体は比の5つ分。120÷5×2＝48個です。','Aの2だけでなく、全体の2＋3を使います。',{answerUnit:'個'});
add('difference',3,'ratio-difference','connect','AとBの数の比は3：5。BはAより14多い。Aの数は？',21,null,'差の2つ分が14なので1つ分は7。Aは3×7＝21です。','差が比のいくつ分か考えよう。');
add('part-whole',3,'ratio-part-whole','detect','A：B＝2：3だから「Aは全体の2/3」とした。正しくは？','Aは全体の2/5',['Aは全体の3/5','Aは全体の3/2'],'全体は2＋3＝5の比なので、Aの割合は2/5です。','Bとの比と、全体に対する割合を区別します。');
add('concentration',4,'ratio-concentration-denominator','detect','食塩10gを水90gに溶かした。濃度を表す正しい計算は？','10÷100×100',['10÷90×100','90÷100×100'],'濃度の基準は食塩水全体100gで、食塩だけを分子にします。','食塩水の重さは水と食塩の合計です。');
add('dilution',4,'ratio-dilution','solve','10％の食塩水200gに水300gを加えた。濃度は何％？',4,null,'食塩は20gのまま、全体は500g。20÷500×100＝4％です。','水を足しても食塩の重さは変わりません。',{answerUnit:'%'});
add('mixture',4,'ratio-weighted-mixture','create','4％の食塩水100gと10％の食塩水200gを混ぜる。食塩の合計量を求める式は？','100×0.04＋200×0.10',['(4＋10)÷2','300×0.14'],'食塩の量をそれぞれ求めて足します。重さが違うので濃度の単純平均は使えません。','混ぜても、それぞれの食塩の量は失われません。');
add('speed',5,'ratio-speed-conversion','solve','時速6kmで15分歩いた。距離は何m？',1500,null,'15分は1/4時間。6×1/4＝1.5km＝1500mです。','時間と距離の単位を合わせます。',{answerUnit:'m'});
add('average',5,'ratio-average-speed','detect','同じ距離を、行きは時速4km、帰りは時速6kmで歩いた。往復の平均の速さは？','時速4.8km',['時速5km','時速10km'],'片道12kmなら合計24km、時間は3＋2＝5時間。24÷5＝4.8です。','平均は合計距離÷合計時間です。');
add('catchup',5,'ratio-relative-speed','create','Aは毎分60mで歩く。Bは同じ場所を5分後に出発し、毎分90mで同じ方向へ進む。Bの出発からx分後に追いつく式は？','90x＝60(x＋5)',['90(x＋5)＝60x','90x＝60x＋5'],'Aの歩く時間はBより5分長く、追いつく位置までの距離が等しくなります。','時刻の基準をBの出発にそろえます。');
add('shortage',6,'ratio-shortage','create','1人に4個ずつ配ると6個余り、5個ずつ配ると3個足りない。人数をx人とした式は？','4x＋6＝5x−3',['4x−6＝5x＋3','4x＋6＝5x＋3'],'持っている個数は、4個ずつの必要量に6を足し、5個ずつの必要量から3を引いた数です。','余る・足りないを、実際に持っている個数に直します。');
add('profit',6,'ratio-selling-model','connect','仕入れ値x円に、その20％の利益を加えて売る。売値は？','1.2x円',['0.2x円','x＋20円'],'売値は仕入れ値100％と利益20％の合計120％です。','利益だけでなく仕入れ値も含めます。');
add('count-constraint',6,'ratio-integer-feasibility','detect','同じ値段の品物を買い、式を解くと個数が2.5個になった。品物は1個単位でしか買えない。この解の扱いは？','条件を満たす購入個数としては使えない',['四捨五入して3個を解にする','小数部分を切り捨て2個を解にする'],'方程式の解でも、個数が整数という条件を満たす必要があります。','求めた数が場面の条件に合うか確かめます。');
add('overlap-enter',7,'ratio-overlap-entry','connect','固定長方形は横6cm・高さ3cm。動く長方形は横4cm・高さ3cm。上下の位置をそろえ、動く長方形の右辺が固定長方形の左辺に触れた瞬間を0秒とする。右へ毎秒1cm進む。2秒後の重なりの面積は何cm²？',6,null,'入り込んだ幅は2cmで高さ3cm。2×3＝6cm²です。','0秒で重なりは0。2秒間に進む幅を考えます。',{answerUnit:'cm²'});
add('overlap-stage',7,'ratio-overlap-plateau','detect','上下をそろえた同じ高さの固定長方形（横6cm）に、横4cmの長方形が右へ毎秒1cmで入る。右辺が固定側の左辺に触れてから5秒後、重なる横幅は？','4cm',['5cm','6cm'],'動く長方形全体が固定側の内側に入っているので、重なる幅は動く側の4cmです。','入った距離がそのまま重なる幅になるのは、入り始めの間だけです。');
add('train-hidden',7,'ratio-hidden-vs-passage','create','長さ100mの列車が長さ300mのトンネルを毎秒20mで通る。列車全体がトンネル内にある時間は何秒？',10,null,'最後尾が入口に入ってから先頭が出口に達するまで、先頭が進む距離は300−100＝200m。200÷20＝10秒です。','「先頭が入ってから最後尾が出るまで」の時間とは別です。',{answerUnit:'秒'});
p.families=['ratio-part','ratio-reverse-base-value','ratio-partition','ratio-difference','ratio-dilution','ratio-speed-conversion','ratio-shortage-value','ratio-overlap-entry'];
p.generate=(f,seed)=>{if(!Number.isInteger(seed)||seed<0||seed>=121)throw Error('Invalid ratio seed');const a=1+seed%11,b=1+Math.floor(seed/11);let q;
if(f==='ratio-part'){const base=20*b,percent=5*a;q=make('g',1,f,'solve',`全体${base}人の${percent}％は何人？`,a*b,null,`${base}×${percent}/100＝${a*b}人です。`,'基準量に割合を掛けます。',{answerUnit:'人'});}
if(f==='ratio-reverse-base-value'){const percent=5*a,part=a*b;q=make('g',1,f,'solve',`ある数の${percent}％が${part}。ある数はいくつ？`,20*b,null,`${part}÷(${percent}/100)＝${20*b}です。`,'比較する量を割合で割ります。');}
if(f==='ratio-partition'){const total=(a+b)*12;q=make('g',3,f,'solve',`${total}個をAとBに${a}：${b}で分ける。Aは何個？`,12*a,null,`比の合計${a+b}で全体を割ると12。Aは12×${a}＝${12*a}個です。`,'比の合計で全体を割り、Aの比を掛けます。',{answerUnit:'個'});}
if(f==='ratio-difference'){const diff=7*b;q=make('g',3,f,'connect',`A：B＝${a}：${a+b}。BはAより${diff}多い。Aはいくつ？`,7*a,null,`比の差${b}が${diff}に当たるので1つ分は7。Aは${7*a}です。`,'比の差と実際の差を対応させます。');}
if(f==='ratio-dilution'){const concentration=2*a,mass=100*b,water=100*b;q=make('g',4,f,'solve',`${concentration}％の食塩水${mass}gに水${water}gを加える。濃度は何％？`,concentration/2,null,`食塩量は変わらず、全体の重さが2倍になるので${concentration/2}％です。`,'食塩の質量と、混ぜた後の全体の質量を分けます。',{answerUnit:'%'});}
if(f==='ratio-speed-conversion'){const speed=3*a,minutes=4*b;q=make('g',5,f,'solve',`時速${speed}kmで${minutes}分進むと、距離は何m？`,200*a*b,null,`${speed}×1000×${minutes}/60＝${200*a*b}mです。`,'kmをm、分を時間にそろえます。',{answerUnit:'m'});}
if(f==='ratio-shortage-value'){const extra=a,short=b;q=make('g',6,f,'solve',`1人4個ずつなら${extra}個余り、5個ずつなら${short}個足りない。何人いる？`,a+b,null,`4x＋${a}＝5x−${b}より、x＝${a+b}人です。`,'持っている個数を二通りに表します。',{answerUnit:'人'});}
if(f==='ratio-overlap-entry'){const width=a+2,height=b,time=a;q=make('g',7,f,'connect',`固定長方形は横${width+2}cm、動く長方形は横${width}cm、両方の高さは${height}cm。上下をそろえ、動く側の右辺が固定側の左辺に触れてから、右へ毎秒1cmで${time}秒進む。重なる面積は何cm²？`,a*b,null,`まだ入り始めの区間なので、重なる幅は${time}cm。高さ${height}cmを掛けて${a*b}cm²です。`,'移動した幅が動く長方形の横幅を超えていないか確認します。',{answerUnit:'cm²'});}
if(!q)throw Error('Unknown ratio family');q.id=U+'-g8-'+f+'-'+seed;return q;};
C.allPilotSkills=Object.values(C.pilots).flatMap(p=>p.skills);
})(typeof window==='undefined'?globalThis:window);
