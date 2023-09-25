import { useState, useRef } from "react";
export default function Createlist() {
  const [inputwriter, setInputwriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setcomment] = useState([]);
  const [theme, setTheme] = useState("writer");
  const [searchword, setSearchword] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [flag, setflag] = useState(1);
  const myRef = useRef();

  const addComment = () => {
    const newComment = {
      writer: inputwriter,
      title: inputTitle,
    };
    if (newComment.writer === "" || newComment.title === "") {
      myRef.current.focus();
    } else {
      // 배열에 추가하기
      // [...첫반째배열 , 2번째 배열]
      setcomment([...comment, newComment]);
      setInputwriter("");
      setInputTitle("");
    }
  };
  const chooseTheme = (e) => {
    setTheme(e.target.value);
  };
  //검색시
  const search = () => {
    setflag(2);
    const arr = comment.filter((list) => {
      if (theme == "writer") {
        return list.writer.includes(searchword);
      } else {
        return list.title.includes(searchword);
      }
    });
    setSearchresult(arr);
  };

  return (
    <>
      <form>
        <label htmlFor="writer"> 작성자: </label>
        <input
          type="text"
          id="writer"
          value={inputwriter}
          onChange={(e) => setInputwriter(e.target.value)}
          ref={myRef}
        />
        <label htmlFor="title"> 제목: </label>
        {/* 코드의 가독성으로 인해 이벤트핸들러를 통해 전달하는것보다 익명함수내에 실행함수를 작성하는것을 추천 */}
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        ></input>
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <form>
        <select value={theme} onChange={chooseTheme}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          placeholder="검색어"
          value={searchword}
          onChange={(e) => setSearchword(e.target.value)}
        />
        <button type="button" onClick={search}>
          검색
        </button>
        <button type="button" onClick={() => setflag(1)}>
          전체
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {flag == 1
            ? comment.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{list.title}</td>
                    <td>{list.writer}</td>
                  </tr>
                );
              })
            : searchresult.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{list.title}</td>
                    <td>{list.writer}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}
