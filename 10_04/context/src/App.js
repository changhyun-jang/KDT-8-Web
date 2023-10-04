import { useState } from "react";
import ProductProvider from "./product/productProvider";
import ProductList from "./product/productList";
import CartList from "./product/cartList";

function App() {
  return (
    <ProductProvider>
      <ProductList />
      <CartList />
    </ProductProvider>
  );
}

export default App;
