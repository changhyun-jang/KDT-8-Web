//promise 객체를 반환하는 함수정의
function promise1(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("promise상태는 fulfilled, then으로 연결,이때 flasg 값은 true");
    } else {
      reject("promis상태는 rejectd이먀,catch로 연결, flag값은 false");
    }
  });
}

promise1(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
