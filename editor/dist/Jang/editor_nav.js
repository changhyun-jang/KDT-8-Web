import { ImBold } from "react-icons/im";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatStrikethrough } from "react-icons/md";
import "../scss/editor_nav.scss";
import React from "react";
export default function Editor_nav(props) {
    //효과 적용하기
    var applyEffect = function (effect) {
        var selection = document.getSelection();
        if (selection) {
            if (selection.rangeCount > 0) {
                var range = selection.getRangeAt(0);
                if (!range.collapsed) {
                    switch (effect) {
                        case "bold":
                            document.execCommand("bold", false);
                            break;
                        case "italic":
                            document.execCommand("italic", false);
                            break;
                        case "lineThrough":
                            document.execCommand("StrikeThrough", false);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    };
    return (React.createElement("div", { className: "navbar" },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        props.applyHeading(1);
                    } }, "H1")),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        props.applyHeading(2);
                    } }, "H2")),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        props.applyHeading(3);
                    } }, "H3")),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        props.applyHeading(4);
                    } }, "H4")),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        applyEffect("bold");
                    } },
                    React.createElement(ImBold, null))),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        applyEffect("italic");
                    } },
                    React.createElement(FiItalic, null))),
            React.createElement("li", null,
                React.createElement("button", { type: "button", onClick: function () {
                        applyEffect("lineThrough");
                    } },
                    React.createElement(MdOutlineFormatStrikethrough, null))))));
}
