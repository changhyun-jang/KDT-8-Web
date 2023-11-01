import { useDispatch } from "react-redux";
import { DELETE } from "../store/store2";
import { cartAction } from "../store/carts";

export default function CartItem({ info, index }) {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartAction.delete({ index: index }));
  };
  return (
    <>
      <div className={"cart" + index}>
        <div>name : {info.info.name} </div>
        <div>가격 : {info.info.value}원 </div>
        <button onClick={deleteItem}>제거</button>
      </div>
    </>
  );
}
