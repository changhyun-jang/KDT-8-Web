import styled from "styled-components";
import { useState } from "react";
const _Btn = styled.button`
  width: 200px;
  height: 100px;
  font-size: 30px;
  background-color: ${(props) => props.backcolor};
  color: ${(props) => props.Textcolor};
`;

export default function ChangeColor() {
  const [backcolor, setBackcolor] = useState("blue");
  const [textcolor, setTextcolor] = useState("white");
  const change = () => {
    setBackcolor("red");
    setTextcolor("black");
  };
  return (
    <>
      <_Btn backcolor={backcolor} Textcolor={textcolor} onClick={change}>
        색상변경
      </_Btn>
    </>
  );
}
