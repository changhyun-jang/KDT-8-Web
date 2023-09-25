import { useState, useEffect } from "react";
function MyComponent(props) {
  const [text, setText] = useState("");
  const { number } = props;
  //   useEffect(() => {
  //     console.log("항상실행됩니다.");
  //   });
  useEffect(() => {
    console.log("생성될떄만 실행됩니다.");
  }, []);
  useEffect(() => {
    console.log("숫자가 바뀌었어요");
  }, [number]);

  return (
    <>
      <div>MyComponent {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumberState = () => {
    setNumber(() => number + 1);
  };
  const changeVisibleState = () => {
    setVisible(() => !visible);
  };
  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
