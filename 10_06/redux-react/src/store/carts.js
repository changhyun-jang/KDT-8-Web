import { createSlice } from "@reduxjs/toolkit";

export const ADD = "ADD";
export const DELETE = "DELETE";

const carts = createSlice({
  name: "cart",
  initialState: { carts: [] },
  reducers: {
    add(state, action) {
      const findname = state.carts.findIndex(
        (element) => element.name === action.payload.item.name
      );
      if (findname !== -1) {
        const newState = [...state.carts];
      } else {
        state.carts = [...state.carts, { ...action.payload.item, quantity: 1 }];
      }
    },
    delete(state, action) {
      state.filter((item, index) => {
        return index !== action.payload.index;
      });
    },
  },
});
export const cartAction = carts.actions;
export default carts.reducer;
