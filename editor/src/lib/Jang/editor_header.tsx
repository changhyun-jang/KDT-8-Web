import { useState, useEffect } from "react";
import React from "react";
import "../scss/header.scss";

export default function Editor_header() {
  //block의 내용
  const [content, setContent] = useState<string | null>(null);

  //block값 변경
  function writeTitle(e: any) {
    setContent(e.target.value);
  }

  const editor_head = {
    border: "1px solid black",
  };
  return (
    <>
      <h1
        contentEditable
        suppressContentEditableWarning
        placeholder="제목을 입력해주세요."
        onChange={writeTitle}
        style={editor_head}
      >
        {content}
      </h1>
    </>
  );
}
