import { createSlice } from "@reduxjs/toolkit";

const blockSlice = createSlice({
  name: "block",
  initialState: {
    block: [],
  },
  reducers: {
    addblock(state, action) {},
  },
});

export const blockAction = blockSlice.actions;
export default blockSlice.reducer;
