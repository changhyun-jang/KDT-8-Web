import { useEffect, useState, useRef } from "react";
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
  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    console.log("state 변했어!");
  }, [blocks]);
  // 드래그 시작될 때 실행
  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
    console.log("드래그시작", e.target.innerText);
  };

  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
    console.log("드래그도중 다른 요소와 포개짐", e.target.innerText);
  };

  //드랍 했을때
  const drop = (e: any) => {
    console.log(blocks);
    const newList = [...blocks];
    const dragItemValue = newList[dragItem.current!];
    newList.splice(dragItem.current!, 1);
    newList.splice(dragOverItem.current!, 0, dragItemValue);
    dragItem.current = undefined;
    dragOverItem.current = undefined;
    setBlocks(newList);
  };

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
      const newBlock: initialState = { id: uid(), html: "", tagName: "div" };
      setBlocks([...blocks, newBlock]);
    } else if (e.key === "Backspace") {
      const prev = e.target.previousSibling;
      if (e.target.innerText === "") {
        if (e.target.id > 0) {
          let num = e.target.id;
          setBlocks(
            blocks.filter((block, index) => {
              return index !== Number(num);
            })
          );
          if (prev) {
            setCaretToEnd(prev);
            prev.focus();
          }
        }
      }
    }
  };

  //객체 삭제시 이전 객체의 내용 끝으로 커서를 설정하는 함수
  const setCaretToEnd = (element: any) => {
    //특정 범위를 지정하는 함수 document.createRange()
    const range = document.createRange();
    //현재 선택된 객체 가져오기
    const selection: any = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    element.focus();
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
              onDragStart={dragStart}
              onDragEnter={dragEnter}
              onDropEnd={drop}
            />
          );
        })}
      </div>
    </div>
  );
}
