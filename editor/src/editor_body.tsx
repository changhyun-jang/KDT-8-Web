import { useState, useEffect, useRef } from "react";
import { initialState } from "./editor";

interface initialState2 {
  index: number;
  id: string;
  tagName: string;
  html: string;
  updateblock: ({ id, html, tagName }: initialState) => void;
}

export default function Editor_body(props: initialState2) {
  const { id, html, tagName, index, updateblock } = props;

  const contentEditableRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState(html);
  const [tag, setTag] = useState(tagName);

  useEffect(() => {
    updateblock({ id: id, html: content, tagName: tag });
  }, [content]);

  function writecontent(e: any) {
    setContent(e.target.innerText);
  }

  const editor_body = {
    border: "0.5px solid black",
    marginTop: "2px",
  };

  return (
    <>
      <div
        contentEditable
        suppressContentEditableWarning
        id={`${index}`}
        className="draggable"
        placeholder="내용을 입력해주세요."
        onInput={writecontent}
        style={editor_body}
        ref={contentEditableRef}
      />
    </>
  );
}
