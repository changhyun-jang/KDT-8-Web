import MyContext from "./product-context";
import { useState } from "react";

export default function ProductProvider(props) {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState("0");
  const [productItem, setProductItem] = useState({
    1: {
      id: 1,
      name: "이상해씨",
      value: 9000,
    },
    2: {
      id: 2,
      name: "파이리",
      value: 7000,
    },
    3: {
      id: 3,
      name: "꼬부기",
      value: 12000,
    },
  });
  return (
    <>
      <MyContext.Provider
        value={{
          cartItem,
          setCartItem,
          productItem,
          setProductItem,
          totalPrice,
          setTotalPrice,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
}
