// import { useState } from "react";
import ProductProvider from "./product/productProvider";
import ProductList from "./product/productList";
import CartList from "./product/cartList";
import "./Theme.css";
import LanguageProvider from "./LangProvider";
import LanguageSelector from "./LangSelector";
import ThemeSelector from "./ThemeSelector";

function App() {
  return (
    <ProductProvider>
      <ProductList />
      <CartList />
    </ProductProvider>
  );
}

export default App;
