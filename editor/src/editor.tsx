import { useEffect, useState } from "react";
import Editor_header from "./editor_header";
import Editor_body from "./editor_body";
import Editor_nav from "./editor_nav";
export interface initialState {
  id: string;
  tagName: string;
  html: string;
}
const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

const bodyBlockState: initialState = {
  id: uid(),
  html: "",
  tagName: "div",
};

export default function Edtior() {
  const [blocks, setBlocks] = useState([bodyBlockState]);

  //blocks의 html값 변경 함수
  function updateblock(updatedBlock: initialState): void {
    const t_blocks = blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...t_blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tagName: updatedBlock.tagName,
      html: updatedBlock.html,
    };
    setBlocks(updatedBlocks);
  }

  //엔터키 눌렀을때, 백스페이스키 눌렀을때
  const handleKeydown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setBlocks([...blocks, bodyBlockState]);
    } else if (e.key === "Backspace") {
      if (e.target.innerText === "") {
        if (e.target.id > 0) {
          let num = e.target.id;
          setBlocks(
            blocks.filter((block, index) => {
              return index !== Number(num);
            })
          );
        }
      }
    }
  };

  return (
    <div onKeyDown={handleKeydown}>
      <Editor_header />
      <Editor_nav />
      <div className="container">
        {blocks.map((block, index) => {
          return (
            <Editor_body
              key={index}
              index={index}
              id={block.id}
              html={block.html}
              tagName={block.tagName}
              updateblock={updateblock}
            />
          );
        })}
      </div>
    </div>
  );
}
