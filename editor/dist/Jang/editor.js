var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useState, useRef } from "react";
import React from "react";
import Editor_header from "./editor_header";
import Editor_body from "./editor_body";
import Editor_nav from "./editor_nav";
import "../scss/editor.scss";
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36);
};
var bodyBlockState = {
    id: uid(),
    html: "",
    tagName: "div",
};
export default function Edtior() {
    var _a = useState([bodyBlockState]), blocks = _a[0], setBlocks = _a[1];
    var _b = useState(null), selectedBlockIndex = _b[0], setSelectedBlockIndex = _b[1];
    var dragItem = useRef();
    var dragOverItem = useRef();
    useEffect(function () {
        console.log("state 변했어!");
    }, [blocks]);
    //태그적용시키기
    var applyHeading = function (headingLevel) {
        var currentContent = blocks.findIndex(function (block) { var _a, _b; return block.html === ((_b = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.anchorNode) === null || _b === void 0 ? void 0 : _b.textContent); });
        if (currentContent !== null && currentContent >= 0) {
            console.log(currentContent);
            var updatedBlocks = __spreadArray([], blocks, true);
            var headingTag = "h".concat(headingLevel);
            if (headingTag !== updatedBlocks[currentContent].tagName) {
                updatedBlocks[currentContent].tagName = headingTag;
            }
            else {
                updatedBlocks[currentContent].tagName = "div";
            }
            setBlocks(updatedBlocks);
        }
    };
    // 드래그 시작될 때 실행
    var dragStart = function (e, position) {
        dragItem.current = position;
        console.log("드래그시작", e.target.innerText);
    };
    // 드래그중인 대상이 위로 포개졌을 때
    var dragEnter = function (e, position) {
        dragOverItem.current = position;
        console.log("드래그도중 다른 요소와 포개짐", e.target.innerText);
    };
    //드랍 했을때
    var drop = function (e) {
        console.log(blocks);
        var newList = __spreadArray([], blocks, true);
        var dragItemValue = newList[dragItem.current];
        newList.splice(dragItem.current, 1);
        newList.splice(dragOverItem.current, 0, dragItemValue);
        dragItem.current = undefined;
        dragOverItem.current = undefined;
        setBlocks(newList);
    };
    //blocks의 html값 변경 함수
    function updateblock(updatedBlock) {
        var t_blocks = blocks;
        var index = blocks.map(function (b) { return b.id; }).indexOf(updatedBlock.id);
        var updatedBlocks = __spreadArray([], t_blocks, true);
        updatedBlocks[index] = __assign(__assign({}, updatedBlocks[index]), { tagName: updatedBlock.tagName, html: updatedBlock.html });
        setBlocks(updatedBlocks);
    }
    //엔터키 눌렀을때, 백스페이스키 눌렀을때
    var handleKeydown = function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            var newBlock = { id: uid(), html: "", tagName: "div" };
            setBlocks(__spreadArray(__spreadArray([], blocks, true), [newBlock], false));
            setSelectedBlockIndex(blocks.length);
        }
        else if (e.key === "Backspace") {
            if (e.target.innerText === "") {
                if (blocks.length > 1) {
                    var prev = e.target.parentNode.parentNode.previousSibling.children[0]
                        .children[1];
                    var num_1 = e.target.id;
                    setBlocks(blocks.filter(function (block, index) {
                        return index !== Number(num_1);
                    }));
                    if (prev) {
                        setCaretToEnd(prev);
                        prev.focus();
                    }
                }
            }
        }
    };
    //객체 삭제시 이전 객체의 내용 끝으로 커서를 설정하는 함수
    var setCaretToEnd = function (element) {
        //특정 범위를 지정하는 함수 document.createRange()
        var range = document.createRange();
        //현재 선택된 객체 가져오기
        var selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        console.log(range);
        selection.removeAllRanges();
        selection.addRange(range);
    };
    return (React.createElement("div", { className: "all", onKeyDown: handleKeydown },
        React.createElement(Editor_header, null),
        React.createElement(Editor_nav, { applyHeading: applyHeading }),
        React.createElement("div", { className: "container" }, blocks.map(function (block, index) {
            return (React.createElement(Editor_body, { key: index, index: index, id: block.id, html: block.html, tagName: block.tagName, updateblock: updateblock, onDragStart: dragStart, onDragEnter: dragEnter, onDropEnd: drop, isSelected: selectedBlockIndex === index }));
        }))));
}
