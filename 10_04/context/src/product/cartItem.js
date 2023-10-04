import { useContext } from "react";
import MyContext from "./product-context";

export default function CartItem(index) {
  console.log(index);
  const value = useContext(MyContext);
  const deleteItem = () => {
    value.cartItem.splice(index.index, 1);
    value.setCartItem(value.cartItem);
    value.setTotalPrice(Number(value.totalPrice) - index.info.info.value);
  };
  return (
    <>
      <div className={"cart" + index.index}>
        <div>name : {index.info.info.name} </div>
        <div>가격 : {index.info.info.value}원 </div>
        <button onClick={deleteItem}>제거</button>
      </div>
    </>
  );
}
