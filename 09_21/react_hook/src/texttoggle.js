import { useState } from "react";
export default function Texttoggle() {
  const [visibility, setVisibility] = useState("block");
  const [text, setText] = useState("사라져라");
  const disapper = () => {
    if (text == "사라져라") {
      setText("보여라");
      setVisibility("none");
    } else {
      setText("사라져라");
      setVisibility("block");
    }
  };

  return (
    <>
      <button onClick={disapper}>{text}</button>
      <h1 style={{ display: visibility }}>내가 사라져볼게 얍!</h1>
    </>
  );
}
