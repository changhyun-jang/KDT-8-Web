//배열
//배열에 const에 쓰는 이유 : 배열 자체는 변경안되지만, 원소는 접근하여 변경 가능
const lists = ["apple", "grape"];
//기존 방식
console.log(lists[0], lists[1]);
//구조 분해(순서중요)
[item1, item2] = lists;
console.log(item1, item2);
//교환
let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);

//객체
const person = {
  name: "므찌다",
  age: 25,
  gender: "M",
  //키값에 특수 문자가 들어간 경우 ""를 필수로 써야함(이는 나중에 접근시 배열 형태로 접근해야함)
  "j-1": "AMERICA",
};

console.log(person.name);
person.age = 23;
console.log(person.age);
console.log(person["name"]);
console.log(person["j-1"]);
person.city = "suwon";
console.log(person.city);
//만약 객체구조분해 전 먼저 변수명으로 사용이 되었다면
const city = " ";
//객체 구조분해(키값과 같아야함)
//:을 통해 새로운 변수명으로 지정
const { name, city: newCity, gender, key1 = "Hi" } = person;
console.log(name, city, gender, key1);
