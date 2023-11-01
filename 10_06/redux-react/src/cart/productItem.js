import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/carts";

export default function ProductItem(info) {
  const dispatch = useDispatch();
  const AddCart = () => {
    dispatch(cartAction.add({ item: info }));
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
