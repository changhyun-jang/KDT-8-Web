import { ImBold } from "react-icons/im";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatStrikethrough } from "react-icons/md";
import "../scss/editor_nav.scss";
import React from "react";

export default function Editor_nav(props: any) {
  //효과 적용하기
  const applyEffect = (effect: string) => {
    const selection = document.getSelection();
    if (selection) {
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
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

  return (
    <div className="navbar">
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              props.applyHeading(1);
            }}
          >
            H1
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.applyHeading(2);
            }}
          >
            H2
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.applyHeading(3);
            }}
          >
            H3
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.applyHeading(4);
            }}
          >
            H4
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              applyEffect("bold");
            }}
          >
            <ImBold />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              applyEffect("italic");
            }}
          >
            <FiItalic />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              applyEffect("lineThrough");
            }}
          >
            <MdOutlineFormatStrikethrough />
          </button>
        </li>
      </ul>
    </div>
  );
}
