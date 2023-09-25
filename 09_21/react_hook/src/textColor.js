import { useState } from "react";
export default function TextColor() {
  const [textcolor, setTextcolor] = useState("black");
  const [text, setText] = useState("검정색");
  const changeRed = () => {
    setTextcolor("red");
    setText("빨간색");
  };
  const changeBlue = () => {
    setTextcolor("blue");
    setText("파란색");
  };
  return (
    <>
      <h1 style={{ color: textcolor }}>{text} 색깔</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
}
