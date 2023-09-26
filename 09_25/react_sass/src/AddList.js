import styled from "styled-components";
import { useEffect, useState } from "react";

const _Input = styled.input`
  width: 200px;
  height: 40px;
`;
const _Btn = styled.button`
  padding: 14px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
`;
const _List = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 200px;
  overflow-y: auto;
  border: 1px solid black;
`;

const _Item = styled.div`
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  height: 35px;
  width: 100%;
`;
export default function AddList() {
  const [list, setList] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const addList = () => {
    setList([...list, inputvalue]);
    setInputvalue("");
    console.log(list);
  };
  return (
    <>
      <_Input
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      ></_Input>
      <_Btn onClick={addList}>Add</_Btn>
      <_List>
        {list.map((item) => {
          return <_Item>{item}</_Item>;
        })}
      </_List>
    </>
  );
}
