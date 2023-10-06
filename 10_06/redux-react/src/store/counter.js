import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    plus(state, action) {
      console.log(action);
      state.counter = state.counter + action.payload.ten;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
