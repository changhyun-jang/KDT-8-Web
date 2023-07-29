//async await

//구조
//함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 await()붙이기(기다려줄것)
// async, await은 항상 같이 쓰기

let product;
let price;
exec();

function goMart() {
  console.log("마트에 와서 어떤 음료를마실까?");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민끝!!");
      product = "제로 콜라";
      price = 2000;
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

async function exec() {
  goMart();
  await pickDrink();
  pay();
}
