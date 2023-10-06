import { createStore } from "redux";

export const ADD = "ADD";
export const DELETE = "DELETE";

const carts = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.info.info];
    case DELETE:
      return state.filter((item, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
};

const store2 = createStore(carts);

export default store2;
