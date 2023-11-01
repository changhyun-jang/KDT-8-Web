import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import carts from "./carts";

const store2 = configureStore({
  reducer: carts,
});

export default store2;
