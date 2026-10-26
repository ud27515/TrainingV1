# 一次方程式：品質基準を試すための見本12問

このファイルは設計用の見本です。アプリへの組み込み、記述採点の実装、教材レビューは未完了です。問題数の水増し用テンプレートではなく、構造の違いを比較するために作成しています。

## eq-design-01

3x＋5＝20 を解き、最初に両辺へ行う操作も答えてください。

正答：{"x": "5", "first_operation": "両辺から5を引く"}

解説：両辺から5を引くと3x=15。両辺を3で割るとx=5。

測る力：math-equation:01, math-equation:02 ／ 主評価は math-equation:01

構造：balance_inverse ／ 水準：foundation

採点観点：両辺から5を引く、x=5

## eq-design-02

3(x−2)＝2x＋7 を解いてください。

正答：13

解説：3x−6=2x+7。両辺から2xを引き、6を足すとx=13。

測る力：math-equation:03 ／ 主評価は math-equation:03

構造：brackets_both_sides ／ 水準：application

## eq-design-03

(x−1)/3 ＋ (x＋2)/2 ＝4 を解いてください。

正答：4

解説：両辺を6倍すると2(x−1)+3(x+2)=24。5x+4=24からx=4。

測る力：math-equation:03 ／ 主評価は math-equation:03

構造：rational_denominator ／ 水準：application

## eq-design-04

2(x＋3)＝14 → 2x＋3＝14 → 2x＝11 → x＝5.5。最初に等式の意味が変わったのはどの操作ですか？

- 括弧を外す操作
- 両辺から3を引く操作
- 両辺を2で割る操作

正答：括弧を外す操作

解説：2をxだけでなく3にも掛けるため、2x+6=14が正しい式です。

測る力：math-equation:03 ／ 主評価は math-equation:03

構造：distribution_error ／ 水準：application

## eq-design-05

4x−3＝−11 の解をx＝−2と予想しました。代入した左辺の値と、この予想が正しいかを答えてください。

正答：{"left": "-11", "valid": true}

解説：4×(−2)−3=−11で、右辺と一致します。

測る力：math-equation:04 ／ 主評価は math-equation:04

構造：substitution_check ／ 水準：foundation

採点観点：左辺−11、左右一致を確認

## eq-design-06

1本80円の鉛筆を何本かと、120円の消しゴムを1個買い、合計520円でした。鉛筆の本数をxとして式を選んでください。

- 80x＋120＝520
- (80＋120)x＝520
- 80＋120x＝520

正答：80x＋120＝520

解説：鉛筆の代金80xと消しゴム代120の和が520です。

測る力：math-equation:05 ／ 主評価は math-equation:05

構造：fixed_plus_variable ／ 水準：application

## eq-design-07

40人を、3人ずつの班と5人ずつの班に分け、合計9班にします。全員がどちらかの班に一度だけ入るとき、この分け方は可能ですか？ 理由も答えてください。

正答：不可能

解説：5人班をxとすると5x+3(9−x)=40。x=6.5となるが班数は整数なので不可能です。

測る力：math-equation:06, math-equation:05 ／ 主評価は math-equation:06

構造：discrete_feasibility ／ 水準：transfer

採点観点：5x+3(9−x)=40等の立式、x=6.5等の矛盾を導く、班数は整数という条件に戻す

## eq-design-08

長さ180mの電車が長さ420mのトンネルを一定の速さで通ります。電車の全体がトンネル内に隠れている時間は12秒です。先頭がトンネルに入ってから最後尾が出るまで何秒ですか？

正答：30

解説：全体が隠れている間に先頭が進む距離は420−180=240m。速さは240÷12=20m/秒。入り始めから出終わるまでは420+180=600m進むので30秒です。

測る力：math-equation:06, math-equation:05 ／ 主評価は math-equation:06

構造：hidden_vs_full_crossing ／ 水準：transfer

## eq-design-09

大人券1000円、子ども券600円を、それぞれ1枚以上買って合計6600円でした。大人券の枚数は一つに決まりますか？

- 一つに決まらない
- 3枚に決まる
- 6枚に決まる

正答：一つに決まらない

解説：大人3枚・子ども6枚でも、大人6枚・子ども1枚でも6600円です。合計枚数などの条件が必要です。

測る力：math-equation:07, math-equation:05 ／ 主評価は math-equation:07

構造：underdetermined_constraints ／ 水準：transfer

## eq-design-10

x＋4＝x＋7 を満たす数xはありますか？

- ない
- x＝3だけ
- x＝−3だけ

正答：ない

解説：両辺からxを引くと4=7という成立しない等式になるため、解はありません。

測る力：math-equation:07, math-equation:01 ／ 主評価は math-equation:07

構造：contradiction ／ 水準：transfer

## eq-design-11

3(x＋2)＝3x＋6 を満たすxは？

- どの数でもよい
- x＝0だけ
- 当てはまる数はない

正答：どの数でもよい

解説：左辺を展開すると右辺と同じ式になり、どの数を代入しても成り立ちます。

測る力：math-equation:07, math-equation:01 ／ 主評価は math-equation:07

構造：identity ／ 水準：transfer

## eq-design-12

x＝4が2x＋c＝13の解になるように、定数cを決めてください。

正答：5

解説：xに4を代入すると8+c=13。c=5です。

測る力：math-equation:04, math-equation:03 ／ 主評価は math-equation:04

構造：inverse_construction ／ 水準：application
