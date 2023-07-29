//1번
// call("kim")
//   .then(function (result) {
//     console.log(result + "반가워");
//     return back();
//   })
//   .then(function (result) {
//     console.log(result + "을 실행했구나");
//     return hell();
//   })
//   .then(function (result) {
//     console.log("여기는" + result);
//   });

//2번
// exec();

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

//2
// async function exec() {
//   let user = await call("kim");
//   console.log(user + "반가워");
//   let back2 = await back();
//   console.log(back2 + "을 실행했구나");
//   let hell2 = await hell();
//   console.log("여기는" + hell2);
// }
