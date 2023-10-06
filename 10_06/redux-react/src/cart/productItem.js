import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../store/store2";

export default function ProductItem(info) {
  const dispatch = useDispatch();
  const AddCart = () => {
    dispatch({ type: ADD, info });
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
