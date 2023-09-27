import { Link, useSearchParams } from "react-router-dom";
export const users = [
  {
    id: 1,
    name: "홍길동",
    comment: [
      {
        text: "안녕하세요.",
      },
    ],
  },
  {
    id: 2,
    name: "홍몽룡",
    comment: [
      {
        text: "뭘봐",
      },
    ],
  },
  {
    id: 3,
    name: "임꺽정",
    comment: [
      {
        text: "우하하",
      },
    ],
  },
];
export default function User() {
  //쿼리 스트링 값을 가져오는 것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  //   setTimeout(() => {
  //     setSearchParams({ mode: "Light" });
  //   }, 3000);
  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
