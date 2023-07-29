//콜백함수 사용
// 메인함수, 함수타입 파라미터 맨마지막에 하나더 선언
// function mainFUnc(param1, param2, callback) {
//   const result = param1 + apamrma2;
//   callback(result);
//   //   function callback(Func[]console.log(result))
// }

// 1초마다 배경색이 변경되는 코드
// function red() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "red";
//       resolve();
//     }, 1000);
//   });
// }
// function orange() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "orange";
//       resolve();
//     }, 1000);
//   });
// }
// function yellow() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       resolve();
//     }, 1000);
//   });
// }
// function green() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "green";
//       resolve();
//     }, 1000);
//   });
// }
// function blue() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "blue";
//       resolve();
//     }, 1000);
//   });
// }

// async function exec() {
//   await red();
//   await orange();
//   await yellow();
//   await green();
//   await blue();
// }

//콜백지옥
// setTimeout(() => {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(() => {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

exec();
function color(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      resolve(color);
    }, 1000);
  });
}

async function exec() {
  await color("red");
  await color("orange");
  await color("yellow");
  await color("green");
  await color("blue");
}
