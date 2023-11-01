import CartItem from "./cartItem";
import { useSelector } from "react-redux";

export default function CartList() {
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  const total = carts.reduce((sum, carts) => sum + carts.info.value, 0);
  return (
    <>
      <h2>장바구니</h2>
      {carts.length === 0
        ? "장바구니가비어있습니다"
        : carts.map((item, index) => {
            return <CartItem info={item} index={index} />;
          })}
      <h5>가격 :{total}원 </h5>
    </>
  );
}
