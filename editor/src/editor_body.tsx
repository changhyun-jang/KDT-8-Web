import { useState, useEffect, useRef } from "react";
import { initialState } from "./editor";

interface initialState2 {
  children?: React.ReactNode;
  index: number;
  id: string;
  tagName: string;
  html: string;
  updateblock: ({ id, html, tagName }: initialState) => void;
  onDragStart: (e: any, position: any) => void;
  onDragEnter: (e: any, position: any) => void;
  onDropEnd: (e: any) => void;
}

export default function Editor_body(props: initialState2) {
  const {
    id,
    html,
    tagName,
    index,
    updateblock,
    onDragStart,
    onDragEnter,
    onDropEnd,
  } = props;

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
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={(e) => onDropEnd(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        spellCheck={false}
        contentEditable
        suppressContentEditableWarning
        id={`${index}`}
        onBlur={writecontent}
        style={editor_body}
        ref={contentEditableRef}
      >
        {html}
      </div>
    </div>
  );
}
