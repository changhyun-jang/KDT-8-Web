import { useState, useEffect, useRef } from "react";
import "../scss/editor_body.scss";
import { PiListThin } from "react-icons/pi";
import React from "react";
export default function Editor_body(props) {
    var id = props.id, html = props.html, tagName = props.tagName, index = props.index, updateblock = props.updateblock, onDragStart = props.onDragStart, onDragEnter = props.onDragEnter, onDropEnd = props.onDropEnd, isSelected = props.isSelected;
    var _a = useState(html), content = _a[0], setContent = _a[1];
    var _b = useState(tagName), tag = _b[0], setTag = _b[1];
    var editorBodyRef = useRef(null); // 추가된 부분: 해당 블록의 ref
    useEffect(function () {
        updateblock({ id: id, html: content, tagName: tag });
    }, [content]);
    useEffect(function () {
        var _a;
        if (isSelected && editorBodyRef.current) {
            (_a = editorBodyRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isSelected]);
    function writecontent(e) {
        setContent(e.target.innerText);
    }
    var renderBlock = function () {
        switch (tagName) {
            case "h1":
                return (React.createElement("h1", { spellCheck: false, contentEditable: true, suppressContentEditableWarning: true, id: "".concat(index), onBlur: writecontent, ref: editorBodyRef },
                    React.createElement(PiListThin, { className: "moveicon" }),
                    html));
            case "h2":
                return (React.createElement("h2", { spellCheck: false, contentEditable: true, suppressContentEditableWarning: true, id: "".concat(index), onBlur: writecontent, ref: editorBodyRef },
                    React.createElement(PiListThin, { className: "moveicon" }),
                    html));
            case "h3":
                return (React.createElement("h3", { spellCheck: false, contentEditable: true, suppressContentEditableWarning: true, id: "".concat(index), onBlur: writecontent, ref: editorBodyRef },
                    React.createElement(PiListThin, { className: "moveicon" }),
                    html));
            case "h4":
                return (React.createElement("h4", { spellCheck: false, contentEditable: true, suppressContentEditableWarning: true, id: "".concat(index), onBlur: writecontent, ref: editorBodyRef }, html));
            default:
                return (React.createElement("div", { className: "widthicon" },
                    React.createElement(PiListThin, null),
                    React.createElement("div", { spellCheck: false, contentEditable: true, suppressContentEditableWarning: true, id: "".concat(index), onBlur: writecontent, ref: editorBodyRef }, html)));
        }
    };
    return (React.createElement("div", { className: "bodycontainer", draggable: true, onDragStart: function (e) { return onDragStart(e, index); }, onDragEnter: function (e) { return onDragEnter(e, index); }, onDragEnd: function (e) { return onDropEnd(e); }, onDragOver: function (e) { return e.preventDefault(); } }, renderBlock()));
}
