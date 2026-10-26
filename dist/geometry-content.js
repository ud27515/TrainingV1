(function(root){'use strict';const C=root.TrailContent;
C.pilots["ge-plane"]={
  "skills": [
    {
      "id": "ge-plane:01",
      "name": "直線・線分・半直線"
    },
    {
      "id": "ge-plane:02",
      "name": "図形の移動"
    },
    {
      "id": "ge-plane:03",
      "name": "垂直二等分線"
    },
    {
      "id": "ge-plane:04",
      "name": "二等分線と垂線"
    },
    {
      "id": "ge-plane:05",
      "name": "条件を満たす点"
    },
    {
      "id": "ge-plane:06",
      "name": "円と扇形"
    }
  ],
  "bank": [
    {
      "id": "ge-plane-v10-1",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:01",
      "family": "gp-line-segment",
      "mode": "solve",
      "prompt": "2点A、Bを両端として、その間だけを表すのは？",
      "answer": "線分AB",
      "options": [
        "線分AB",
        "直線AB",
        "半直線AB"
      ],
      "grading": "choice",
      "explanation": "線分は両端が決まり、直線は両側、半直線は片側へ限りなく伸びます。",
      "hints": [
        "端点がいくつあるか考えます。",
        "線分は両端が決まり、直線は両側、半直線は片側へ限りなく伸びます。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-2",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:01",
      "family": "gp-ray-origin",
      "mode": "detect",
      "prompt": "半直線ABと半直線BAは同じ？",
      "answer": "始点と伸びる向きが違う",
      "options": [
        "始点と伸びる向きが違う",
        "どちらも線分ABと同じ",
        "始点だけ違い、伸びる向きは同じ"
      ],
      "grading": "choice",
      "explanation": "半直線ABはAからB方向、BAはBからA方向です。",
      "hints": [
        "最初の文字が始点です。",
        "半直線ABはAからB方向、BAはBからA方向です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-3",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:01",
      "family": "gp-angle-name",
      "mode": "create",
      "prompt": "∠ABCの頂点は？",
      "answer": "B",
      "options": [
        "B",
        "A",
        "C"
      ],
      "grading": "choice",
      "explanation": "角の記号の中央の文字が頂点です。",
      "hints": [
        "2本の辺BAとBCが出会う点です。",
        "角の記号の中央の文字が頂点です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "三角形ABC",
        "description": "Aが上、Bが左下、Cが右下の三角形。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-plane-v10-4",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:02",
      "family": "gp-translation",
      "mode": "solve",
      "prompt": "点(−2,3)を右へ5、下へ2平行移動した点は？",
      "answer": "(3,1)",
      "options": [
        "(3,1)",
        "(−7,1)",
        "(3,5)"
      ],
      "grading": "choice",
      "explanation": "xに5を足し、yから2を引きます。",
      "hints": [
        "左右はx、上下はyです。",
        "xに5を足し、yから2を引きます。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-5",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:02",
      "family": "gp-rotation",
      "mode": "connect",
      "prompt": "原点を中心に点(2,1)を反時計回りに90度回転した点は？",
      "answer": "(−1,2)",
      "options": [
        "(−1,2)",
        "(1,−2)",
        "(−2,−1)"
      ],
      "grading": "choice",
      "explanation": "反時計回り90度では(x,y)が(−y,x)になります。",
      "hints": [
        "右上の点が左上へ動くことも確認します。",
        "反時計回り90度では(x,y)が(−y,x)になります。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-6",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:02",
      "family": "gp-reflection",
      "mode": "detect",
      "prompt": "線対称の移動で、対応する2点を結ぶ線分と対称軸の関係は？",
      "answer": "対称軸が線分を垂直に二等分する",
      "options": [
        "対称軸が線分を垂直に二等分する",
        "対称軸が線分に平行になる",
        "対称軸が線分の一方の端だけを通る"
      ],
      "grading": "choice",
      "explanation": "対称軸からの距離が等しく、結ぶ方向は軸に垂直です。",
      "hints": [
        "軸を折り目として重なることを考えます。",
        "対称軸からの距離が等しく、結ぶ方向は軸に垂直です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-7",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:03",
      "family": "gp-perpendicular-property",
      "mode": "connect",
      "prompt": "PがABの垂直二等分線上にあるとき、必ず成り立つのは？",
      "answer": "PA＝PB",
      "options": [
        "PA＝PB",
        "PA＝AB",
        "PB＝AB"
      ],
      "grading": "choice",
      "explanation": "垂直二等分線上の点は両端から等距離です。",
      "hints": [
        "図の見かけの長さで判断しません。",
        "垂直二等分線上の点は両端から等距離です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "線分ABと垂直二等分線",
        "description": "AとBを結ぶ水平な線分の中点Mを、縦の直線が垂直に通る。縦の直線上に点Pがある。",
        "lines": [
          {
            "a": [
              100,
              220
            ],
            "b": [
              400,
              220
            ]
          },
          {
            "a": [
              250,
              40
            ],
            "b": [
              250,
              280
            ]
          },
          {
            "a": [
              100,
              220
            ],
            "b": [
              250,
              80
            ]
          },
          {
            "a": [
              400,
              220
            ],
            "b": [
              250,
              80
            ]
          }
        ],
        "labels": [
          {
            "at": [
              85,
              240
            ],
            "text": "A"
          },
          {
            "at": [
              415,
              240
            ],
            "text": "B"
          },
          {
            "at": [
              270,
              240
            ],
            "text": "M"
          },
          {
            "at": [
              270,
              80
            ],
            "text": "P"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-plane-v10-8",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:03",
      "family": "gp-compass-radius",
      "mode": "create",
      "prompt": "ABの垂直二等分線を作図する。AとBを中心に描く弧の半径は？",
      "answer": "互いに等しく、ABの半分より大きくする",
      "options": [
        "互いに等しく、ABの半分より大きくする",
        "互いに等しく、ABの半分より小さくする",
        "必ずABの半分ちょうどにする"
      ],
      "grading": "choice",
      "explanation": "2つの交点を作るため半分より大きい同じ半径にします。",
      "hints": [
        "弧が2点で交わる必要があります。",
        "2つの交点を作るため半分より大きい同じ半径にします。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-9",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:03",
      "family": "gp-construction-error",
      "mode": "detect",
      "prompt": "A中心とB中心で異なる半径の弧を描いた。その交点は必ずAとBから等距離になる？",
      "answer": "AとBから等距離とは限らない",
      "options": [
        "AとBから等距離とは限らない",
        "半径が違っても必ず等距離になる",
        "交点があるなら必ずABの中点になる"
      ],
      "grading": "choice",
      "explanation": "交点からAとBへの距離は、それぞれ描いた半径です。",
      "hints": [
        "コンパスでそろえる長さが何か考えます。",
        "交点からAとBへの距離は、それぞれ描いた半径です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-10",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:04",
      "family": "gp-angle-bisector",
      "mode": "solve",
      "prompt": "80度の角を二等分した一方の角は何度？",
      "answer": "40",
      "options": null,
      "grading": "number",
      "explanation": "80÷2＝40度です。",
      "hints": [
        "角度を等しく二つに分けます。",
        "80÷2＝40度です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-11",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:04",
      "family": "gp-perpendicular-distance",
      "mode": "connect",
      "prompt": "点Pから直線lまでの距離として測る線分は？",
      "answer": "Pからlへ下ろした垂線",
      "options": [
        "Pからlへ下ろした垂線",
        "Pからl上の任意の点へ引いた斜線",
        "lに平行にPから伸ばした線"
      ],
      "grading": "choice",
      "explanation": "点と直線の距離は垂線の長さです。",
      "hints": [
        "最短の線分を考えます。",
        "点と直線の距離は垂線の長さです。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-12",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:04",
      "family": "gp-bisector-plan",
      "mode": "create",
      "prompt": "角の二等分線の作図で、頂点から同じ距離の2点を両辺上に取った後は？",
      "answer": "その2点を中心に同じ半径の弧を交差させ、交点と頂点を結ぶ",
      "options": [
        "その2点を中心に同じ半径の弧を交差させ、交点と頂点を結ぶ",
        "2点を直線で結ぶだけで終える",
        "片方の点と頂点だけを結ぶ"
      ],
      "grading": "choice",
      "explanation": "同じ距離の条件を使い、角を等分する方向の点を作ります。",
      "hints": [
        "新しく得た交点を頂点と結びます。",
        "同じ距離の条件を使い、角を等分する方向の点を作ります。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-13",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:05",
      "family": "gp-locus-circle",
      "mode": "solve",
      "prompt": "点Oから3cmの距離にある点の集まりは？",
      "answer": "中心O、半径3cmの円周",
      "options": [
        "中心O、半径3cmの円周",
        "中心O、直径3cmの円周",
        "中心O、半径3cmの円の内部全体"
      ],
      "grading": "choice",
      "explanation": "距離が3cmちょうどなので円周です。",
      "hints": [
        "3cm以下という条件とは違います。",
        "距離が3cmちょうどなので円周です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-14",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:05",
      "family": "gp-locus-intersection",
      "mode": "create",
      "prompt": "AとBから等距離で、直線l上にある点を探すには？",
      "answer": "ABの垂直二等分線とlの共有点を調べる",
      "options": [
        "ABの垂直二等分線とlの共有点を調べる",
        "ABの中点だけを答える",
        "Aを通るlの平行線を引く"
      ],
      "grading": "choice",
      "explanation": "二つの条件を同時に満たす点を調べます。共有点の数は位置関係によります。",
      "hints": [
        "条件ごとの点の集まりを重ねます。",
        "二つの条件を同時に満たす点を調べます。共有点の数は位置関係によります。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-15",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:05",
      "family": "gp-bisector-distance",
      "mode": "detect",
      "prompt": "角の内部の点Pが二等分線上にある。等しいのは？",
      "answer": "Pから角の両辺に下ろした垂線の長さ",
      "options": [
        "Pから角の両辺に下ろした垂線の長さ",
        "Pから両辺上の任意の2点への長さ",
        "Pから頂点への長さと両辺の長さ"
      ],
      "grading": "choice",
      "explanation": "二等分線上の点は、両辺への垂直な距離が等しいです。",
      "hints": [
        "直線への距離の定義を使います。",
        "二等分線上の点は、両辺への垂直な距離が等しいです。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-16",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:06",
      "family": "gp-circumference",
      "mode": "solve",
      "prompt": "半径3cmの円の周の長さは？",
      "answer": "6π cm",
      "options": [
        "6π cm",
        "3π cm",
        "9π cm"
      ],
      "grading": "choice",
      "explanation": "円周＝2πrなので6π cmです。",
      "hints": [
        "面積の公式と区別します。",
        "円周＝2πrなので6π cmです。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-plane-v10-17",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:06",
      "family": "gp-sector-area",
      "mode": "connect",
      "prompt": "図の扇形の半径は6cm、中心角は90度。面積は？",
      "answer": "9π cm²",
      "options": [
        "9π cm²",
        "3π cm²",
        "36π cm²"
      ],
      "grading": "choice",
      "explanation": "円全体36πの90/360、つまり1/4です。",
      "hints": [
        "円の何分のいくつか考えます。",
        "円全体36πの90/360、つまり1/4です。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "中心角90度の扇形",
        "description": "中心Oから右と上へ伸びる半径が垂直で、中心角90度の扇形。",
        "lines": [
          {
            "a": [
              180,
              220
            ],
            "b": [
              380,
              220
            ]
          },
          {
            "a": [
              180,
              220
            ],
            "b": [
              180,
              20
            ]
          }
        ],
        "labels": [
          {
            "at": [
              160,
              240
            ],
            "text": "O"
          }
        ],
        "circles": [],
        "arcs": [
          {
            "center": [
              180,
              220
            ],
            "radius": 200,
            "start": -90,
            "end": 0
          }
        ]
      }
    },
    {
      "id": "ge-plane-v10-18",
      "unit": "ge-plane",
      "primarySkill": "ge-plane:06",
      "family": "gp-sector-perimeter",
      "mode": "detect",
      "prompt": "半径6cm、中心角90度の扇形の周の長さは？",
      "answer": "3π＋12 cm",
      "options": [
        "3π＋12 cm",
        "3π cm",
        "9π＋12 cm"
      ],
      "grading": "choice",
      "explanation": "弧の長さ3πに半径2本分12を足します。",
      "hints": [
        "弧だけでなく境界全体を数えます。",
        "弧の長さ3πに半径2本分12を足します。"
      ],
      "passage": "",
      "tags": [
        "ge-plane",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "中心角90度の扇形",
        "description": "中心Oから右と上へ伸びる半径が垂直で、中心角90度の扇形。",
        "lines": [
          {
            "a": [
              180,
              220
            ],
            "b": [
              380,
              220
            ]
          },
          {
            "a": [
              180,
              220
            ],
            "b": [
              180,
              20
            ]
          }
        ],
        "labels": [
          {
            "at": [
              160,
              240
            ],
            "text": "O"
          }
        ],
        "circles": [],
        "arcs": [
          {
            "center": [
              180,
              220
            ],
            "radius": 200,
            "start": -90,
            "end": 0
          }
        ]
      }
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "図と文章の条件を照合し、対応関係・角・根拠を順に確かめます。",
  "limitation": "作図の手順や証明の根拠を選ぶ課題です。実際の作図操作や自由記述の証明は未評価です。"
};
C.pilots["ge-angle"]={
  "skills": [
    {
      "id": "ge-angle:01",
      "name": "同位角・錯角"
    },
    {
      "id": "ge-angle:02",
      "name": "内角と外角"
    },
    {
      "id": "ge-angle:03",
      "name": "多角形の角"
    },
    {
      "id": "ge-angle:04",
      "name": "補助線と角"
    },
    {
      "id": "ge-angle:05",
      "name": "平行の判定"
    }
  ],
  "bank": [
    {
      "id": "ge-angle-v10-19",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:01",
      "family": "ga-corresponding",
      "mode": "solve",
      "prompt": "l∥m。Pで右上にある角が65度。Qで右上にある同位角は何度？",
      "answer": "65",
      "options": null,
      "grading": "number",
      "explanation": "平行線の同位角は等しいので65度です。",
      "hints": [
        "二つの交点で同じ位置の角を見ます。",
        "平行線の同位角は等しいので65度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "2直線と横切る直線",
        "description": "上の直線lと下の直線mを斜めの直線が横切る。上の交点をP、下の交点をQとする。",
        "lines": [
          {
            "a": [
              50,
              100
            ],
            "b": [
              450,
              100
            ]
          },
          {
            "a": [
              50,
              220
            ],
            "b": [
              450,
              220
            ]
          },
          {
            "a": [
              140,
              280
            ],
            "b": [
              340,
              40
            ]
          }
        ],
        "labels": [
          {
            "at": [
              460,
              105
            ],
            "text": "l"
          },
          {
            "at": [
              460,
              225
            ],
            "text": "m"
          },
          {
            "at": [
              310,
              90
            ],
            "text": "P"
          },
          {
            "at": [
              210,
              210
            ],
            "text": "Q"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-20",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:01",
      "family": "ga-alternate",
      "mode": "connect",
      "prompt": "l∥mのとき、2直線の内側で横切る直線の反対側にある錯角の関係は？",
      "answer": "等しい",
      "options": [
        "等しい",
        "和が必ず90度",
        "一方が他方の2倍"
      ],
      "grading": "choice",
      "explanation": "平行線の錯角は等しくなります。",
      "hints": [
        "内側で反対側の位置を確認します。",
        "平行線の錯角は等しくなります。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "2直線と横切る直線",
        "description": "上の直線lと下の直線mを斜めの直線が横切る。上の交点をP、下の交点をQとする。",
        "lines": [
          {
            "a": [
              50,
              100
            ],
            "b": [
              450,
              100
            ]
          },
          {
            "a": [
              50,
              220
            ],
            "b": [
              450,
              220
            ]
          },
          {
            "a": [
              140,
              280
            ],
            "b": [
              340,
              40
            ]
          }
        ],
        "labels": [
          {
            "at": [
              460,
              105
            ],
            "text": "l"
          },
          {
            "at": [
              460,
              225
            ],
            "text": "m"
          },
          {
            "at": [
              310,
              90
            ],
            "text": "P"
          },
          {
            "at": [
              210,
              210
            ],
            "text": "Q"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-21",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:01",
      "family": "ga-no-parallel",
      "mode": "detect",
      "prompt": "2直線を横切る直線がある。同位角は、平行の条件がなくても必ず等しい？",
      "answer": "必ず等しいとは言えない",
      "options": [
        "必ず等しいとは言えない",
        "同位角という位置だけで等しい",
        "角度が鋭角なら必ず等しい"
      ],
      "grading": "choice",
      "explanation": "等しくなるには平行などの根拠が必要です。",
      "hints": [
        "図の見かけだけで平行を追加しません。",
        "等しくなるには平行などの根拠が必要です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "2直線と横切る直線",
        "description": "上の直線lと下の直線mを斜めの直線が横切る。上の交点をP、下の交点をQとする。",
        "lines": [
          {
            "a": [
              50,
              100
            ],
            "b": [
              450,
              100
            ]
          },
          {
            "a": [
              50,
              220
            ],
            "b": [
              450,
              220
            ]
          },
          {
            "a": [
              140,
              280
            ],
            "b": [
              340,
              40
            ]
          }
        ],
        "labels": [
          {
            "at": [
              460,
              105
            ],
            "text": "l"
          },
          {
            "at": [
              460,
              225
            ],
            "text": "m"
          },
          {
            "at": [
              310,
              90
            ],
            "text": "P"
          },
          {
            "at": [
              210,
              210
            ],
            "text": "Q"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-22",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:02",
      "family": "ga-triangle-sum",
      "mode": "solve",
      "prompt": "三角形ABCで∠B＝50度、∠C＝60度。∠Aは何度？",
      "answer": "70",
      "options": null,
      "grading": "number",
      "explanation": "180−50−60＝70度です。",
      "hints": [
        "三角形の内角の和は180度です。",
        "180−50−60＝70度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "三角形ABC",
        "description": "Aが上、Bが左下、Cが右下の三角形。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-23",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:02",
      "family": "ga-exterior",
      "mode": "connect",
      "prompt": "三角形のある頂点の外角が120度。他の2つの内角の一方が45度。もう一方は何度？",
      "answer": "75",
      "options": null,
      "grading": "number",
      "explanation": "外角は隣り合わない2内角の和なので120−45＝75度です。",
      "hints": [
        "外角の位置と隣り合う内角を区別します。",
        "外角は隣り合わない2内角の和なので120−45＝75度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-24",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:02",
      "family": "ga-adjacent-exterior",
      "mode": "detect",
      "prompt": "内角80度に隣り合う外角の大きさは？",
      "answer": "100度",
      "options": [
        "100度",
        "80度",
        "280度"
      ],
      "grading": "choice",
      "explanation": "一直線上の隣り合う角の和は180度です。",
      "hints": [
        "360度でなく180度から引きます。",
        "一直線上の隣り合う角の和は180度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-25",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:03",
      "family": "ga-polygon-sum",
      "mode": "solve",
      "prompt": "六角形の内角の和は何度？",
      "answer": "720",
      "options": null,
      "grading": "number",
      "explanation": "(6−2)×180＝720度です。",
      "hints": [
        "一つの頂点から三角形に分けます。",
        "(6−2)×180＝720度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-26",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:03",
      "family": "ga-regular-exterior",
      "mode": "create",
      "prompt": "正八角形の一つの外角は何度？",
      "answer": "45",
      "options": null,
      "grading": "number",
      "explanation": "外角の和360度を8で割ります。",
      "hints": [
        "正多角形なので全て同じ角度です。",
        "外角の和360度を8で割ります。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-27",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:03",
      "family": "ga-exterior-general",
      "mode": "detect",
      "prompt": "凸五角形の外角を各頂点で同じ向きに一つずつ取る。和は？",
      "answer": "360度",
      "options": [
        "360度",
        "540度",
        "180度"
      ],
      "grading": "choice",
      "explanation": "辺を一周すると向きが一回転するので360度です。",
      "hints": [
        "内角の和との違いを考えます。",
        "辺を一周すると向きが一回転するので360度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-28",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:04",
      "family": "ga-auxiliary-parallel",
      "mode": "create",
      "prompt": "三角形の内角和を平行線の角で示したい。Aを通って引く補助線として適切なのは？",
      "answer": "BCに平行な直線",
      "options": [
        "BCに平行な直線",
        "BCに垂直な直線",
        "ABと同じ直線"
      ],
      "grading": "choice",
      "explanation": "錯角でBとCの角をAの周りへ移し、一直線の180度にまとめられます。",
      "hints": [
        "離れた角を一か所に集める目的です。",
        "錯角でBとCの角をAの周りへ移し、一直線の180度にまとめられます。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "三角形ABC",
        "description": "Aが上、Bが左下、Cが右下の三角形。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-29",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:04",
      "family": "ga-split-triangle",
      "mode": "solve",
      "prompt": "三角形ABCのBC上にDがある。∠BAD＝30度、∠DAC＝40度、∠ABC＝50度。∠ACBは？",
      "answer": "60",
      "options": null,
      "grading": "number",
      "explanation": "∠A＝30＋40＝70度。180−70−50＝60度です。",
      "hints": [
        "分けられた角を先に足します。",
        "∠A＝30＋40＝70度。180−70−50＝60度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-angle-v10-30",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:04",
      "family": "ga-angle-chain",
      "mode": "connect",
      "prompt": "三角形ABCでAB＝AC。頂角Aは40度。底角Bの外角は？",
      "answer": "110度",
      "options": [
        "110度",
        "70度",
        "140度"
      ],
      "grading": "choice",
      "explanation": "底角は(180−40)/2＝70度。その外角は180−70＝110度です。",
      "hints": [
        "等しい底角を求めてから外角に移ります。",
        "底角は(180−40)/2＝70度。その外角は180−70＝110度です。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-31",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:05",
      "family": "ga-converse-corresponding",
      "mode": "create",
      "prompt": "lとmが平行だと示すための条件として十分なのは？",
      "answer": "同位角の一組が等しい",
      "options": [
        "同位角の一組が等しい",
        "Pの対頂角が等しい",
        "Pの隣り合う角の和が180度"
      ],
      "grading": "choice",
      "explanation": "同位角が等しいことから平行と判断できます。他の二つは平行でなくても成り立ちます。",
      "hints": [
        "2本の直線の関係を結び付ける条件を使います。",
        "同位角が等しいことから平行と判断できます。他の二つは平行でなくても成り立ちます。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "2直線と横切る直線",
        "description": "上の直線lと下の直線mを斜めの直線が横切る。上の交点をP、下の交点をQとする。",
        "lines": [
          {
            "a": [
              50,
              100
            ],
            "b": [
              450,
              100
            ]
          },
          {
            "a": [
              50,
              220
            ],
            "b": [
              450,
              220
            ]
          },
          {
            "a": [
              140,
              280
            ],
            "b": [
              340,
              40
            ]
          }
        ],
        "labels": [
          {
            "at": [
              460,
              105
            ],
            "text": "l"
          },
          {
            "at": [
              460,
              225
            ],
            "text": "m"
          },
          {
            "at": [
              310,
              90
            ],
            "text": "P"
          },
          {
            "at": [
              210,
              210
            ],
            "text": "Q"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-32",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:05",
      "family": "ga-converse-alternate",
      "mode": "detect",
      "prompt": "一組の錯角が50度と55度だった。直線は平行か？",
      "answer": "平行ではない",
      "options": [
        "平行ではない",
        "5度の違いなら平行",
        "両方鋭角なので平行"
      ],
      "grading": "choice",
      "explanation": "平行なら錯角は等しいため、この条件では平行でありません。",
      "hints": [
        "等しいという条件を厳密に確認します。",
        "平行なら錯角は等しいため、この条件では平行でありません。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "2直線と横切る直線",
        "description": "上の直線lと下の直線mを斜めの直線が横切る。上の交点をP、下の交点をQとする。",
        "lines": [
          {
            "a": [
              50,
              100
            ],
            "b": [
              450,
              100
            ]
          },
          {
            "a": [
              50,
              220
            ],
            "b": [
              450,
              220
            ]
          },
          {
            "a": [
              140,
              280
            ],
            "b": [
              340,
              40
            ]
          }
        ],
        "labels": [
          {
            "at": [
              460,
              105
            ],
            "text": "l"
          },
          {
            "at": [
              460,
              225
            ],
            "text": "m"
          },
          {
            "at": [
              310,
              90
            ],
            "text": "P"
          },
          {
            "at": [
              210,
              210
            ],
            "text": "Q"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-angle-v10-33",
      "unit": "ge-angle",
      "primarySkill": "ge-angle:05",
      "family": "ga-vertical-not-proof",
      "mode": "connect",
      "prompt": "「対頂角が等しいからl∥m」という説明が不十分な理由は？",
      "answer": "対頂角の等しさは一つの交点だけで成り立つ",
      "options": [
        "対頂角の等しさは一つの交点だけで成り立つ",
        "対頂角は常に異なるから",
        "平行なら対頂角は存在しないから"
      ],
      "grading": "choice",
      "explanation": "別の直線との平行関係を示す条件になっていません。",
      "hints": [
        "一つの交点の性質か、二つの交点を結ぶ条件か分けます。",
        "別の直線との平行関係を示す条件になっていません。"
      ],
      "passage": "",
      "tags": [
        "ge-angle",
        "geometry"
      ],
      "version": 10
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "図と文章の条件を照合し、対応関係・角・根拠を順に確かめます。",
  "limitation": "作図の手順や証明の根拠を選ぶ課題です。実際の作図操作や自由記述の証明は未評価です。"
};
C.pilots["ge-congruence"]={
  "skills": [
    {
      "id": "ge-congruence:01",
      "name": "仮定と結論"
    },
    {
      "id": "ge-congruence:02",
      "name": "対応関係"
    },
    {
      "id": "ge-congruence:03",
      "name": "合同条件"
    },
    {
      "id": "ge-congruence:04",
      "name": "証明のつながり"
    },
    {
      "id": "ge-congruence:05",
      "name": "条件不足と反例"
    },
    {
      "id": "ge-congruence:06",
      "name": "補助線の目的"
    }
  ],
  "bank": [
    {
      "id": "ge-congruence-v10-34",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:01",
      "family": "gc-assumption",
      "mode": "solve",
      "prompt": "「AB＝ACなら∠B＝∠C」の仮定は？",
      "answer": "AB＝AC",
      "options": [
        "AB＝AC",
        "∠B＝∠C",
        "三角形ABCが正三角形"
      ],
      "grading": "choice",
      "explanation": "「なら」の前の条件が仮定です。",
      "hints": [
        "与えられたことと示すことを分けます。",
        "「なら」の前の条件が仮定です。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "三角形ABC",
        "description": "Aが上、Bが左下、Cが右下の三角形。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-35",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:01",
      "family": "gc-conclusion",
      "mode": "create",
      "prompt": "仮定が「AB＝DE、BC＝EF、CA＝FD」のとき、示したい合同の結論は？",
      "answer": "△ABC≡△DEF",
      "options": [
        "△ABC≡△DEF",
        "AB＝DE",
        "BC＝EF"
      ],
      "grading": "choice",
      "explanation": "与えられた辺の等しさを根拠として、三角形の合同を導きます。",
      "hints": [
        "根拠を繰り返すだけで結論にしません。",
        "与えられた辺の等しさを根拠として、三角形の合同を導きます。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "対応する二つの三角形",
        "description": "左の三角形ABCではAが上、Bが左下、Cが右下。右の三角形DEFではDが上、Eが左下、Fが右下。",
        "lines": [
          {
            "a": [
              130,
              65
            ],
            "b": [
              45,
              245
            ]
          },
          {
            "a": [
              45,
              245
            ],
            "b": [
              215,
              245
            ]
          },
          {
            "a": [
              215,
              245
            ],
            "b": [
              130,
              65
            ]
          },
          {
            "a": [
              370,
              65
            ],
            "b": [
              285,
              245
            ]
          },
          {
            "a": [
              285,
              245
            ],
            "b": [
              455,
              245
            ]
          },
          {
            "a": [
              455,
              245
            ],
            "b": [
              370,
              65
            ]
          }
        ],
        "labels": [
          {
            "at": [
              130,
              45
            ],
            "text": "A"
          },
          {
            "at": [
              30,
              265
            ],
            "text": "B"
          },
          {
            "at": [
              225,
              265
            ],
            "text": "C"
          },
          {
            "at": [
              370,
              45
            ],
            "text": "D"
          },
          {
            "at": [
              275,
              265
            ],
            "text": "E"
          },
          {
            "at": [
              470,
              265
            ],
            "text": "F"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-36",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:01",
      "family": "gc-circular-reason",
      "mode": "detect",
      "prompt": "合同を証明する途中で「合同だから対応する辺が等しい」を根拠にした。問題は？",
      "answer": "証明する結論を先に根拠として使っている",
      "options": [
        "証明する結論を先に根拠として使っている",
        "合同なら対応する辺が等しいこと自体が誤り",
        "辺の等しさは合同証明では一切使えない"
      ],
      "grading": "choice",
      "explanation": "まだ示していない合同を前提にすると循環します。",
      "hints": [
        "どこまで既に分かっているか確認します。",
        "まだ示していない合同を前提にすると循環します。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-37",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:02",
      "family": "gc-vertex-order",
      "mode": "solve",
      "prompt": "△ABC≡△DEFのとき、Bに対応する頂点は？",
      "answer": "E",
      "options": [
        "E",
        "D",
        "F"
      ],
      "grading": "choice",
      "explanation": "表記の同じ順番の頂点が対応します。",
      "hints": [
        "2番目どうしを見ます。",
        "表記の同じ順番の頂点が対応します。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "対応する二つの三角形",
        "description": "左の三角形ABCではAが上、Bが左下、Cが右下。右の三角形DEFではDが上、Eが左下、Fが右下。",
        "lines": [
          {
            "a": [
              130,
              65
            ],
            "b": [
              45,
              245
            ]
          },
          {
            "a": [
              45,
              245
            ],
            "b": [
              215,
              245
            ]
          },
          {
            "a": [
              215,
              245
            ],
            "b": [
              130,
              65
            ]
          },
          {
            "a": [
              370,
              65
            ],
            "b": [
              285,
              245
            ]
          },
          {
            "a": [
              285,
              245
            ],
            "b": [
              455,
              245
            ]
          },
          {
            "a": [
              455,
              245
            ],
            "b": [
              370,
              65
            ]
          }
        ],
        "labels": [
          {
            "at": [
              130,
              45
            ],
            "text": "A"
          },
          {
            "at": [
              30,
              265
            ],
            "text": "B"
          },
          {
            "at": [
              225,
              265
            ],
            "text": "C"
          },
          {
            "at": [
              370,
              45
            ],
            "text": "D"
          },
          {
            "at": [
              275,
              265
            ],
            "text": "E"
          },
          {
            "at": [
              470,
              265
            ],
            "text": "F"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-38",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:02",
      "family": "gc-edge-order",
      "mode": "connect",
      "prompt": "△ABC≡△FDEのとき、辺ABに対応する辺は？",
      "answer": "FD",
      "options": [
        "FD",
        "DE",
        "EF"
      ],
      "grading": "choice",
      "explanation": "A↔F、B↔DなのでAB↔FDです。",
      "hints": [
        "図の左右でなく、指定された対応順を使います。",
        "A↔F、B↔DなのでAB↔FDです。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-39",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:02",
      "family": "gc-angle-order",
      "mode": "create",
      "prompt": "A↔E、B↔F、C↔Dが対応する。正しい合同の書き方は？",
      "answer": "△ABC≡△EFD",
      "options": [
        "△ABC≡△EFD",
        "△ABC≡△DEF",
        "△ABC≡△EDF"
      ],
      "grading": "choice",
      "explanation": "左のA、B、Cに対応する順に右を並べます。",
      "hints": [
        "対応を一つずつ追います。",
        "左のA、B、Cに対応する順に右を並べます。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-40",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:03",
      "family": "gc-sss",
      "mode": "solve",
      "prompt": "3組の対応する辺がそれぞれ等しい。使える合同条件は？",
      "answer": "3組の辺がそれぞれ等しい",
      "options": [
        "3組の辺がそれぞれ等しい",
        "2組の辺とその間の角がそれぞれ等しい",
        "1組の辺とその両端の角がそれぞれ等しい"
      ],
      "grading": "choice",
      "explanation": "与えられているのは辺の情報3組です。",
      "hints": [
        "持っている条件の種類を確認します。",
        "与えられているのは辺の情報3組です。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "対応する二つの三角形",
        "description": "左の三角形ABCではAが上、Bが左下、Cが右下。右の三角形DEFではDが上、Eが左下、Fが右下。",
        "lines": [
          {
            "a": [
              130,
              65
            ],
            "b": [
              45,
              245
            ]
          },
          {
            "a": [
              45,
              245
            ],
            "b": [
              215,
              245
            ]
          },
          {
            "a": [
              215,
              245
            ],
            "b": [
              130,
              65
            ]
          },
          {
            "a": [
              370,
              65
            ],
            "b": [
              285,
              245
            ]
          },
          {
            "a": [
              285,
              245
            ],
            "b": [
              455,
              245
            ]
          },
          {
            "a": [
              455,
              245
            ],
            "b": [
              370,
              65
            ]
          }
        ],
        "labels": [
          {
            "at": [
              130,
              45
            ],
            "text": "A"
          },
          {
            "at": [
              30,
              265
            ],
            "text": "B"
          },
          {
            "at": [
              225,
              265
            ],
            "text": "C"
          },
          {
            "at": [
              370,
              45
            ],
            "text": "D"
          },
          {
            "at": [
              275,
              265
            ],
            "text": "E"
          },
          {
            "at": [
              470,
              265
            ],
            "text": "F"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-41",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:03",
      "family": "gc-sas-included",
      "mode": "detect",
      "prompt": "AB＝DE、AC＝DF。合同を示すため、間の角として追加するのは？",
      "answer": "∠BAC＝∠EDF",
      "options": [
        "∠BAC＝∠EDF",
        "∠ABC＝∠DEF",
        "∠BCA＝∠EFD"
      ],
      "grading": "choice",
      "explanation": "2辺ABとACの間はA、DEとDFの間はDです。",
      "hints": [
        "二つの辺が共有する頂点を探します。",
        "2辺ABとACの間はA、DEとDFの間はDです。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "対応する二つの三角形",
        "description": "左の三角形ABCではAが上、Bが左下、Cが右下。右の三角形DEFではDが上、Eが左下、Fが右下。",
        "lines": [
          {
            "a": [
              130,
              65
            ],
            "b": [
              45,
              245
            ]
          },
          {
            "a": [
              45,
              245
            ],
            "b": [
              215,
              245
            ]
          },
          {
            "a": [
              215,
              245
            ],
            "b": [
              130,
              65
            ]
          },
          {
            "a": [
              370,
              65
            ],
            "b": [
              285,
              245
            ]
          },
          {
            "a": [
              285,
              245
            ],
            "b": [
              455,
              245
            ]
          },
          {
            "a": [
              455,
              245
            ],
            "b": [
              370,
              65
            ]
          }
        ],
        "labels": [
          {
            "at": [
              130,
              45
            ],
            "text": "A"
          },
          {
            "at": [
              30,
              265
            ],
            "text": "B"
          },
          {
            "at": [
              225,
              265
            ],
            "text": "C"
          },
          {
            "at": [
              370,
              45
            ],
            "text": "D"
          },
          {
            "at": [
              275,
              265
            ],
            "text": "E"
          },
          {
            "at": [
              470,
              265
            ],
            "text": "F"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-42",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:03",
      "family": "gc-asa",
      "mode": "create",
      "prompt": "AB＝DE、∠A＝∠D、∠B＝∠E。使う合同条件は？",
      "answer": "1組の辺とその両端の角がそれぞれ等しい",
      "options": [
        "1組の辺とその両端の角がそれぞれ等しい",
        "3組の辺がそれぞれ等しい",
        "2組の辺とその間の角がそれぞれ等しい"
      ],
      "grading": "choice",
      "explanation": "等しい辺AB・DEの両端の角がそろっています。",
      "hints": [
        "辺の両端がどの頂点か確認します。",
        "等しい辺AB・DEの両端の角がそろっています。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "対応する二つの三角形",
        "description": "左の三角形ABCではAが上、Bが左下、Cが右下。右の三角形DEFではDが上、Eが左下、Fが右下。",
        "lines": [
          {
            "a": [
              130,
              65
            ],
            "b": [
              45,
              245
            ]
          },
          {
            "a": [
              45,
              245
            ],
            "b": [
              215,
              245
            ]
          },
          {
            "a": [
              215,
              245
            ],
            "b": [
              130,
              65
            ]
          },
          {
            "a": [
              370,
              65
            ],
            "b": [
              285,
              245
            ]
          },
          {
            "a": [
              285,
              245
            ],
            "b": [
              455,
              245
            ]
          },
          {
            "a": [
              455,
              245
            ],
            "b": [
              370,
              65
            ]
          }
        ],
        "labels": [
          {
            "at": [
              130,
              45
            ],
            "text": "A"
          },
          {
            "at": [
              30,
              265
            ],
            "text": "B"
          },
          {
            "at": [
              225,
              265
            ],
            "text": "C"
          },
          {
            "at": [
              370,
              45
            ],
            "text": "D"
          },
          {
            "at": [
              275,
              265
            ],
            "text": "E"
          },
          {
            "at": [
              470,
              265
            ],
            "text": "F"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-43",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:04",
      "family": "gc-common-side",
      "mode": "connect",
      "prompt": "AB＝AC、MはBCの中点。△ABMと△ACMの合同に使う共通の辺は？",
      "answer": "AM",
      "options": [
        "AM",
        "AB",
        "BC"
      ],
      "grading": "choice",
      "explanation": "AMは両方の三角形に含まれ、AM＝AMです。",
      "hints": [
        "同じ線分を共有しています。",
        "AMは両方の三角形に含まれ、AM＝AMです。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-44",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:04",
      "family": "gc-proof-chain",
      "mode": "create",
      "prompt": "AB＝AC、BM＝CM、AMは共通。次に導く内容は？",
      "answer": "3組の辺が等しいので△ABM≡△ACM",
      "options": [
        "3組の辺が等しいので△ABM≡△ACM",
        "2組の辺だけで△ABM≡△ACM",
        "面積が等しいので△ABM≡△ACM"
      ],
      "grading": "choice",
      "explanation": "三つの対応する辺の条件がそろっています。",
      "hints": [
        "根拠に合う合同条件を選びます。",
        "三つの対応する辺の条件がそろっています。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-45",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:04",
      "family": "gc-after-proof",
      "mode": "solve",
      "prompt": "△ABM≡△ACMを示した後、対応する角から分かるのは？",
      "answer": "∠BAM＝∠MAC",
      "options": [
        "∠BAM＝∠MAC",
        "∠ABM＝∠MAC",
        "∠AMB＝∠ACM"
      ],
      "grading": "choice",
      "explanation": "B↔C、A↔A、M↔Mなので頂角Aの二つの角が対応します。",
      "hints": [
        "3文字の対応順を保ちます。",
        "B↔C、A↔A、M↔Mなので頂角Aの二つの角が対応します。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-46",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:05",
      "family": "gc-aaa-counterexample",
      "mode": "detect",
      "prompt": "三つの角がそれぞれ等しければ合同と言える？",
      "answer": "大きさが違う相似な三角形があり、合同とは限らない",
      "options": [
        "大きさが違う相似な三角形があり、合同とは限らない",
        "角が等しければ辺も同じ長さになる",
        "三角形の内角和が同じなら合同になる"
      ],
      "grading": "choice",
      "explanation": "例えば一辺1cmと2cmの正三角形は角が全て60度でも合同ではありません。",
      "hints": [
        "同じ形でも大きさが違う例を考えます。",
        "例えば一辺1cmと2cmの正三角形は角が全て60度でも合同ではありません。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-47",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:05",
      "family": "gc-ssa-insufficient",
      "mode": "connect",
      "prompt": "2組の辺と、その間ではない一つの角が等しい。一般に合同を言える？",
      "answer": "一般には言えない",
      "options": [
        "一般には言えない",
        "一般に合同と言える",
        "間ではない角の方が条件は強い"
      ],
      "grading": "choice",
      "explanation": "一般の二辺と非夾角では、異なる形ができる場合があります。直角三角形などの追加条件とは区別します。",
      "hints": [
        "「その間の角」という指定が重要です。",
        "一般の二辺と非夾角では、異なる形ができる場合があります。直角三角形などの追加条件とは区別します。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-48",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:05",
      "family": "gc-area-counterexample",
      "mode": "create",
      "prompt": "面積が同じでも合同とは限らない例は？",
      "answer": "底辺4・高さ3の直角三角形と、底辺6・高さ2の直角三角形",
      "options": [
        "底辺4・高さ3の直角三角形と、底辺6・高さ2の直角三角形",
        "同じ三角形を平行移動した二つ",
        "同じ三角形を回転移動した二つ"
      ],
      "grading": "choice",
      "explanation": "両方の面積は6ですが、辺の長さが違います。",
      "hints": [
        "面積だけで形と大きさ全体は決まりません。",
        "両方の面積は6ですが、辺の長さが違います。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    },
    {
      "id": "ge-congruence-v10-49",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:06",
      "family": "gc-midpoint-purpose",
      "mode": "connect",
      "prompt": "二等辺三角形で底辺の中点Mと頂点Aを結ぶ目的は？",
      "answer": "共通辺と等しい底辺部分を使う二つの三角形を作る",
      "options": [
        "共通辺と等しい底辺部分を使う二つの三角形を作る",
        "底辺の長さを2倍にする",
        "頂角が必ず90度になるようにする"
      ],
      "grading": "choice",
      "explanation": "AB＝AC、BM＝CM、AM共通の3組を使えます。",
      "hints": [
        "補助線でどんな条件が増えるか考えます。",
        "AB＝AC、BM＝CM、AM共通の3組を使えます。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-50",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:06",
      "family": "gc-perpendicular-purpose",
      "mode": "create",
      "prompt": "二等辺三角形の頂点から底辺に垂線を引くと、まず追加される条件は？",
      "answer": "二つの直角ができる",
      "options": [
        "二つの直角ができる",
        "底辺の両端が同じ点になる",
        "三角形が正三角形になる"
      ],
      "grading": "choice",
      "explanation": "垂線により直角三角形ができ、証明の手掛かりになります。",
      "hints": [
        "作図によって直接保証されることだけを述べます。",
        "垂線により直角三角形ができ、証明の手掛かりになります。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10,
      "diagram": {
        "caption": "二等辺三角形の補助線",
        "description": "AB＝ACの三角形ABC。BCの中点MとAを結ぶ線分AMを引く。",
        "lines": [
          {
            "a": [
              250,
              50
            ],
            "b": [
              100,
              250
            ]
          },
          {
            "a": [
              100,
              250
            ],
            "b": [
              400,
              250
            ]
          },
          {
            "a": [
              400,
              250
            ],
            "b": [
              250,
              50
            ]
          },
          {
            "a": [
              250,
              50
            ],
            "b": [
              250,
              250
            ]
          }
        ],
        "labels": [
          {
            "at": [
              250,
              35
            ],
            "text": "A"
          },
          {
            "at": [
              80,
              270
            ],
            "text": "B"
          },
          {
            "at": [
              420,
              270
            ],
            "text": "C"
          },
          {
            "at": [
              250,
              275
            ],
            "text": "M"
          }
        ],
        "circles": []
      }
    },
    {
      "id": "ge-congruence-v10-51",
      "unit": "ge-congruence",
      "primarySkill": "ge-congruence:06",
      "family": "gc-unjustified-line",
      "mode": "detect",
      "prompt": "任意に引いた補助線について「図で直角に見えるから垂線」とした。正しい扱いは？",
      "answer": "垂直の条件や作図の根拠が必要",
      "options": [
        "垂直の条件や作図の根拠が必要",
        "図で直角に見えれば根拠は不要",
        "補助線は全て底辺に垂直になる"
      ],
      "grading": "choice",
      "explanation": "見かけだけでは角度の性質を追加できません。",
      "hints": [
        "図の条件と見た目を分けます。",
        "見かけだけでは角度の性質を追加できません。"
      ],
      "passage": "",
      "tags": [
        "ge-congruence",
        "geometry"
      ],
      "version": 10
    }
  ],
  "families": [],
  "seeds": 121,
  "description": "図と文章の条件を照合し、対応関係・角・根拠を順に確かめます。",
  "limitation": "作図の手順や証明の根拠を選ぶ課題です。実際の作図操作や自由記述の証明は未評価です。"
};
function makeG(unit,f,seed,k,mode,prompt,answer,why,hint,diagram){return {id:unit+'-g10-'+f+'-'+seed,unit,primarySkill:unit+':0'+k,family:f,mode,prompt,answer:String(answer),options:null,grading:'number',explanation:why,hints:[hint,why],passage:'',tags:[unit,'geometry'],version:10,...(diagram?{diagram}:{} )};}
for(const unit of ['ge-plane','ge-angle']){const p=C.pilots[unit];p.families=unit==='ge-plane'?['gp-translation-x','gp-reflection-x','gp-angle-bisector','gp-circumference-coefficient','gp-sector-area-coefficient']:['ga-triangle-sum','ga-exterior','ga-polygon-sum','ga-corresponding','ga-split-triangle'];p.generate=(f,seed)=>{if(!Number.isInteger(seed)||seed<0||seed>=121)throw Error('Invalid geometry seed');const a=seed%11+1,b=Math.floor(seed/11)+1;const g=(k,m,prompt,answer,why,hint,d)=>makeG(unit,f,seed,k,m,prompt,answer,why,hint,d);let q;
if(f==='gp-translation-x')q=g(2,'solve',`点(${a-6},${b-6})を右へ${b}、上へ2移す。移動後のx座標は？`,a+b-6,`x座標は${a-6}＋${b}＝${a+b-6}です。`,'上下の移動はx座標に影響しません。');
if(f==='gp-reflection-x')q=g(2,'connect',`点(${a-6},${b-6})をy軸について対称移動する。移動後のx座標は？`,6-a,`左右だけ反転するので${6-a}です。`,'y軸からの距離を保ち、左右を入れ替えます。');
if(f==='gp-angle-bisector')q=g(4,'solve',`${10*a}度の角を二等分した一方の角は何度？`,5*a,`${10*a}÷2＝${5*a}度です。`,'二つの角を等しくします。');
if(f==='gp-circumference-coefficient')q=g(6,'solve',`半径${a}cmの円の周の長さをcπ cmと表す。cはいくつ？`,2*a,`2π×${a}＝${2*a}π cmなのでc＝${2*a}です。`,'面積ではなく円周の公式を使います。');
if(f==='gp-sector-area-coefficient'){const d=JSON.parse(JSON.stringify(p.bank.find(q=>q.family==='gp-sector-area').diagram));d.description=`中心O、半径${2*a}cm、中心角90度の扇形。`;d.labels.push({at:[280,245],text:`r=${2*a}cm`},{at:[215,190],text:'90°'});q=g(6,'connect',`半径${2*a}cm、中心角90度の扇形の面積をcπ cm²と表す。cはいくつ？`,a*a,`半径の2乗${4*a*a}の1/4なので、c＝${a*a}です。`,'円全体の面積の1/4を求めます。',d);}
if(f==='ga-triangle-sum'){const B=10+5*a,C=10+5*b,A=180-B-C;const tb=Math.tan(B*Math.PI/180),tc=Math.tan(C*Math.PI/180),height=300*tb*tc/(tb+tc),scale=Math.min(1,190/height),width=300*scale,left=250-width/2,ay=260-height*scale,ax=left+width*tc/(tb+tc);const d={caption:'三角形ABC',description:`三角形ABC。角Bは${B}度、角Cは${C}度。角Aを求める。`,lines:[{a:[ax,ay],b:[left,260]},{a:[left,260],b:[left+width,260]},{a:[left+width,260],b:[ax,ay]}],labels:[{at:[ax,ay-15],text:'A'},{at:[left-15,280],text:'B'},{at:[left+width+15,280],text:'C'},{at:[left+38,252],text:B+'°'},{at:[left+width-38,252],text:C+'°'},{at:[ax,ay+30],text:'x°'}]};q=g(2,'solve',`図の三角形で∠B＝${B}度、∠C＝${C}度。∠Aは何度？`,A,`180−${B}−${C}＝${A}度です。`,'三つの内角を足すと180度です。',d);}
if(f==='ga-exterior'){const ext=70+5*a,other=10+5*b;q=g(2,'connect',`三角形のある外角は${ext}度。それと隣り合わない内角の一方が${other}度。もう一方は？`,ext-other,`外角＝離れた二つの内角の和なので${ext}−${other}＝${ext-other}度です。`,'隣り合わない二つの内角を使います。');}
if(f==='ga-polygon-sum')q=g(3,'solve',`凸${a+2}角形の内角の和は何度？`,180*a,`(${a+2}−2)×180＝${180*a}度です。`,'三角形に分けた個数を考えます。');
if(f==='ga-corresponding'){const angle=15+10*a;q=g(1,'solve',`2本の平行線を直線が横切る。一つの角が${angle}度なら、それに対応する同位角は何度？`,angle,`同位角は等しいため${angle}度です。`,'平行である条件を確認します。');}
if(f==='ga-split-triangle'){const part=5*a,part2=5*b,B=30;q=g(4,'solve',`三角形ABCでAからBC上のDへ線分を引く。∠BAD＝${part}度、∠DAC＝${part2}度、∠B＝30度。∠Cは何度？`,150-part-part2,`Aの角は${part+part2}度。180−${part+part2}−30＝${150-part-part2}度です。`,'分けられた頂角の二つを足します。');}
if(!q)throw Error('Unknown geometry family');return q;};}

C.allPilotSkills=Object.values(C.pilots).flatMap(p=>p.skills);
})(typeof window==='undefined'?globalThis:window);
