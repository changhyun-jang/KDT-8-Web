import CartItem from "./cartItem";
import { useSelector } from "react-redux";

export default function CartList() {
  const carts = useSelector((state) => state);

  return (
    <>
      <h2>장바구니</h2>
      {carts.length === 0
        ? "장바구니가비어있습니다"
        : carts.map((item, index) => {
            return <CartItem info={item} index={index} />;
          })}
      <h5>가격 :원 </h5>
    </>
  );
}
