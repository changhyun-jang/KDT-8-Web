import { useContext } from "react";
import MyContext from "./product-context";
import CartItem from "./cartItem";

export default function CartList() {
  const value = useContext(MyContext);
  return (
    <>
      <h2>장바구니</h2>
      {value.cartItem.length === 0
        ? "장바구니가비어있습니다"
        : value.cartItem.map((item, index) => {
            return <CartItem info={item} index={index} hello={1} />;
          })}
      <h5>가격 : {value.totalPrice}원 </h5>
    </>
  );
}
