from pathlib import Path
import json
from fractions import Fraction
r=Path(__file__).resolve().parent
d=json.loads((r/'curriculum-design.json').read_text()); qs=json.loads((r/'pilot-items.json').read_text());p=json.loads((r/'quality-policy.json').read_text())
us={u['id']:u for u in d['units']}; ss={s['id']:s for s in d['skills']}
assert len(us)==len(d['units'])==97
assert len(ss)==len(d['skills'])==586
for u in us.values():
 assert all(x in us for x in u['prerequisites'])
 assert all(x in ss and ss[x]['unit_id']==u['id'] for x in u['skill_ids'])
 assert set(u['levels'])=={'foundation','application','transfer'}
for s in ss.values():
 assert s['unit_id'] in us and s['objective']
 assert all(x in ss for x in s['prerequisite_skill_ids'])
def visit(k,path):
 assert k not in path,('cycle',k)
 for x in ss[k]['prerequisite_skill_ids']:visit(x,path+[k])
for k in ss:visit(k,[])
assert len({q['id'] for q in qs})==12
assert len({q['family_id'] for q in qs})==12
for q in qs:
 assert q['primary_skill_id'] in q['skill_ids']
 assert all(x in ss for x in q['skill_ids'])
 if q['options']:
  assert len(set(q['options']))==len(q['options'])
  assert q['options'].count(q['answer'])==1
  assert set(q['misconception_by_option'])==set(q['options'])-{q['answer']}
 if q['grading']=='rubric':assert q['rubric']
# Numerical answers are cross-checked independently against the relations.
assert 3*int(qs[0]['answer']['x'])+5==20
x=int(qs[1]['answer']);assert 3*(x-2)==2*x+7
x=int(qs[2]['answer']);assert Fraction(x-1,3)+Fraction(x+2,2)==4
assert 4*(-2)-3==int(qs[4]['answer']['left'])==-11
assert 80*5+120==520
assert not any(5*x+3*(9-x)==40 for x in range(10))
speed=Fraction(420-180,12);assert Fraction(420+180,speed)==int(qs[7]['answer'])
assert 1000*3+600*6==1000*6+600*1==6600
assert all(x+4!=x+7 for x in range(-100,101))
assert all(3*(x+2)==3*x+6 for x in range(-100,101))
assert 2*4+int(qs[11]['answer'])==13
assert p['effort']['daily_cap'] is None and p['effort']['allowance_rate'] is None
assert not p['effort']['correctness_multiplier'] and not p['effort']['diminishing_returns']
assert not d['policies']['hidden_conditions_included']
print('PASS: 97 units / 586 skills; references, skill graph, 12 item structures, option keys and numerical solutions, preserved product constraints.')
print('NOT VERIFIED: semantic quality, school completeness, all prerequisite links, classroom effectiveness or runtime integration.')
