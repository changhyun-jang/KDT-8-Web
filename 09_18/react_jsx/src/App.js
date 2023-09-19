import "../src/App.css";
function App() {
  const name = "로이";
  const animal = "강아쥐";
  const style = {
    textDecoration: "underline",
  };
  const title = "졸려";

  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  let namelist = users.map((user, index) => {
    return user.age > 20 && user.name ? user.name : "";
  });

  return (
    <>
      {/* {<div>
        이것은 div입니다.
        <h3>이것은 div안에 있는 h3태그입니다.</h3>
        <div>
          {3 + 5 == 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>}
        </div>
      </div>} */}
      {/* {<h2>
        제 반려 동물의 이름은 <span style={style}>{name}</span>입니다. <br />
        <span style={style}>{name}</span>는 <span style={style}>{animal}</span>
        입니다.
      </h2>} */}
      {/* {<div className="test">{title}</div>
      <div className="input">
        아이디:
        <input></input>
      </div>
      <div className="input">
        비밀번호: <input></input>
      </div>} */}
      {/* {<div className="align">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>} */}

      {/* {namelist.map((user, index) => {
        return user != "" ? <div>-{user}</div> : "";
      })} */}
      {users
        .filter((user) => {
          return user.age > 20;
        })
        .map((user, index) => {
          return <div>- {user.name}</div>;
        })}
    </>
  );
}

export default App;
