// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// import { StrictMode } from "react";
// import ReactDom from "react-dom";

// import App from "./App";
// const rootElement = document.getElementById("root");
// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// reactを使う時の準備として、リアクトを読み込む処理が最初に必要
import React from "react";
import reactDom from "react-dom";

// Reactでは関数の中でHTMLタグを書く
// 出力する内容はreturnの先にHTMLと似たような構造で記述する　重要
// ただ複数のHTMLタグを表示する場合は（）を使って記述する必要がある
// 更にHTMLに何かを出力（文字とか）する場合は別のタグで囲む必要がある
// Divタグで囲むとHTMLの入れ子構造が変わってしまうため、インポートしている”React”のFragmentを
// タグのように使う事でエラー無く表示できる
// 更に現在はこのフラグメントは＜＞と＜/＞のように省略できる

// ただこのままだとかなり長くなるので、あくまでこのindexJSファイルは
// HTMLに中身を入れるための、空の箱として使い
// 中身は別のファイル上で処理する
// const App = () => {
//   return (
//     // <div>
//     // <React.Fragment>
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか</p>
//     </>
//     //</React.Fragment>
//   );
// };

import App from "./notation";

// Appを画面に反映させる
// Render関数を使うときの引数
// 一つ目の引数に関数の閉じタグを入れる　コンポーネントにレンダリングするとか言われる
// 二つ目の引数にどこに反映させるかを指定する　JSの時と同じでID指定している部分

reactDom.render(<App />, document.getElementById("root"));

// コンポーネント命名規則
// [正しい例]

// App
// SomeComponent

// [エラーとなる例]

// app
// someComponent

// [エラーにはならないが推奨されない例]

// Some_component
// Some_Component

// 先頭が大文字で始まり、単語の区切りを大文字とする変数名の付け方を「パスカルケース」と呼びます。
// Reactのコンポーネントはこのパスカルケースで命名しましょう！

// Props
// こんぽーねんと
// ⇒画面要素の１単位、全画面サイズから１つのテキストボックスまで様々

// Props
// ⇒コンポーネントに渡される引数的なもの

// State
// 可変の状態
// ⇒各コンポーネントが持つ状態、Stateが変更されると再レンダリングされる
// 動的に変わるものを使う時に必要

// どういう処理順？
// 基本的に上から処理されていく
