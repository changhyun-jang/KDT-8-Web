import { Outlet, useParams, useSearchParams } from "react-router-dom";
export default function Student() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const name2 = searchParams.get("name");

  return (
    <>
      <div>학생의 이름은 {name}입니다.</div>

      {name2 ? <div>실제이름은 {name2}</div> : null}
    </>
  );
}
