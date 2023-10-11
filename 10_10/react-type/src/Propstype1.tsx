import React from "react";
import { useState, useRef } from "react";

interface Props {
  name: string | number;
  age?: number;
}

export default function PropsType1({ name, age }: Props) {
  const [count, setCount] = useState<number>(0);
  const myInput = useRef<HTMLInputElement>(null);
  const handlefocus = () => {
    myInput.current!.focus();
  };
  const onclick = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <>
      <h2>hello {name}</h2>
      <h4>{count}</h4>
      <input ref={myInput} />
      <button onClick={handlefocus}>클뤽</button>
      <form action="">
        <button type="submit" onClick={(e) => onclick(e)}>
          제출
        </button>
      </form>
    </>
  );
}
