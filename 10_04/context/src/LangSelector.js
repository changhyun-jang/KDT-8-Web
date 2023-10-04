import { useContext } from "react";
import MyContext from "./lang-context";

export default function LanguageSelector() {
  //두번쨰 방법 useContext이용
  const value = useContext(MyContext);
  return (
    <div>
      {value.language == "ko" ? (
        <div>
          <h2>현재 선택된 언어: {value.language}</h2>
          <select
            value={value.language}
            onChange={(e) => value.setLanguage(e.target.value)}
          >
            <option value="ko">한글</option>
            <option value="en">영어</option>
          </select>
        </div>
      ) : (
        <div>
          <h2>now language : {value.language}</h2>
          <select
            value={value.language}
            onChange={(e) => value.setLanguage(e.target.value)}
          >
            <option value="ko">Korean</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </div>
  );

  //첫번쨰 방법 Consumer이용
  //   return (
  //     <>
  //       <MyContext.Consumer>
  //         {(value) => {
  //           return (
  //             <div>
  //               <h2>현재 선택된 언어: {value.language}</h2>
  //               <select
  //                 value={value.language}
  //                 onChange={(e) => value.setLanguage(e.target.value)}
  //               >
  //                 <option value="ko">한글</option>
  //                 <option value="jp">일본어</option>
  //                 <option value="en">영어</option>
  //               </select>
  //             </div>
  //           );
  //         }}
  //       </MyContext.Consumer>
  //     </>
  //   );
}
