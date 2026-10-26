from pathlib import Path
import json
r=Path(__file__).resolve().parent
units=json.loads((r/'current-units.json').read_text())
objectives={}
for line in (r/'objectives.txt').read_text().splitlines():
 k,v=line.split('|'); assert k not in objectives;objectives[k]=v.split(';')
assert set(objectives)=={u['id'] for u in units}
additions=[
 ('en-listening','英語','コミュニケーション','音声から情報・要点を捉える',1,['en-be'],['音のまとまりから語句を聞き取る','会話の目的と必要情報を聞き取る','聞いた内容の要点を整理する','聞き直しや速度調整を利用した記録と自力聴取を分ける']),
 ('en-speaking','英語','コミュニケーション','話す・やり取りと発表',1,['en-dialogue'],['質問に内容の合う応答を返す','相手に聞き返して会話を続ける','短い発表を構成して話す','伝わりやすさを振り返り言い直す']),
 ('en-writing','英語','コミュニケーション','目的のある英文を書く',1,['en-be'],['伝えたい内容を短い英文で表す','文どうしをつないでまとまりを作る','目的と相手に合わせて内容を選ぶ','意味と文法の両面から推敲する']),
 ('ja-dialogue','国語','国語3・現代文・語句','話す・聞く・話し合う',1,[],['聞いた話の要点と根拠を分ける','伝える目的に合わせて発表を構成する','相手の意見を確認する質問を作る','共通点と相違点を整理して合意案を作る']),
 ('ex-number','数学','代数','発展・整数と式の証明',2,['ma-expression','ma-expand'],['偶数奇数を文字で表して性質を説明する','余りの条件を式で整理する','連続する整数の性質を証明する']),
 ('ex-geometry','数学','幾何','発展・複合図形と動点',2,['ge-congruence','ma-linear'],['図形の位置が変わる時刻を場合分けする','面積の変化を区間ごとの式で表す','補助線の候補を根拠から比較する'])
]
for id,subject,sub,name,grade,pre,goals in additions:
 units.append(dict(id=id,subject=subject,sub=sub,name=name,grade=grade,prerequisites=pre,scope='proposed_extension' if id.startswith('ex-') else 'core_gap',implementation='not_implemented'))
 objectives[id]=goals
levels={
 '数学':{'foundation':'条件・量・単位を読み、基本操作を理由付きで行う','application':'表現を変えた問題で方法を選び、検算する','transfer':'複数条件や別場面で立式・場合分け・反例を用いて説明する'},
 '英語':{'foundation':'語句・形式と意味を対応させる','application':'初見の短い文脈で必要情報を捉え、目的に合う表現を選ぶ','transfer':'未知の素材で情報を統合し、自分の内容を伝える'},
 '国語':{'foundation':'語句・文法・本文の明示情報を捉える','application':'初見の本文を根拠に関係や心情・論旨を説明する','transfer':'複数の根拠・解釈・資料を比較し、制約に合う記述を作る'},
 '理科':{'foundation':'用語・量・観察事実を正しく対応させる','application':'実験条件と結果を関連付け、計算・図・粒子モデルで説明する','transfer':'未知の結果を既習概念で説明し、検証できる実験を設計する'},
 '社会':{'foundation':'位置・時系列・制度と基本事実を対応させる','application':'初見資料から関係・原因・違いを根拠付きで説明する','transfer':'複数資料と立場を比較し、条件付きの結論や提案を構成する'}}
source_map={'国語':'https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_002.pdf','社会':'https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf','数学':'https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf','理科':'https://www.mext.go.jp/content/20260730-mxt_kyoiku01-100002608_05.pdf','英語':'https://www.mext.go.jp/content/20210531-mxt_kyoiku01-100002608_010.pdf'}
skills=[]
for u in units:
 u.setdefault('scope','core_design');u.setdefault('implementation','entry_questions_only')
 u['source_reference']=source_map[u['subject']];u['source_alignment_status']='domain_reference_only_item_mapping_pending'
 u['grade_policy']='suggested_not_lock';u['levels']=levels[u['subject']]
 u['skill_ids']=[]
 for i,obj in enumerate(objectives[u['id']],1):
  sid=u['id']+':'+str(i).zfill(2);u['skill_ids'].append(sid)
  skills.append(dict(id=sid,unit_id=u['id'],objective=obj,recommended_prerequisite_units=u['prerequisites'],prerequisite_skill_ids=[],prerequisite_review_status='unit_links_draft_skill_links_pending',evidence_levels=['foundation','application','transfer'],evidence_status='unmapped',content_status='design_only'))
links={'math-equation:01':['ma-signed:02','ma-expression:02'],'math-equation:02':['math-equation:01'],'math-equation:03':['math-equation:02','ma-expression:04'],'math-equation:04':['ma-expression:02','math-equation:03'],'math-equation:05':['ma-expression:05','math-equation:03'],'math-equation:06':['math-equation:05','ma-ratio:05'],'math-equation:07':['math-equation:05']}
for s in skills:
 if s['id'] in links:s['prerequisite_skill_ids']=links[s['id']];s['prerequisite_review_status']='pilot_drafted'
data=dict(schema_version=1,status='design_not_runtime',created_date='2026-10-24',units=units,skills=skills,policies=dict(school_status_independent=True,unlearned_allowed=True,daily_point_cap=None,allowance_rate=None,equipment=False,casting_animation=False,hidden_conditions_included=False))
(r/'curriculum-design.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
lines=['# 学習項目一覧（設計版）','','学習項目は設計済みですが、各項目に教材と採点を実装・対応付けした状態ではありません。学年は標準的な目安であり、進度の制限には使いません。私立校の先取り範囲は学校横断で一律に確定できないため、発展層を別管理します。','',f'既存91単元＋追加設計6単元＝{len(units)}単元、{len(skills)}学習項目。','']
for subject in ['数学','英語','国語','理科','社会']:
 lines += ['## '+subject,'','| 水準 | 到達目標 |','| --- | --- |']
 for k,label in [('foundation','基礎'),('application','活用'),('transfer','転用・発展')]:lines.append('| '+label+' | '+levels[subject][k]+' |')
 lines+=['']
 for u in [x for x in units if x['subject']==subject]:
  lines+=['### '+u['name'],'',f"ID: `{u['id']}` ／ {u['sub']} ／ 中{u['grade']}目安 ／ {'追加設計・教材未実装' if u['implementation']=='not_implemented' else '既存は入口問題のみ'}",'','つながる基礎：'+('、'.join(u['prerequisites']) or 'この設計では単元単位の指定なし（基礎不要の意味ではない）'),'']
  lines += [f"- `{s['id']}`：{s['objective']}" for s in skills if s['unit_id']==u['id']]
  lines+=['']
(r/'curriculum-map.md').write_text('\n'.join(lines))
print(len(units),'units',len(skills),'skills')
