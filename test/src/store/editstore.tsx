import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./blocks";

const store = configureStore({
  reducer: { block: blockSlice },
});

export default store;
