import ContentEditable from "react-contenteditable";
import { useState, useEffect, useRef } from "react";
interface Props {
  id: string;
  html: string;
  tag: string;
}
interface block {
  id: string;
  html: string;
  tag: string;
}
export default function EditableBlock(props: Props) {
  const f_block: block = {
    id: "unique-id",
    html: "",
    tag: "p",
  };
  const [block, setBlock] = useState(f_block);
  const contentEditable = useRef<HTMLElement>(null);
  useEffect(() => {
    setBlock({ id: props.id, html: props.html, tag: props.tag });
  }, [block]);

  function onChangeHandler(e: any) {
    setBlock({ ...block, html: e.target.value });
  }

  return <div></div>;
}
