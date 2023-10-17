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

  //block을 업데이트 하는 함수
  function updatePageHandler(updatedBlock: initialBlock) {
    const t_blocks = blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...t_blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html,
    };
    setBlocks(updatedBlocks);
  }

  //block을 추가하는 함수
  function addBlockHandler(currentBlock: any) {
    const newBlock = { id: uid(), html: "", tag: "p" };
    const t_blocks = blocks;
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...t_blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    (currentBlock.ref.nextElementSibling as HTMLElement)?.focus();
  }

  //block을 제거하는 함수
  function deleteBlockHandler(currentBlock: any) {
    const previousBlock = currentBlock.ref.previousElementSibling;
    console.log(previousBlock);
    if (previousBlock) {
      const t_blocks = blocks;
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...t_blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      setCaretToEnd(previousBlock);
      previousBlock.focus();
    }
  }

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
    <div className="page">
      <h2>에디터입니다.</h2>
      {blocks.map((block, index) => {
        return (
          // 블록에 들어있는 값들 출력
          <EditableBlock
            key={index}
            id={block.id}
            tag={block.tag}
            html={block.html}
            updatePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
          />
        );
      })}
    </div>
  );
}
