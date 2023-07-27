// 하나의 모듈파일에 여러개 만들기

const a = "a변수";
const b = "b변수";

module.exports = { a: a, b: b };

//하나의 모듈파일에 하나 만들기

function connect() {
  return a + b;
}

module.exports = connect;
