(function(root){'use strict';const C=root.TrailContent;
C.pilots["ma-proportion"]={
  "skills": [
    {
      "id": "ma-proportion:01",
      "name": "比例定数"
    },
    {
      "id": "ma-proportion:02",
      "name": "比例の式とグラフ"
    },
    {
      "id": "ma-proportion:03",
      "name": "反比例"
    },
    {
      "id": "ma-proportion:04",
      "name": "座標と象限"
    },
    {
      "id": "ma-proportion:05",
      "name": "関係の識別"
    },
    {
      "id": "ma-proportion:06",
      "name": "変域と使える値"
    }
  ],
  "bank": [
    {
      "id": "ma-proportion-v9-1",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:01",
      "family": "pr-constant",
      "mode": "solve",
      "prompt": "yがxに比例するとき、比例定数は？",
      "answer": "-3",
      "options": null,
      "grading": "number",
      "explanation": "y÷x＝−6÷2＝−3です。",
      "hints": [
        "差ではなく商を調べます。",
        "y÷x＝−6÷2＝−3です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "x",
          "y"
        ],
        "rows": [
          [
            "2",
            "−6"
          ],
          [
            "4",
            "−12"
          ]
        ]
      }
    },
    {
      "id": "ma-proportion-v9-2",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:01",
      "family": "pr-zero-row",
      "mode": "detect",
      "prompt": "比例の表でx＝0、y＝0だった。この行だけで比例定数は決まる？",
      "answer": "決まらない",
      "options": [
        "決まらない",
        "比例定数は0",
        "比例定数は1"
      ],
      "grading": "choice",
      "explanation": "どの比例定数でも原点を通ります。0÷0は使えません。",
      "hints": [
        "xが0でない行が必要です。",
        "どの比例定数でも原点を通ります。0÷0は使えません。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-3",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:01",
      "family": "pr-constant-inverse",
      "mode": "create",
      "prompt": "比例定数が2.5。x＝4の行のyは？",
      "answer": "10",
      "options": null,
      "grading": "number",
      "explanation": "y＝2.5×4＝10です。",
      "hints": [
        "比例定数をxに掛けます。",
        "y＝2.5×4＝10です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-4",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:02",
      "family": "pr-equation-point",
      "mode": "create",
      "prompt": "比例のグラフが点(3,−6)を通る。式は？",
      "answer": "y＝−2x",
      "options": [
        "y＝−2x",
        "y＝−3x",
        "y＝−6x"
      ],
      "grading": "choice",
      "explanation": "−6÷3＝−2が比例定数です。",
      "hints": [
        "点の座標をy＝axに代入します。",
        "−6÷3＝−2が比例定数です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-5",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:02",
      "family": "pr-graph-origin",
      "mode": "detect",
      "prompt": "y＝4xのグラフについて正しい説明は？",
      "answer": "原点を通り、右へ1進むと上へ4進む",
      "options": [
        "原点を通り、右へ1進むと上へ4進む",
        "(0,4)を通り、右へ1進むと上へ1進む",
        "原点を通り、右へ4進むと上へ1進む"
      ],
      "grading": "choice",
      "explanation": "xが1増えるとyは4増え、x＝0ならy＝0です。",
      "hints": [
        "傾きと切片を区別します。",
        "xが1増えるとyは4増え、x＝0ならy＝0です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-6",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:02",
      "family": "pr-point-membership",
      "mode": "connect",
      "prompt": "点(−2,6)を通る比例のグラフは？",
      "answer": "y＝−3x",
      "options": [
        "y＝−3x",
        "y＝3x",
        "y＝−2x"
      ],
      "grading": "choice",
      "explanation": "x＝−2を代入してy＝6になる式を選びます。",
      "hints": [
        "両方の座標が式を満たすか確認します。",
        "x＝−2を代入してy＝6になる式を選びます。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-7",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:03",
      "family": "pr-inverse-product",
      "mode": "solve",
      "prompt": "yはxに反比例し、x＝3でy＝8。反比例定数は？",
      "answer": "24",
      "options": null,
      "grading": "number",
      "explanation": "xy＝3×8＝24です。",
      "hints": [
        "反比例では積が一定です。",
        "xy＝3×8＝24です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-8",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:03",
      "family": "pr-inverse-scaling",
      "mode": "detect",
      "prompt": "反比例でxを3倍にするとyは？",
      "answer": "1/3倍",
      "options": [
        "1/3倍",
        "3倍",
        "9倍"
      ],
      "grading": "choice",
      "explanation": "積が一定なので、もう一方は3で割ります。",
      "hints": [
        "xとyの積を変えないようにします。",
        "積が一定なので、もう一方は3で割ります。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-9",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:03",
      "family": "pr-inverse-equation",
      "mode": "create",
      "prompt": "反比例の表を表す式は？",
      "answer": "y＝−12/x",
      "options": [
        "y＝−12/x",
        "y＝−3x",
        "y＝12/x"
      ],
      "grading": "choice",
      "explanation": "各行の積xyが−12なのでy＝−12/xです。",
      "hints": [
        "符号も含めて積を比べます。",
        "各行の積xyが−12なのでy＝−12/xです。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "x",
          "y"
        ],
        "rows": [
          [
            "2",
            "−6"
          ],
          [
            "3",
            "−4"
          ],
          [
            "6",
            "−2"
          ]
        ]
      }
    },
    {
      "id": "ma-proportion-v9-10",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:04",
      "family": "pr-quadrant",
      "mode": "solve",
      "prompt": "点(−3,2)がある象限は？",
      "answer": "第2象限",
      "options": [
        "第2象限",
        "第1象限",
        "第3象限"
      ],
      "grading": "choice",
      "explanation": "xが負、yが正なので左上の第2象限です。",
      "hints": [
        "まず左右、次に上下を判断します。",
        "xが負、yが正なので左上の第2象限です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-11",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:04",
      "family": "pr-axis",
      "mode": "detect",
      "prompt": "点(0,−4)の位置は？",
      "answer": "y軸上",
      "options": [
        "y軸上",
        "x軸上",
        "第4象限"
      ],
      "grading": "choice",
      "explanation": "x座標が0なのでy軸上です。軸上は象限に含めません。",
      "hints": [
        "どちらの座標が0か見ます。",
        "x座標が0なのでy軸上です。軸上は象限に含めません。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-12",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:04",
      "family": "pr-reflection",
      "mode": "create",
      "prompt": "点(−2,5)をy軸について対称に移した点は？",
      "answer": "(2,5)",
      "options": [
        "(2,5)",
        "(−2,−5)",
        "(5,−2)"
      ],
      "grading": "choice",
      "explanation": "左右だけ反転するのでxの符号だけ変わります。",
      "hints": [
        "y軸からの左右の距離を同じにします。",
        "左右だけ反転するのでxの符号だけ変わります。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-13",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:05",
      "family": "pr-classify-table",
      "mode": "connect",
      "prompt": "表の関係は比例・反比例のどちら？",
      "answer": "反比例",
      "options": [
        "反比例",
        "比例",
        "どちらでもない"
      ],
      "grading": "choice",
      "explanation": "商は一定でなく、積は全て12です。",
      "hints": [
        "商と積をそれぞれ比べます。",
        "商は一定でなく、積は全て12です。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "x",
          "y"
        ],
        "rows": [
          [
            "1",
            "12"
          ],
          [
            "2",
            "6"
          ],
          [
            "4",
            "3"
          ]
        ]
      }
    },
    {
      "id": "ma-proportion-v9-14",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:05",
      "family": "pr-affine-counterexample",
      "mode": "detect",
      "prompt": "y＝2x＋3を「xが増えるとyも増えるから比例」とした。問題点は？",
      "answer": "増加するだけでは比例とは言えない",
      "options": [
        "増加するだけでは比例とは言えない",
        "比例ではyは必ず減少する",
        "比例定数は常に正である"
      ],
      "grading": "choice",
      "explanation": "y/xが一定でなく、原点も通りません。",
      "hints": [
        "比例の条件はy＝axです。",
        "y/xが一定でなく、原点も通りません。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-15",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:05",
      "family": "pr-identification-design",
      "mode": "create",
      "prompt": "比例か調べる資料として、最も判断を進めやすいのは？",
      "answer": "複数の0でないxに対応するyの表",
      "options": [
        "複数の0でないxに対応するyの表",
        "x＝0の行だけの表",
        "yの値だけでxがない一覧"
      ],
      "grading": "choice",
      "explanation": "複数の組からy/xが一定か比較できます。ただし有限の表だけで未観測値全てまで保証はしません。",
      "hints": [
        "関係を調べるにはxとyの組が必要です。",
        "複数の組からy/xが一定か比較できます。ただし有限の表だけで未観測値全てまで保証はしません。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-16",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:06",
      "family": "pr-domain-range",
      "mode": "solve",
      "prompt": "y＝−2x、−1≤x≤3。yの変域は？",
      "answer": "−6≤y≤2",
      "options": [
        "−6≤y≤2",
        "2≤y≤6",
        "−2≤y≤6"
      ],
      "grading": "choice",
      "explanation": "端ではy＝2と−6になり、減少するので大小を並べ直します。",
      "hints": [
        "xの両端を代入します。",
        "端ではy＝2と−6になり、減少するので大小を並べ直します。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-17",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:06",
      "family": "pr-discrete-domain",
      "mode": "detect",
      "prompt": "1個120円の商品をx個買う代金y＝120x。個数は0〜5個の整数。x＝2.5は使える？",
      "answer": "式の計算はできるが、この場面の個数には使えない",
      "options": [
        "式の計算はできるが、この場面の個数には使えない",
        "代金が整数なので使える",
        "xが正なら必ず使える"
      ],
      "grading": "choice",
      "explanation": "定義された個数の条件を満たしません。",
      "hints": [
        "式と現実の変域を分けます。",
        "定義された個数の条件を満たしません。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-proportion-v9-18",
      "unit": "ma-proportion",
      "primarySkill": "ma-proportion:06",
      "family": "pr-inverse-zero",
      "mode": "create",
      "prompt": "y＝6/xで、xとして使えない値は？",
      "answer": "0",
      "options": [
        "0",
        "−2",
        "3"
      ],
      "grading": "choice",
      "explanation": "0で割れないためx＝0は除きます。",
      "hints": [
        "反比例の分母を確認します。",
        "0で割れないためx＝0は除きます。"
      ],
      "passage": "",
      "tags": [
        "ma-proportion",
        "algebra"
      ],
      "version": 9
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "表・座標・式・場面の条件を対応させ、計算と判断を別々に確かめます。",
  "limitation": "グラフは座標・表・言葉で確認します。描画・作図や自由記述の評価は未対応です。"
};
C.pilots["ma-simultaneous"]={
  "skills": [
    {
      "id": "ma-simultaneous:01",
      "name": "加減法"
    },
    {
      "id": "ma-simultaneous:02",
      "name": "代入法"
    },
    {
      "id": "ma-simultaneous:03",
      "name": "小数・分数の式"
    },
    {
      "id": "ma-simultaneous:04",
      "name": "二つの条件"
    },
    {
      "id": "ma-simultaneous:05",
      "name": "速さ・濃度・料金"
    },
    {
      "id": "ma-simultaneous:06",
      "name": "検算と条件"
    }
  ],
  "bank": [
    {
      "id": "ma-simultaneous-v9-19",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:01",
      "family": "si-eliminate-add",
      "mode": "create",
      "prompt": "x＋y＝7、x−y＝1。yを消す操作は？",
      "answer": "2式を辺々足す",
      "options": [
        "2式を辺々足す",
        "2式を辺々引く",
        "第1式だけを2倍する"
      ],
      "grading": "choice",
      "explanation": "y＋(−y)＝0になります。",
      "hints": [
        "消したい文字の係数を見ます。",
        "y＋(−y)＝0になります。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-20",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:01",
      "family": "si-eliminate-scale",
      "mode": "solve",
      "prompt": "2x＋y＝8、x−y＝1。xはいくつ？",
      "answer": "3",
      "options": null,
      "grading": "number",
      "explanation": "足すと3x＝9なのでx＝3です。",
      "hints": [
        "yの係数が反対符号です。",
        "足すと3x＝9なのでx＝3です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-21",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:01",
      "family": "si-sign-error",
      "mode": "detect",
      "prompt": "2x＋3y＝12からx＋3y＝9を引いた結果は？",
      "answer": "x＝3",
      "options": [
        "x＝3",
        "x＋6y＝3",
        "x＝21"
      ],
      "grading": "choice",
      "explanation": "左辺はx、右辺は12−9＝3です。",
      "hints": [
        "左辺と右辺で同じ引き算をします。",
        "左辺はx、右辺は12−9＝3です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-22",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:02",
      "family": "si-substitution",
      "mode": "create",
      "prompt": "y＝2x＋1、x＋y＝10。代入後の式は？",
      "answer": "x＋(2x＋1)＝10",
      "options": [
        "x＋(2x＋1)＝10",
        "x＋2x＝10",
        "x＋y＝2x＋1"
      ],
      "grading": "choice",
      "explanation": "第2式のy全体を2x＋1に置き換えます。",
      "hints": [
        "yと同じ量を代わりに入れます。",
        "第2式のy全体を2x＋1に置き換えます。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-23",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:02",
      "family": "si-substitution-value",
      "mode": "solve",
      "prompt": "y＝3x、x＋y＝12。yはいくつ？",
      "answer": "9",
      "options": null,
      "grading": "number",
      "explanation": "4x＝12よりx＝3。その3倍でy＝9です。",
      "hints": [
        "最後に聞かれている文字を確認します。",
        "4x＝12よりx＝3。その3倍でy＝9です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-24",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:02",
      "family": "si-substitution-choice",
      "mode": "detect",
      "prompt": "x＝y−2を2x＋y＝8へ代入した式は？",
      "answer": "2(y−2)＋y＝8",
      "options": [
        "2(y−2)＋y＝8",
        "2y−2＋y＝8",
        "2(y＋2)＋y＝8"
      ],
      "grading": "choice",
      "explanation": "xに掛かる2はy−2全体に掛かります。",
      "hints": [
        "括弧を残して代入します。",
        "xに掛かる2はy−2全体に掛かります。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-25",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:03",
      "family": "si-decimal-clear",
      "mode": "create",
      "prompt": "0.2x＋0.3y＝1.3の両辺を10倍した式は？",
      "answer": "2x＋3y＝13",
      "options": [
        "2x＋3y＝13",
        "2x＋3y＝1.3",
        "0.2x＋3y＝13"
      ],
      "grading": "choice",
      "explanation": "左右の全ての項を10倍します。",
      "hints": [
        "一部の項だけに掛けないようにします。",
        "左右の全ての項を10倍します。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-26",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:03",
      "family": "si-fraction-clear",
      "mode": "detect",
      "prompt": "x/2＋y/3＝2の両辺を6倍した式は？",
      "answer": "3x＋2y＝12",
      "options": [
        "3x＋2y＝12",
        "3x＋2y＝2",
        "2x＋3y＝12"
      ],
      "grading": "choice",
      "explanation": "6÷2＝3、6÷3＝2で分母を払います。",
      "hints": [
        "右辺も6倍します。",
        "6÷2＝3、6÷3＝2で分母を払います。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-27",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:03",
      "family": "si-decimal-solve",
      "mode": "solve",
      "prompt": "0.5x＋y＝4、x−y＝2。xはいくつ？",
      "answer": "4",
      "options": null,
      "grading": "number",
      "explanation": "足すと1.5x＝6なのでx＝4です。",
      "hints": [
        "小数のまま計算しても、両式を整数にしても解けます。",
        "足すと1.5x＝6なのでx＝4です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-28",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:04",
      "family": "si-count-cost",
      "mode": "create",
      "prompt": "1個100円の品をx個、150円の品をy個、計8個で1000円。連立する式は？",
      "answer": "x＋y＝8、100x＋150y＝1000",
      "options": [
        "x＋y＝8、100x＋150y＝1000",
        "x＋y＝1000、100x＋150y＝8",
        "100x＋150y＝8、x−y＝1000"
      ],
      "grading": "choice",
      "explanation": "個数と代金の二つの条件を別々に表します。",
      "hints": [
        "式ごとの単位をそろえます。",
        "個数と代金の二つの条件を別々に表します。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-29",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:04",
      "family": "si-sum-difference",
      "mode": "connect",
      "prompt": "AはBより3多く、合計は15。A＝x、B＝yとした式は？",
      "answer": "x＋y＝15、x−y＝3",
      "options": [
        "x＋y＝15、x−y＝3",
        "x＋y＝15、y−x＝3",
        "x−y＝15、x＋y＝3"
      ],
      "grading": "choice",
      "explanation": "合計と、AからBを引いた差です。",
      "hints": [
        "どちらの方が大きいか確認します。",
        "合計と、AからBを引いた差です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-30",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:04",
      "family": "si-insufficient",
      "mode": "detect",
      "prompt": "x＋y＝10と2x＋2y＝20だけでxとyは一組に決まる？",
      "answer": "決まらない",
      "options": [
        "決まらない",
        "x＝5、y＝5に決まる",
        "x＝10、y＝0に決まる"
      ],
      "grading": "choice",
      "explanation": "二つ目は一つ目を2倍しただけで、新しい条件がありません。",
      "hints": [
        "違う組でも両式を満たすか考えます。",
        "二つ目は一つ目を2倍しただけで、新しい条件がありません。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-31",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:05",
      "family": "si-speed-model",
      "mode": "create",
      "prompt": "毎時4kmでx時間、毎時6kmでy時間歩き、計3時間・14km。式は？",
      "answer": "x＋y＝3、4x＋6y＝14",
      "options": [
        "x＋y＝3、4x＋6y＝14",
        "4x＋6y＝3、x＋y＝14",
        "x＋y＝3、4x−6y＝14"
      ],
      "grading": "choice",
      "explanation": "時間を足して3、距離を足して14です。",
      "hints": [
        "速さ×時間が距離です。",
        "時間を足して3、距離を足して14です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-32",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:05",
      "family": "si-mixture-model",
      "mode": "connect",
      "prompt": "5％食塩水x gと10％食塩水y gで、8％食塩水300gを作る。式は？",
      "answer": "x＋y＝300、0.05x＋0.10y＝24",
      "options": [
        "x＋y＝300、0.05x＋0.10y＝24",
        "x＋y＝300、0.05x＋0.10y＝8",
        "x＋y＝24、0.05x＋0.10y＝300"
      ],
      "grading": "choice",
      "explanation": "食塩水全体300gと、食塩300×0.08＝24gを分けて表します。",
      "hints": [
        "濃度そのものを足さず、食塩の質量を足します。",
        "食塩水全体300gと、食塩300×0.08＝24gを分けて表します。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-33",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:05",
      "family": "si-fee-model",
      "mode": "solve",
      "prompt": "大人300円、子ども200円で計10人・2500円。大人は何人？",
      "answer": "5",
      "options": null,
      "grading": "number",
      "explanation": "全員子どもなら2000円。差500円を大人1人分の差100円で割り5人です。",
      "hints": [
        "人数を二つの文字で表しても求められます。",
        "全員子どもなら2000円。差500円を大人1人分の差100円で割り5人です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-34",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:06",
      "family": "si-both-equations",
      "mode": "detect",
      "prompt": "x＝2、y＝3はx＋y＝5と2x−y＝0の連立方程式の解か？",
      "answer": "解ではない",
      "options": [
        "解ではない",
        "解である",
        "第1式を満たすので解とみなす"
      ],
      "grading": "choice",
      "explanation": "第1式は満たしますが、第2式の左辺は1です。",
      "hints": [
        "両方の式を満たす必要があります。",
        "第1式は満たしますが、第2式の左辺は1です。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-35",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:06",
      "family": "si-integer-context",
      "mode": "connect",
      "prompt": "人数を表す連立式からx＝2.5、y＝3.5となった。条件に合う人数の組は？",
      "answer": "この解は人数として使えない",
      "options": [
        "この解は人数として使えない",
        "x＝3、y＝4とする",
        "x＝2、y＝3とする"
      ],
      "grading": "choice",
      "explanation": "人数は整数。丸めると元の式の条件も変わります。",
      "hints": [
        "解の値が場面に合うか確かめます。",
        "人数は整数。丸めると元の式の条件も変わります。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-simultaneous-v9-36",
      "unit": "ma-simultaneous",
      "primarySkill": "ma-simultaneous:06",
      "family": "si-contradiction",
      "mode": "create",
      "prompt": "x＋y＝4、2x＋2y＝10を調べると？",
      "answer": "両式を満たす組はない",
      "options": [
        "両式を満たす組はない",
        "x＝2、y＝2だけが満たす",
        "x＋y＝4ならどの組も満たす"
      ],
      "grading": "choice",
      "explanation": "第1式を2倍すると8となり、第2式の10と矛盾します。",
      "hints": [
        "同じ左辺が違う値になっていないか見ます。",
        "第1式を2倍すると8となり、第2式の10と矛盾します。"
      ],
      "passage": "",
      "tags": [
        "ma-simultaneous",
        "algebra"
      ],
      "version": 9
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "表・座標・式・場面の条件を対応させ、計算と判断を別々に確かめます。",
  "limitation": "グラフは座標・表・言葉で確認します。描画・作図や自由記述の評価は未対応です。"
};
C.pilots["ma-linear"]={
  "skills": [
    {
      "id": "ma-linear:01",
      "name": "変化の割合と切片"
    },
    {
      "id": "ma-linear:02",
      "name": "式とグラフ"
    },
    {
      "id": "ma-linear:03",
      "name": "二点から式"
    },
    {
      "id": "ma-linear:04",
      "name": "交点"
    },
    {
      "id": "ma-linear:05",
      "name": "区間ごとの変化"
    },
    {
      "id": "ma-linear:06",
      "name": "料金と移動の比較"
    }
  ],
  "bank": [
    {
      "id": "ma-linear-v9-37",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:01",
      "family": "li-slope-table",
      "mode": "solve",
      "prompt": "表で一次関数を表す。変化の割合は？",
      "answer": "3",
      "options": null,
      "grading": "number",
      "explanation": "yの増加6をxの増加2で割り、3です。",
      "hints": [
        "yの増加量÷xの増加量です。",
        "yの増加6をxの増加2で割り、3です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "x",
          "y"
        ],
        "rows": [
          [
            "1",
            "5"
          ],
          [
            "3",
            "11"
          ]
        ]
      }
    },
    {
      "id": "ma-linear-v9-38",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:01",
      "family": "li-intercept-table",
      "mode": "connect",
      "prompt": "一次関数の表から切片を求めてください。",
      "answer": "4",
      "options": null,
      "grading": "number",
      "explanation": "x＝0のときy＝4なので切片は4です。",
      "hints": [
        "切片はy軸との交点のy座標です。",
        "x＝0のときy＝4なので切片は4です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "x",
          "y"
        ],
        "rows": [
          [
            "0",
            "4"
          ],
          [
            "2",
            "0"
          ]
        ]
      }
    },
    {
      "id": "ma-linear-v9-39",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:01",
      "family": "li-slope-error",
      "mode": "detect",
      "prompt": "xが2増えてyが6減った。変化の割合は？",
      "answer": "−3",
      "options": [
        "−3",
        "3",
        "−6"
      ],
      "grading": "choice",
      "explanation": "yの増加量は−6。−6÷2＝−3です。",
      "hints": [
        "減少を負の増加量で表します。",
        "yの増加量は−6。−6÷2＝−3です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-40",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:02",
      "family": "li-graph-description",
      "mode": "create",
      "prompt": "y軸と(0,3)で交わり、右へ1進むと下へ2進む直線の式は？",
      "answer": "y＝−2x＋3",
      "options": [
        "y＝−2x＋3",
        "y＝2x＋3",
        "y＝3x−2"
      ],
      "grading": "choice",
      "explanation": "切片3、傾き−2なのでこの式です。",
      "hints": [
        "傾きと切片をそれぞれ読み取ります。",
        "切片3、傾き−2なのでこの式です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-41",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:02",
      "family": "li-axis-intercept",
      "mode": "solve",
      "prompt": "y＝−2x＋6のグラフとx軸との交点のx座標は？",
      "answer": "3",
      "options": null,
      "grading": "number",
      "explanation": "x軸上ではy＝0。0＝−2x＋6よりx＝3です。",
      "hints": [
        "x軸上ではどちらの座標が0か確認します。",
        "x軸上ではy＝0。0＝−2x＋6よりx＝3です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-42",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:02",
      "family": "li-parallel",
      "mode": "detect",
      "prompt": "y＝2x＋1と平行で、別の直線は？",
      "answer": "y＝2x−3",
      "options": [
        "y＝2x−3",
        "y＝−2x＋1",
        "y＝3x＋1"
      ],
      "grading": "choice",
      "explanation": "傾きが同じで切片が異なる直線です。",
      "hints": [
        "切片だけが同じでも平行とは限りません。",
        "傾きが同じで切片が異なる直線です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-43",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:03",
      "family": "li-two-points",
      "mode": "create",
      "prompt": "(1,3)と(3,7)を通る一次関数の式は？",
      "answer": "y＝2x＋1",
      "options": [
        "y＝2x＋1",
        "y＝2x＋3",
        "y＝3x"
      ],
      "grading": "choice",
      "explanation": "傾き(7−3)/(3−1)＝2。3＝2＋bからb＝1です。",
      "hints": [
        "まず傾き、次に切片を求めます。",
        "傾き(7−3)/(3−1)＝2。3＝2＋bからb＝1です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-44",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:03",
      "family": "li-two-point-intercept",
      "mode": "solve",
      "prompt": "(−1,4)と(2,−2)を通る直線の切片は？",
      "answer": "2",
      "options": null,
      "grading": "number",
      "explanation": "傾きは−6÷3＝−2。4＝2＋bからb＝2です。",
      "hints": [
        "一方の点を式に代入して切片を求めます。",
        "傾きは−6÷3＝−2。4＝2＋bからb＝2です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-45",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:03",
      "family": "li-vertical-condition",
      "mode": "detect",
      "prompt": "(2,1)と(2,5)を通る直線をy＝ax＋bと表せる？",
      "answer": "表せない",
      "options": [
        "表せない",
        "y＝2x＋1と表せる",
        "y＝4x＋2と表せる"
      ],
      "grading": "choice",
      "explanation": "同じx＝2に異なるyが対応する縦の直線で、y＝ax＋bでは表せません。",
      "hints": [
        "二点のx座標の差に注目します。",
        "同じx＝2に異なるyが対応する縦の直線で、y＝ax＋bでは表せません。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-46",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:04",
      "family": "li-intersection",
      "mode": "solve",
      "prompt": "y＝2x＋1とy＝−x＋7の交点のx座標は？",
      "answer": "2",
      "options": null,
      "grading": "number",
      "explanation": "2x＋1＝−x＋7より3x＝6です。",
      "hints": [
        "交点ではxもyも共通です。",
        "2x＋1＝−x＋7より3x＝6です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-47",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:04",
      "family": "li-intersection-check",
      "mode": "detect",
      "prompt": "点(1,3)はy＝2x＋1とy＝x＋3の交点か？",
      "answer": "交点ではない",
      "options": [
        "交点ではない",
        "交点である",
        "第1の直線上なので交点である"
      ],
      "grading": "choice",
      "explanation": "第2式ではx＝1のときy＝4となります。",
      "hints": [
        "両方の式に代入します。",
        "第2式ではx＝1のときy＝4となります。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-48",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:04",
      "family": "li-no-intersection",
      "mode": "create",
      "prompt": "y＝3x＋1とy＝3x−2の共有点は？",
      "answer": "ない",
      "options": [
        "ない",
        "(0,1)",
        "(0,−2)"
      ],
      "grading": "choice",
      "explanation": "傾きが同じで切片が違うため、平行で交わりません。",
      "hints": [
        "等しいと置くと1＝−2という矛盾になります。",
        "傾きが同じで切片が違うため、平行で交わりません。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-49",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:05",
      "family": "li-piecewise-rest",
      "mode": "connect",
      "prompt": "時刻と出発点からの距離の表。止まっていた区間は？",
      "answer": "2〜4分",
      "options": [
        "2〜4分",
        "0〜2分",
        "4〜6分"
      ],
      "grading": "choice",
      "explanation": "2分から4分まで距離が変わっていません。",
      "hints": [
        "距離の増減が0の区間を探します。",
        "2分から4分まで距離が変わっていません。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9,
      "table": {
        "caption": "数量の対応",
        "columns": [
          "時刻（分）",
          "距離（m）"
        ],
        "rows": [
          [
            "0",
            "0"
          ],
          [
            "2",
            "120"
          ],
          [
            "4",
            "120"
          ],
          [
            "6",
            "200"
          ]
        ]
      }
    },
    {
      "id": "ma-linear-v9-50",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:05",
      "family": "li-piecewise-rate",
      "mode": "solve",
      "prompt": "0〜2分で120m進み、その後2分休み、4〜6分で80m進んだ。4〜6分の速さは毎分何m？",
      "answer": "40",
      "options": null,
      "grading": "number",
      "explanation": "その区間の距離80を時間2で割り40です。",
      "hints": [
        "全行程でなく、指定された区間の量を使います。",
        "その区間の距離80を時間2で割り40です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-51",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:05",
      "family": "li-piecewise-extrapolation",
      "mode": "detect",
      "prompt": "0〜2分は毎分60m、2〜4分は停止。3分後の距離を60×3とした。正しい距離は？",
      "answer": "120m",
      "options": [
        "120m",
        "180m",
        "60m"
      ],
      "grading": "choice",
      "explanation": "2分で120m進んだ後は停止しています。",
      "hints": [
        "同じ傾きを使える区間を確認します。",
        "2分で120m進んだ後は停止しています。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-52",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:06",
      "family": "li-fee-comparison",
      "mode": "create",
      "prompt": "料金Aは200＋50x円、Bは80x円。AがBより安くなる条件は？",
      "answer": "x＞20/3",
      "options": [
        "x＞20/3",
        "x＜20/3",
        "x＝20/3"
      ],
      "grading": "choice",
      "explanation": "200＋50x＜80xから200＜30xです。",
      "hints": [
        "安い方の料金を小さい側に置きます。",
        "200＋50x＜80xから200＜30xです。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-53",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:06",
      "family": "li-time-origin",
      "mode": "connect",
      "prompt": "Aは0分に出発し毎分60m、Bは5分に出発し毎分90m。0分からの時刻tでBの距離を表す式は？（t≥5）",
      "answer": "90(t−5)",
      "options": [
        "90(t−5)",
        "90t",
        "90(t＋5)"
      ],
      "grading": "choice",
      "explanation": "Bが進んだ時間は出発の5分を引いたt−5です。",
      "hints": [
        "時刻と実際に動いた時間を区別します。",
        "Bが進んだ時間は出発の5分を引いたt−5です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    },
    {
      "id": "ma-linear-v9-54",
      "unit": "ma-linear",
      "primarySkill": "ma-linear:06",
      "family": "li-integer-threshold",
      "mode": "solve",
      "prompt": "料金Aは200＋50x円、Bは80x円。xを正の整数とすると、Aが安くなる最小のxは？",
      "answer": "7",
      "options": null,
      "grading": "number",
      "explanation": "条件はx＞20/3（約6.67）。最小の整数は7です。",
      "hints": [
        "境界を計算した後、使える整数を選びます。",
        "条件はx＞20/3（約6.67）。最小の整数は7です。"
      ],
      "passage": "",
      "tags": [
        "ma-linear",
        "algebra"
      ],
      "version": 9
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "表・座標・式・場面の条件を対応させ、計算と判断を別々に確かめます。",
  "limitation": "グラフは座標・表・言葉で確認します。描画・作図や自由記述の評価は未対応です。"
};
function generated(unit,f,seed,k,mode,prompt,answer,why,hint){return {id:unit+'-g9-'+f+'-'+seed,unit,primarySkill:unit+':0'+k,family:f,mode,prompt,answer:String(answer),options:null,grading:'number',explanation:why,hints:[hint,why],passage:'',tags:[unit,'algebra'],version:9};}
const config={
 'ma-proportion':['pr-constant','pr-direct-value','pr-inverse-value','pr-range-end','pr-reflected-coordinate'],
 'ma-simultaneous':['si-eliminate-scale','si-substitution-value','si-decimal-solve','si-count-cost-value','si-verification-residual'],
 'ma-linear':['li-slope-table','li-two-point-intercept','li-intersection','li-fee-break-even','li-point-value']
};
for(const [unit,families] of Object.entries(config)){const pilot=C.pilots[unit];pilot.families=families;pilot.generate=(f,seed)=>{if(!Number.isInteger(seed)||seed<0||seed>=121)throw Error('Invalid algebra seed');const x=seed%11-5,y=Math.floor(seed/11)-5,a=1+seed%11,b=1+Math.floor(seed/11),n=v=>v<0?'('+v+')':String(v);let q;
const g=(k,mode,prompt,answer,why,hint)=>generated(unit,f,seed,k,mode,prompt,answer,why,hint);
if(f==='pr-constant'){const slope=y||6;q=g(1,'solve',`yはxに比例し、x＝${a}でy＝${a*slope}。比例定数は？`,slope,`${a*slope}÷${a}＝${slope}です。`,'0でないxについてy÷xを計算します。');}
if(f==='pr-direct-value'){const slope=y||6;q=g(2,'solve',`y＝${n(slope)}x。x＝${x}のときyはいくつ？`,slope*x,`${slope}×${n(x)}＝${slope*x}です。`,'xに数を代入し、符号を確認します。');}
if(f==='pr-inverse-value'){const k=12*b;q=g(3,'connect',`y＝${k}/x。x＝${a}のときyはいくつ？`,`${k}/${a}`,`${k}を${a}で割ります。分数のままでも答えられます。`,'反比例ではxyが一定です。');}
if(f==='pr-range-end'){const slope=-b;q=g(6,'solve',`y＝${slope}x、−2≤x≤${a}。yの最小値は？`,slope*a,`減少する関係なのでxが最大の${a}でyが最小。${slope*a}です。`,'傾きが負なので大小の向きが逆になります。');}
if(f==='si-eliminate-scale')q=g(1,'solve',`2x＋y＝${2*x+y}、x−y＝${x-y}。xはいくつ？`,x,`辺々足すと3x＝${3*x}なのでx＝${x}です。`,'yを打ち消すように足します。');
if(f==='si-substitution-value')q=g(2,'solve',`y＝2x＋${n(y)}、x＋y＝${3*x+y}。xはいくつ？`,x,`代入すると3x＋${n(y)}＝${3*x+y}。x＝${x}です。`,'yを式全体で置き換えます。');
if(f==='si-decimal-solve')q=g(3,'solve',`0.5x＋y＝${x/2+y}、x−y＝${x-y}。yはいくつ？`,y,`足すと1.5x＝${1.5*x}でx＝${x}。第2式に戻すとy＝${y}です。`,'最後に求めるのはyです。');
if(f==='si-count-cost-value')q=g(4,'connect',`100円の品と150円の品を合計${a+b}個買い、代金は${100*a+150*b}円。150円の品は何個？`,b,`全部100円なら${100*(a+b)}円。差${50*b}円を50で割って${b}個です。`,'個数と代金を別の条件にします。');
if(f==='li-slope-table'){const slope=y||6;q=g(1,'solve','表は一次関数を表す。変化の割合は？',slope,`xは2増え、yは${2*slope}増えるので${2*slope}÷2＝${slope}です。`,'xとyの増加量を対応させます。');q.table={caption:'一次関数の値',columns:['x','y'],rows:[[String(x),String(slope*x+b)],[String(x+2),String(slope*(x+2)+b)]]};}
if(f==='li-two-point-intercept')q=g(3,'solve',`点(${x},${2*x+y})と(${x+3},${2*(x+3)+y})を通る直線の切片は？`,y,`傾きは6÷3＝2。一方の点をy＝2x＋bに代入すると切片は${y}です。`,'まず傾き、次に切片を求めます。');
if(f==='li-intersection')q=g(4,'solve',`y＝2x＋${n(y)}とy＝−x＋${n(3*x+y)}の交点のx座標は？`,x,`右辺どうしを等しくすると3x＝${3*x}なのでx＝${x}です。`,'交点では両方の式のyが等しくなります。');
if(f==='li-fee-break-even'){const fixed=60*a,rate=20*b;q=g(6,'connect',`料金Aは${fixed}＋${rate}x円、Bは${rate+30}x円。料金が同じになるxは？`,2*a,`差の30xが基本料金${fixed}に等しいのでx＝${2*a}です。`,'二つの料金の式を等しいと置きます。');}
if(f==='pr-reflected-coordinate')q=g(4,'connect',`点(${x},${y})をy軸について対称に移した点のx座標は？`,-x,`左右を反転するのでx座標は${-x}。y座標は${y}のままです。`,'y軸からの左右の距離を保ちます。');
if(f==='si-verification-residual')q=g(6,'detect',`x＝${x}、y＝${y}が2x−y＝${a}を満たすか調べる。「左辺−右辺」の値は？`,2*x-y-a,`2×${n(x)}−${n(y)}−${a}＝${2*x-y-a}です。0のときだけこの式を満たします。`,'代入した左辺から右辺を引きます。');
if(f==='li-point-value')q=g(2,'solve',`直線y＝${b}x＋${n(y)}上の点で、x座標が${x}の点のy座標は？`,b*x+y,`${b}×${n(x)}＋${n(y)}＝${b*x+y}です。`,'横の位置を式に代入して縦の位置を求めます。');
if(!q)throw Error('Unknown algebra family');return q;};}

C.allPilotSkills=Object.values(C.pilots).flatMap(p=>p.skills);
})(typeof window==='undefined'?globalThis:window);
