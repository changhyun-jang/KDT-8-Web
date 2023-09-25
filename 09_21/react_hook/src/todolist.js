import { useEffect, useState } from "react";
export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [donelist, setDonelist] = useState([]);
  const [checked, setChecked] = useState(false);
  const addTodo = () => {
    if (todolist.length < 10) {
      const newData = {
        id: Date.now(),
        value: todo,
        checked: false,
      };

      setTodolist([...todolist, newData]);
      setTodo("");
    } else {
      alert("할일이 너무 많아여!");
    }
  };

  const deletedone = () => {
    const result = todolist.filter((list) => {
      return list.checked == false;
    });
    setTodolist(result);
  };

  const toggelTodo = (id) => {
    const result = todolist.map((todo) => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });
    setTodolist(result);
  };
  return (
    <>
      <input
        placeholder="할 일 입력..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={addTodo}>추가</button>
      <ul>
        {todolist.map((list) => {
          return (
            <li id={list.id}>
              <input
                type="checkbox"
                checked={list.checked}
                onChange={(e) => {
                  toggelTodo(list.id);
                }}
              />
              {list.value}
            </li>
          );
        })}
      </ul>
      <button onClick={deletedone}>완료된 할 일 삭제 </button>
    </>
  );
}
