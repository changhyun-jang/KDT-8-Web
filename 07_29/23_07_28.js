// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

const { functionTypeParam } = require("@babel/types");
const { func } = require("prop-types");

let product;
let price;
goMart();
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err);
  });

function goMart() {
  console.log("마트에 와서 어떤 음료를마실까?");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민끝!!");
      product = "제로 콜라";
      price = 3000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이부족해요");
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명 : ${product} , 가격:${price}`);
}

//Promise chaining
//체이닝 사용안한 경우
function add(n1, n2, callback) {
  setTimeout(() => {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(() => {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(() => {
    let result = n - 1;
    callback(result);
  }, 500);
}

add(4, 3, (x) => {
  console.log("1: ", x);
  mul(x, function (y) {
    console.log("2: ", y);
    sub(y, function (z) {
      donsole.log("3:", z);
    });
  });
});

// 프로미스 체이닝 사용한 경우
// 장점 : then메소드에서 연속해서 사용가능 :

function add(n1, n2, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}
