import { useContext } from "react";
import MyContext from "./product-context";

export default function ProductItem(info) {
  const value = useContext(MyContext);
  const AddCart = () => {
    value.setCartItem([...value.cartItem, info]);
    value.setTotalPrice(Number(value.totalPrice) + info.info.value);
  };
  return (
    <>
      <div className={info.info.id}>
        <div>name : {info.info.name} </div>
        <div>가격 : {info.info.value}원 </div>
        <button onClick={AddCart}>장바구니에 추가</button>
      </div>
    </>
  );
}
