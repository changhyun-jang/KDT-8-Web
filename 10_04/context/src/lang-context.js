import React, { createContext } from "react";
// createContext({초기값})
// context생성
//Provider와Consumer두개의 리액트 컴포넌트를 반환
//어떤 값을 쓸거라 라고 선언하는 곳
const MyContext = createContext({
  language: "",
  setLanguage: () => {},
});

export default MyContext;
