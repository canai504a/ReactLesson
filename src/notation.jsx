import react, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  // 通過するよ
  console.log("通過①");
  // const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   Fontsize: "18px"
  //   // font-sizeではなくFontsize
  //   // React上での記法
  //   // 扱うスタイルだけ紹介する形になる
  // };

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    setNum(num - 1);
  };

  const [num, setNum] = useState(0);
  const [faseShowFlag, setfaseShowFlag] = useState(false);

  const onClickshitchShowFlag = () => {
    setfaseShowFlag(!faseShowFlag);
  };

  const onClickreset = () => {
    setNum(0);
    setfaseShowFlag(false);
  };
  // 3の倍数だけ表示
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // 処理の回数がものすごい回数になってしまう
        // setfaseShowFlag(true);
        faseShowFlag || setfaseShowFlag(true);
      } else {
        faseShowFlag && setfaseShowFlag(false);
      }
    }
  }, [num]);
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     // 処理の回数がものすごい回数になってしまう
  //     // setfaseShowFlag(true);
  //     faseShowFlag || setfaseShowFlag(true);
  //   } else {
  //     faseShowFlag && setfaseShowFlag(false);
  //   }
  // }
  // ステートが更新されると最初から処理が走る
  // 処理が複雑になるとよく通る
  // ここで使えるのがuseEfect
  // 第二引数に配列をとる
  // []からの配列を渡すと最初の１回だけ処理の実行が可能
  // 画面を表示した時にデータをとるとか。
  // numと値をとると、numの変化が起きた時だけ処理を実行する事が可能

  return (
    <>
      {/* CSSはインラインのようにタグの中で指定する
    最初の｛｝は確実に必要で、CSSをそのまま記述する場合は更に｛｝が必要
    場所を分けて記述する場合は変数で指定して、Rertunの上で記述 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p style={contentStyle}>お元気ですか</p> */}
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>

      {/* <ColorfullMessage color="pink" message="元気です" /> */}
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      {/* イベントやスタイルの扱い */}
      {/* HTMLタグの中でイベント発生の条件（オンクリック）をそのまま記述できる
      今回はボタンを押したらアラートが表示されるような動作を実装したい
      ボタン押した時の動作　→　関数
      returnの上で関数の処理を記述する */}
      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickCountDown}>カウントダウン</button>
      <br />
      <button onClick={onClickshitchShowFlag}>on/off</button>
      <br />
      <button onClick={onClickreset}>リセット</button>
      <p>{num}</p>
      {faseShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

// このままだとこのApp関数はこのファイル上でしか利用できないため
// ここ以外の場所でApp関数を利用できるように指定する
export default App;
