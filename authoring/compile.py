from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
units=[]; questions=[]
styles={'数学':('⌘','#79b8f1'),'英語':('✧','#9db3ff'),'国語':('❧','#c6a0df'),'理科':('◈','#85c7b3'),'社会':('◎','#d8b678')}
for lineno,line in enumerate((root/'authoring/curriculum.txt').read_text().splitlines(),1):
    if not line.strip(): continue
    parts=line.split('|')
    if line.startswith('@'):
        assert len(parts)==7,(lineno,parts)
        subject,sub,id,name,grade,pre,lesson=parts
        subject=subject[1:];icon,color=styles[subject]
        u=dict(id=id,subject=subject,sub=sub,name=name,grade=int(grade),prerequisites=pre.split(',') if pre else [],lesson=lesson,summary=lesson.split('。')[0]+'。',icon=icon,color=color)
        units.append(u)
    else:
        assert len(parts)==6,(lineno,parts)
        mode,prompt,answer,w1,w2,explanation=parts
        assert len(set([answer,w1,w2]))==3,(lineno,'duplicate options')
        questions.append(dict(id=u['id']+'-'+mode,unit=u['id'],mode=mode,prompt=prompt,answer=answer,options=[answer,w1,w2],explanation=explanation,passage='',tags=[u['subject'],u['sub'],mode],version=1))
assert len(set(u['id'] for u in units))==len(units)
assert len(set(q['id'] for q in questions))==len(questions)
assert all(len([q for q in questions if q['unit']==u['id']])==4 for u in units)
text='(function(root){const C=root.TrailContent;\n'
text+="C.units.forEach((u,i)=>{u.grade=[1,1,1,1,1][i];u.prerequisites=[];});C.units[1].sub='文法';C.units[2].sub='国語3・現代文・語句';\n"
text+='C.units.push(...'+json.dumps(units,ensure_ascii=False)+');\n'
text+='C.questions.push(...'+json.dumps(questions,ensure_ascii=False)+');\n'
text+="})(typeof window==='undefined'?globalThis:window);\n"
(root/'dist/curriculum.js').write_text(text)
print(f'Compiled {len(units)} units, {len(questions)} questions')
