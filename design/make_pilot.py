from pathlib import Path
import json
r=Path(__file__).resolve().parent
items=[]
def add(n,skills,family,operation,representation,level,prompt,answer,explanation,options=None,misconceptions=None,grading='exact',rubric=None):
 items.append(dict(id=f'eq-design-{n:02}',version=1,skill_ids=['math-equation:'+str(k).zfill(2) for k in skills],primary_skill_id='math-equation:'+str(skills[0]).zfill(2),family_id=family,structure_signature=family,operation=operation,representation=representation,level=level,prompt=prompt,answer=answer,options=options,misconception_by_option=misconceptions or {},explanation=explanation,grading=grading,rubric=rubric or [],source='original_authored',review_status='draft_not_released',estimated_effort='standard',mastery_evidence='primary_skill_only_unless_steps_observed'))
add(1,[1,2],'balance_inverse','solve','equation','foundation','3x＋5＝20 を解き、最初に両辺へ行う操作も答えてください。',{'x':'5','first_operation':'両辺から5を引く'},'両辺から5を引くと3x=15。両辺を3で割るとx=5。',grading='structured',rubric=['両辺から5を引く','x=5'])
add(2,[3],'brackets_both_sides','solve','equation','application','3(x−2)＝2x＋7 を解いてください。','13','3x−6=2x+7。両辺から2xを引き、6を足すとx=13。')
add(3,[3],'rational_denominator','solve','equation','application','(x−1)/3 ＋ (x＋2)/2 ＝4 を解いてください。','4','両辺を6倍すると2(x−1)+3(x+2)=24。5x+4=24からx=4。')
add(4,[3],'distribution_error','diagnose','worked_solution','application','2(x＋3)＝14 → 2x＋3＝14 → 2x＝11 → x＝5.5。最初に等式の意味が変わったのはどの操作ですか？','括弧を外す操作','2をxだけでなく3にも掛けるため、2x+6=14が正しい式です。',['括弧を外す操作','両辺から3を引く操作','両辺を2で割る操作'],{'両辺から3を引く操作':'最初の誤りを追跡できない','両辺を2で割る操作':'等式操作と式の展開を混同'})
add(5,[4],'substitution_check','verify','candidate_answer','foundation','4x−3＝−11 の解をx＝−2と予想しました。代入した左辺の値と、この予想が正しいかを答えてください。',{'left':'-11','valid':True},'4×(−2)−3=−11で、右辺と一致します。',grading='structured',rubric=['左辺−11','左右一致を確認'])
add(6,[5],'fixed_plus_variable','model','word_problem','application','1本80円の鉛筆を何本かと、120円の消しゴムを1個買い、合計520円でした。鉛筆の本数をxとして式を選んでください。','80x＋120＝520','鉛筆の代金80xと消しゴム代120の和が520です。',['80x＋120＝520','(80＋120)x＝520','80＋120x＝520'],{'(80＋120)x＝520':'固定費を数量倍する','80＋120x＝520':'未知数の対象を取り違える'})
add(7,[6,5],'discrete_feasibility','evaluate','word_problem','transfer','40人を、3人ずつの班と5人ずつの班に分け、合計9班にします。全員がどちらかの班に一度だけ入るとき、この分け方は可能ですか？ 理由も答えてください。','不可能','5人班をxとすると5x+3(9−x)=40。x=6.5となるが班数は整数なので不可能です。',grading='rubric',rubric=['5x+3(9−x)=40等の立式','x=6.5等の矛盾を導く','班数は整数という条件に戻す'])
add(8,[6,5],'hidden_vs_full_crossing','model','motion_word_problem','transfer','長さ180mの電車が長さ420mのトンネルを一定の速さで通ります。電車の全体がトンネル内に隠れている時間は12秒です。先頭がトンネルに入ってから最後尾が出るまで何秒ですか？','30','全体が隠れている間に先頭が進む距離は420−180=240m。速さは240÷12=20m/秒。入り始めから出終わるまでは420+180=600m進むので30秒です。')
add(9,[7,5],'underdetermined_constraints','evaluate','word_problem','transfer','大人券1000円、子ども券600円を、それぞれ1枚以上買って合計6600円でした。大人券の枚数は一つに決まりますか？','一つに決まらない','大人3枚・子ども6枚でも、大人6枚・子ども1枚でも6600円です。合計枚数などの条件が必要です。',['一つに決まらない','3枚に決まる','6枚に決まる'],{'3枚に決まる':'一つの適合例を唯一解と誤認する','6枚に決まる':'一つの適合例を唯一解と誤認する'})
add(10,[7,1],'contradiction','classify','equation','transfer','x＋4＝x＋7 を満たす数xはありますか？','ない','両辺からxを引くと4=7という成立しない等式になるため、解はありません。',['ない','x＝3だけ','x＝−3だけ'],{'x＝3だけ':'文字項の相殺をせず定数差を解とする','x＝−3だけ':'文字項の相殺をせず定数差を解とする'})
add(11,[7,1],'identity','classify','equation','transfer','3(x＋2)＝3x＋6 を満たすxは？','どの数でもよい','左辺を展開すると右辺と同じ式になり、どの数を代入しても成り立ちます。',['どの数でもよい','x＝0だけ','当てはまる数はない'],{'x＝0だけ':'0=0をx=0と誤認する','当てはまる数はない':'文字が消えたことを矛盾と誤認する'})
add(12,[4,3],'inverse_construction','construct','equation','application','x＝4が2x＋c＝13の解になるように、定数cを決めてください。','5','xに4を代入すると8+c=13。c=5です。')
(r/'pilot-items.json').write_text(json.dumps(items,ensure_ascii=False,indent=2))
lines=['# 一次方程式：品質基準を試すための見本12問','','このファイルは設計用の見本です。アプリへの組み込み、記述採点の実装、教材レビューは未完了です。問題数の水増し用テンプレートではなく、構造の違いを比較するために作成しています。','']
for q in items:
 lines+=['## '+q['id'],'',q['prompt'],'']
 if q['options']:lines += ['- '+o for o in q['options']]+['']
 lines+=['正答：'+(json.dumps(q['answer'],ensure_ascii=False) if not isinstance(q['answer'],str) else q['answer']),'','解説：'+q['explanation'],'','測る力：'+', '.join(q['skill_ids'])+' ／ 主評価は '+q['primary_skill_id'],'','構造：'+q['family_id']+' ／ 水準：'+q['level'],'']
 if q['rubric']:lines+=['採点観点：'+'、'.join(q['rubric']),'']
(r/'pilot-examples.md').write_text('\n'.join(lines))
print('12 pilot items written')
