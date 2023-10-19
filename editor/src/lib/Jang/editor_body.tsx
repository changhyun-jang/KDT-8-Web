import { useState, useEffect, useRef } from "react";
import { initialState } from "./editor";
import "../scss/editor_body.scss";
import { PiListThin } from "react-icons/pi";
import React from "react";

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
  isSelected: boolean;
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
    isSelected,
  } = props;

  const [content, setContent] = useState(html);
  const [tag, setTag] = useState(tagName);
  const editorBodyRef = useRef<HTMLDivElement | null>(null); // 추가된 부분: 해당 블록의 ref

  useEffect(() => {
    updateblock({ id, html: content, tagName: tag });
  }, [content]);

  useEffect(() => {
    if (isSelected && editorBodyRef.current) {
      editorBodyRef.current?.focus();
    }
  }, [isSelected]);

  function writecontent(e: any) {
    setContent(e.target.innerText);
  }

  const renderBlock = () => {
    switch (tagName) {
      case "h1":
        return (
          <h1
            spellCheck={false}
            contentEditable
            suppressContentEditableWarning
            id={`${index}`}
            onBlur={writecontent}
            ref={editorBodyRef}
          >
            <PiListThin className="moveicon" />
            {html}
          </h1>
        );
      case "h2":
        return (
          <h2
            spellCheck={false}
            contentEditable
            suppressContentEditableWarning
            id={`${index}`}
            onBlur={writecontent}
            ref={editorBodyRef}
          >
            <PiListThin className="moveicon" />
            {html}
          </h2>
        );
      case "h3":
        return (
          <h3
            spellCheck={false}
            contentEditable
            suppressContentEditableWarning
            id={`${index}`}
            onBlur={writecontent}
            ref={editorBodyRef}
          >
            <PiListThin className="moveicon" />
            {html}
          </h3>
        );
      case "h4":
        return (
          <h4
            spellCheck={false}
            contentEditable
            suppressContentEditableWarning
            id={`${index}`}
            onBlur={writecontent}
            ref={editorBodyRef}
          >
            {html}
          </h4>
        );
      default:
        return (
          <div className="widthicon">
            <PiListThin />
            <div
              spellCheck={false}
              contentEditable
              suppressContentEditableWarning
              id={`${index}`}
              onBlur={writecontent}
              ref={editorBodyRef}
            >
              {html}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="bodycontainer"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={(e) => onDropEnd(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {renderBlock()}
      {/* <div
        spellCheck={false}
        contentEditable
        suppressContentEditableWarning
        id={`${index}`}
        onBlur={writecontent}
        style={editor_body}
        ref={editorBodyRef}
      >
        {html}
      </div> */}
    </div>
  );
}
