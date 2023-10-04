import { useContext } from "react";
import ProductItem from "./productItem";
import MyContext from "./product-context";

export default function ProductList() {
  const value = useContext(MyContext);

  return (
    <>
      <ProductItem info={value.productItem[1]} />
      <ProductItem info={value.productItem[2]} />
      <ProductItem info={value.productItem[3]} />
    </>
  );
}
