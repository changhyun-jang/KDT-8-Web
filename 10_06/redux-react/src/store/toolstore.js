import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import loginSlice from "./login";

//createSlice() : 리듀서와 액션을 함께 생성하는함수
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0 },
//   reducers: {
//     increment(state, action) {
//       state.counter++;
//     },
//     decrement(state, action) {
//       state.counter--;
//     },
//     plus(state, action) {
//       console.log(action);
//       state.counter = state.counter + action.payload.ten;
//     },
//   },
// });

// const initLogin = { isLogin: false };
// const loginSlice = createSlice({
//   name: "login",
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

//configuerStore() : store
const store = configureStore({
  reducer: { counter: counterSlice, login: loginSlice },
});

export default store;
