import React, { useState } from "react";
import EditableBlock from "./editableBlock";
// 블럭의 유형
interface initialBlock {
  id: string;
  html: string;
  tag: string;
}
export default function EditablePage() {
  //블록마다 고유한 ID가 필요하므로 새블록을 초기화하는데 사용할 수 있는 함수
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // block하나하나의 객체
  const initialBlock = { id: uid(), html: "", tag: "p" };

  //block들을 담을 state
  const [blocks, setBlocks] = useState([initialBlock]);

  return (
    <div className="page">
      <h2>에디터입니다.</h2>
      {blocks.map((block, index) => {
        return (
          // 블록에 들어있는 값들 출력
          <div key={index} id={block.id}>
            Tag:{block.tag}, Content:{block.html}
          </div>
        );
      })}
    </div>
  );
}
