import { useState } from "react";
import React from "react";
import "../scss/header.scss";
export default function Editor_header() {
    //block의 내용
    var _a = useState(null), content = _a[0], setContent = _a[1];
    //block값 변경
    function writeTitle(e) {
        setContent(e.target.value);
    }
    var editor_head = {
        border: "1px solid black",
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { contentEditable: true, suppressContentEditableWarning: true, placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: writeTitle, style: editor_head }, content)));
}
