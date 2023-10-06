import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counter";
export default function Counter() {
  const number = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const plus = () => {
    dispatch(counterAction.plus({ ten: 10 }));
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={add}>증가</button>
      <button onClick={minus}>감소</button>
      <button onClick={plus}>+</button>
    </div>
  );
}
