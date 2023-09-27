import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <>
      <div>
        <h1>
          <Link to="/">ReactRouter 실습</Link>
        </h1>
        <ul>
          <li>
            <Link to="/student/kdt">학생KDT</Link>
          </li>
          <li>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li>
            <Link to="/student/new?name=kdt3rd">searchParams</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
