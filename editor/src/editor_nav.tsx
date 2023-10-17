import { ImBold } from "react-icons/im";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatStrikethrough } from "react-icons/md";
export default function Editor_nav() {
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

  //h1~h4태그 적용하기
  const applyh = () => {};

  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={applyh}>
            H1
          </button>
        </li>
        <li>
          <button type="button">H2</button>
        </li>
        <li>
          <button type="button">H3</button>
        </li>
        <li>
          <button type="button">H4</button>
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
