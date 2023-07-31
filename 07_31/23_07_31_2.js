const a = [1, 2, 3];
const b = [4, 5];
//전개연산자 이전
const con = a.concat(b);
console.log(con);
//배열전개
const spread = [...a, ...b];
console.log(spread);
//객체 전개
const person = {
  name: "jang",
  age: 18,
};
console.log({ ...person });
//문자열 전개
const c = "hello";
console.log([...c]);

//rest 파라미터(항상 마지막에 사용해야함)
function get(a, ...rest) {
  console.log(rest);
}
get(10, 20, 30, 40, 50);

//클래스
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mew() {
    console.log("야옹");
  }
  myaha() {
    console.log("먀하");
  }
}

let cat1 = new Cat("나비", 100);
let cat2 = new Cat("냥냥", 120);
console.log(cat1);
cat1.mew();
cat2.mew();
cat1.myaha();
