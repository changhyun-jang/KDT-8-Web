import { useEffect, useState } from "react";
import axios from "axios";

export default function Effectaxios() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getdata() {
      try {
        const response = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
        });
        setUsers([...users, ...response.data]);
      } catch (error) {
        console.log("데이터 가져오다 에러", error);
      }
    }
    getdata();
  }, []);
  useEffect(() => {
    return console.log("연결해제 완료");
  });

  useEffect(() => {
    console.log("유저정보 업데이트" + users.length);
  }, [users]);

  return (
    <div className="all">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
