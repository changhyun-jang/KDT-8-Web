import ContentEditable from "react-contenteditable";
import { useState, useEffect, useRef } from "react";

// props 인터페이스
interface Props {
  id: string;
  html: string;
  tag: string;
  updatePage: (block: { id: string; html: string; tag: string }) => void;
  addBlock: (block: { id: string; ref: any }) => void;
  deleteBlock: (block: { id: string; ref: any }) => void;
}

const style = {
  margin: "5px",
  border: "1px solid black",
};

let data = "";
let prev = "";
export default function EditableBlock(props: Props) {
  const { id, html, tag, updatePage, addBlock, deleteBlock } = props;
  // 현재 블록의 상태
  const [block, setBlock] = useState({ html: html, tag: tag });
  //내용 backup
  const [htmlBackup, setHtmlBackup] = useState<string | null>(null);
  //이전에 누른 키기억
  const [previousKey, setPreviousKey] = useState<string>("");
  // 현재 블록의 Ref
  const contentEditable = useRef<any>();

  // 처음 렌더링할때 전달받은 값들 넣기
  useEffect(() => {
    setBlock({ html: html, tag: tag });
  }, []);

  //값이 변경될때마다 실행
  useEffect(() => {
    const htmlChanged = block.html !== html;
    const tagChanged = block.tag !== tag;
    if (htmlChanged || tagChanged) {
      updatePage({ id, html: block.html, tag: block.tag });
    }
    data = block.html;
    prev = previousKey;
  }, [block, id, html, tag, updatePage, previousKey]);

  //블록 안의 값 변경
  function onChangeHandler(e: any) {
    setBlock({ ...block, html: e.target.value });
  }

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "/") {
      setHtmlBackup(data);
    }
    if (e.key === "Enter") {
      if (prev !== "Shift") {
        e.preventDefault();
        addBlock({ id, ref: contentEditable.current });
      }
    }
    if (e.key === "Backspace" && !data) {
      e.preventDefault();
      deleteBlock({ id, ref: contentEditable.current });
    }
    if (e.key === "Process") {
    }
    setPreviousKey(e.key);
  };
  return (
    <>
      <ContentEditable
        className="Block"
        innerRef={contentEditable}
        html={block.html}
        tagName={block.tag}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        style={style}
      />
      {htmlBackup}
      {previousKey}
    </>
  );
}
