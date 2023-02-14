import React from "react";

const colorfullMessage = (props) => {
  // console.log(props);
  // console.log("カラフルメッセージ");
  const { color, children } = props;
  const contentllStyle = {
    // color: props.color,
    // color: color,
    // 値とプロパティが同じ名称なら省略可能
    color,
    Fontsize: "18px"
  };
  // return <p style={contentllStyle}>{props.message}</p>;

  // タグの中で使われている要素はチルドレンという特別な関数を使って表示する事もできる
  return <p style={contentllStyle}>{children}</p>;
};
export default colorfullMessage;

// 関数定義の前にexportで書くことも可能だが
// その場合は分割代入｛｝をインポート側で記述すると同じように利用できる
// 細かい違いはあるが、エラー検出の点で見るとexport constで書いた方が良い
