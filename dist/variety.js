(function(root){'use strict';const C=root.TrailContent;
const additions=[
  {
    "id": "english-question-v5-1",
    "unit": "english-question",
    "primarySkill": "english-question:01",
    "family": "en-reply-repair",
    "mode": "detect",
    "prompt": "質問への答えとして不足している情報は？",
    "answer": "行き先",
    "options": [
      "行き先",
      "出発する時刻",
      "一緒に行く人"
    ],
    "grading": "choice",
    "explanation": "Whereが尋ねる場所をまだ答えていません。",
    "hints": [
      "WhereとWhenを区別しよう。",
      "Whereが尋ねる場所をまだ答えていません。"
    ],
    "passage": "A: Where do you go after school?\nB: At four.",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-2",
    "unit": "english-question",
    "primarySkill": "english-question:01",
    "family": "en-information-gap",
    "mode": "create",
    "prompt": "時刻と場所は分かりました。参加する人を確かめる質問は？",
    "answer": "Who comes to the meeting?",
    "options": [
      "Who comes to the meeting?",
      "When does the meeting start?",
      "Where do we meet?"
    ],
    "grading": "choice",
    "explanation": "まだ分からないのは参加する人です。",
    "hints": [
      "分かっている情報を先に除こう。",
      "まだ分からないのは参加する人です。"
    ],
    "passage": "Club meeting: 4:00 p.m., Room 3.",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-3",
    "unit": "english-question",
    "primarySkill": "english-question:02",
    "family": "en-context-short-answer",
    "mode": "connect",
    "prompt": "会話に合う返事は？",
    "answer": "No, she does not.",
    "options": [
      "No, she does not.",
      "No, she is not.",
      "No, I do not."
    ],
    "grading": "choice",
    "explanation": "Doesへの返事はdoesを使い、Minaをsheで受けます。",
    "hints": [
      "質問の主語と助動詞を確認しよう。",
      "Doesへの返事はdoesを使い、Minaをsheで受けます。"
    ],
    "passage": "Mina walks to school.\nA: Does Mina take the bus to school?\nB: ( )",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-4",
    "unit": "english-question",
    "primarySkill": "english-question:02",
    "family": "en-be-inversion",
    "mode": "create",
    "prompt": "「今日は日曜日ですか」と確かめる文は？",
    "answer": "Is it Sunday today?",
    "options": [
      "Is it Sunday today?",
      "Does it Sunday today?",
      "Is Sunday it today?"
    ],
    "grading": "choice",
    "explanation": "It is Sunday today.のisを主語の前に出します。",
    "hints": [
      "曜日を表す文ではbe動詞を使います。",
      "It is Sunday today.のisを主語の前に出します。"
    ],
    "passage": "カレンダーが見えないので、今日の曜日を確認したい。",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-5",
    "unit": "english-question",
    "primarySkill": "english-question:03",
    "family": "en-role-contrast",
    "mode": "connect",
    "prompt": "会話の内容に一致する文は？",
    "answer": "Emi calls Ken.",
    "options": [
      "Emi calls Ken.",
      "Ken calls Emi.",
      "Emi calls Tom."
    ],
    "grading": "choice",
    "explanation": "Who does Emi call?はEmiが電話をかける相手を尋ねています。",
    "hints": [
      "かける人と、かけられる人を区別しよう。",
      "Who does Emi call?はEmiが電話をかける相手を尋ねています。"
    ],
    "passage": "A: Who does Emi call?\nB: She calls Ken.",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-6",
    "unit": "english-question",
    "primarySkill": "english-question:04",
    "family": "en-count-constraint",
    "mode": "detect",
    "prompt": "答えを条件に合うよう直すには？",
    "answer": "I have two cats.",
    "options": [
      "I have two cats.",
      "I have a black cat.",
      "My cats are small."
    ],
    "grading": "choice",
    "explanation": "How manyは数を尋ねるので、飼っている2匹を答えます。",
    "hints": [
      "色ではなく、聞かれている情報に合わせよう。",
      "How manyは数を尋ねるので、飼っている2匹を答えます。"
    ],
    "passage": "あなたは黒と白の猫を1匹ずつ飼っています。\nA: How many cats do you have?\nB: They are black and white.",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-7",
    "unit": "english-question",
    "primarySkill": "english-question:05",
    "family": "en-alternative-clarification",
    "mode": "create",
    "prompt": "両方できることを明確に伝える返事は？",
    "answer": "I can play both.",
    "options": [
      "I can play both.",
      "Yes, I can.",
      "I can play neither."
    ],
    "grading": "choice",
    "explanation": "bothは両方。Yesだけではどちらができるか分かりません。",
    "hints": [
      "bothは両方、neitherはどちらも〜ないです。",
      "bothは両方。Yesだけではどちらができるか分かりません。"
    ],
    "passage": "A: Can you play the piano or the guitar?\nあなたはピアノもギターも弾けます。",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "english-question-v5-8",
    "unit": "english-question",
    "primarySkill": "english-question:06",
    "family": "en-ownership-evidence",
    "mode": "connect",
    "prompt": "Whose notebook is on the desk?",
    "answer": "Ken’s.",
    "options": [
      "Ken’s.",
      "Aya’s.",
      "Mika’s."
    ],
    "grading": "choice",
    "explanation": "机の上の青いノートはKenのものです。",
    "hints": [
      "机の上の色と持ち主を結び付けよう。",
      "机の上の青いノートはKenのものです。"
    ],
    "passage": "Aya has a red notebook. Ken has a blue notebook. Mika has a green notebook. The blue notebook is on the desk.",
    "tags": [
      "english-question",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-9",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:01",
    "family": "jp-reference",
    "mode": "connect",
    "prompt": "「この工夫」が指す内容は？",
    "answer": "返却箱を入口近くへ移したこと",
    "options": [
      "返却箱を入口近くへ移したこと",
      "本の数を増やしたこと",
      "本を返す人を入口で待ったこと"
    ],
    "grading": "choice",
    "explanation": "移動させた行動をまとめて指しています。",
    "hints": [
      "直前に行った変更を探そう。",
      "移動させた行動をまとめて指しています。"
    ],
    "passage": "図書委員は返却箱を入口近くへ移した。この工夫によって、本を返すためだけに奥まで歩かずに済むようになった。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-10",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:01",
    "family": "jp-paragraph-order",
    "mode": "create",
    "prompt": "三つの文を、理由から結果へつながる順に並べると？",
    "answer": "イ→ウ→ア",
    "options": [
      "イ→ウ→ア",
      "ア→イ→ウ",
      "ウ→ア→イ"
    ],
    "grading": "choice",
    "explanation": "困り事を示し、そこで対策をし、その結果を述べる順です。",
    "hints": [
      "「そこで」と「その結果」の前に必要な文を考えよう。",
      "困り事を示し、そこで対策をし、その結果を述べる順です。"
    ],
    "passage": "ア：その結果、忘れ物が減った。\nイ：持ち物を頭の中だけで確認すると、抜けがあった。\nウ：そこで、出発前に一覧を見て確かめることにした。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-11",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:02",
    "family": "jp-source-conflict",
    "mode": "detect",
    "prompt": "二つの記録から、確実に言えることは？",
    "answer": "開始予定と実際の開始時刻が違った",
    "options": [
      "開始予定と実際の開始時刻が違った",
      "時計が必ず壊れていた",
      "予定表を書いた人が開始を遅らせた"
    ],
    "grading": "choice",
    "explanation": "予定は9時、実際の記録は9時10分。理由は資料にありません。",
    "hints": [
      "時刻の違いと、違った理由を分けよう。",
      "予定は9時、実際の記録は9時10分。理由は資料にありません。"
    ],
    "passage": "予定表：発表開始9時。\n当日の記録：発表は9時10分に始まった。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-12",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:02",
    "family": "jp-evidence-selection",
    "mode": "solve",
    "prompt": "「直人はすぐには諦めなかった」と読む根拠は？",
    "answer": "向きを変えてもう一度試したこと",
    "options": [
      "向きを変えてもう一度試したこと",
      "机の上に模型があったこと",
      "窓から日が差していたこと"
    ],
    "grading": "choice",
    "explanation": "失敗後にやり方を変えて続ける行動が根拠です。",
    "hints": [
      "失敗した後の行動を見よう。",
      "失敗後にやり方を変えて続ける行動が根拠です。"
    ],
    "passage": "窓から日が差していた。机の模型は動かなかった。直人は部品の向きを変えて、もう一度スイッチを入れた。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-13",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:03",
    "family": "jp-summary-repair",
    "mode": "detect",
    "prompt": "要約「筆者は便利な道具を使うべきでないと考えている」の誤りは？",
    "answer": "使うこと自体を否定したと読み替えている",
    "options": [
      "使うこと自体を否定したと読み替えている",
      "確認する必要がある点を残しすぎている",
      "道具が便利だという記述を増やしている"
    ],
    "grading": "choice",
    "explanation": "筆者は道具の使用を認めたうえで、確認が必要だと述べています。",
    "hints": [
      "否定している対象は「道具」か「使い方」か考えよう。",
      "筆者は道具の使用を認めたうえで、確認が必要だと述べています。"
    ],
    "passage": "便利な道具は積極的に使いたい。ただし、出てきた結果を確かめずに受け入れるのは避けたい。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-14",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:03",
    "family": "jp-title-selection",
    "mode": "create",
    "prompt": "本文の中心に合う見出しは？",
    "answer": "記録して気付く小さな変化",
    "options": [
      "記録して気付く小さな変化",
      "植物の変化は記録できない",
      "高さだけが植物の成長である"
    ],
    "grading": "choice",
    "explanation": "日々の記録を比較することで変化に気付くという内容です。",
    "hints": [
      "複数の例に共通する考えをまとめよう。",
      "日々の記録を比較することで変化に気付くという内容です。"
    ],
    "passage": "毎日見ている植物の成長は分かりにくい。だが、一週間前の写真と比べれば、新しい葉に気付く。高さや葉の数を記録すると、小さな変化も捉えられる。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-15",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:04",
    "family": "jp-condition-contrast",
    "mode": "connect",
    "prompt": "二人が選ぶ方法が違う理由として、文章に合うものは？",
    "answer": "重視している条件が違うから",
    "options": [
      "重視している条件が違うから",
      "同じ条件でも必ず意見が対立するから",
      "二人とも相手の方法を知らないから"
    ],
    "grading": "choice",
    "explanation": "Aは所要時間、Bは景色を重視しています。",
    "hints": [
      "結論だけでなく、理由を比べよう。",
      "Aは所要時間、Bは景色を重視しています。"
    ],
    "passage": "A：今日は時間がないから、最短の道で帰る。\nB：今日は余裕があるから、川沿いを歩いて景色を見たい。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  },
  {
    "id": "japanese-evidence-v5-16",
    "unit": "japanese-evidence",
    "primarySkill": "japanese-evidence:04",
    "family": "jp-claim-strength",
    "mode": "create",
    "prompt": "筆者の慎重な言い方を保った書き換えは？",
    "answer": "静かな場所では集中しやすくなる人もいる",
    "options": [
      "静かな場所では集中しやすくなる人もいる",
      "誰でも静かな場所でなければ集中できない",
      "静かな場所なら必ず集中力が続く"
    ],
    "grading": "choice",
    "explanation": "「人によっては」という範囲を「人もいる」で残します。",
    "hints": [
      "「必ず」「誰でも」を加えてよいか考えよう。",
      "「人によっては」という範囲を「人もいる」で残します。"
    ],
    "passage": "人によっては、静かな場所の方が作業に集中しやすい。",
    "tags": [
      "japanese-evidence",
      "evidence"
    ],
    "version": 5
  }
];
for(const q of additions)C.pilots[q.unit].bank.push(q);
})(typeof window==='undefined'?globalThis:window);
