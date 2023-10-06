import { useDispatch } from "react-redux";
import { DELETE } from "../store/store2";

export default function CartItem({ info, index }) {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch({ type: DELETE, index });
  };
  return (
    <>
      <div className={"cart" + index}>
        <div>name : {info.name} </div>
        <div>가격 : {info.value}원 </div>
        <button onClick={deleteItem}>제거</button>
      </div>
    </>
  );
}
