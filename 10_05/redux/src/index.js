//redux를 이용한 코드
import { createStore } from "redux";

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

//보통 type을 변수화
// const ADD = "ADD";
// const MINUS = "MINUS";

//데이터를 수정해주는 함수
//오류 찾기 어려움
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

//store는 데이터를 넣는 곳
//createStore : store생성, 리듀서함수 필수
// const countStore = createStore(countReducer);

// console.log(countStore);

//getState함수는 createStore로 생성된 저장소에서 최신 상태의 값을 반환할때 쓰는 메소드
// console.log(countStore.getState());

//subscribe()는 함수를 반환하며 데이터와 저장소가 변경될때마다 함수를 실행
// countStore.subscribe(() => (num.textContent = countStore.getState()));

// num.textContent = countStore.getState();
// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });
// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

//===============================================================
// 자바스크립트를 이용한 +1 , -1 코드

// let count = 0;
// num.textContent = count;

// add.addEventListener("click", () => {
//   count = count + 1;
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count = count - 1;
//   num.textContent = count;
// });

//===========================================================
//redux와 js만으로 todo 만들기

const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const input = document.querySelector("#writetodo");
      state.push(input.value);
      input.value = "";
      return state;
    case DELETE:
      return state.filter((item, index) => {
        return index !== Number(action.event.target.parentNode.name);
      });
    default:
      return state;
  }
};

const todoStore = createStore(todos);

//변경될떄마다 실행
todoStore.subscribe(() => {
  ul.innerHTML = "";
  let count = 0;
  for (let item of todoStore.getState()) {
    const li = document.createElement("li");
    li.innerHTML = `${item}`;
    li.name = `${count}`;
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", (e) => {
      todoStore.dispatch({ type: DELETE, event: e });
    });
    li.appendChild(btn);
    ul.appendChild(li);
    count++;
  }
});

addBtn.addEventListener("click", () => {
  todoStore.dispatch({ type: ADD });
});
