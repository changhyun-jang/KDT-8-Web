import { useContext } from "react";
import MyContext from "./lang-context";

export default function ThemeSelector() {
  const value = useContext(MyContext);
  return (
    <>
      {" "}
      {value.language == "ko" ? (
        <div>
          <h2>테마 : {value.Theme}</h2>
          <select
            value={value.Theme}
            onChange={(e) => value.setTheme(e.target.value)}
          >
            <option value="dark">다크</option>
            <option value="light">화이트</option>
          </select>
        </div>
      ) : (
        <div>
          <h2>Theme : {value.Theme}</h2>
          <select
            value={value.Theme}
            onChange={(e) => value.setTheme(e.target.value)}
          >
            <option value="dark">dark</option>
            <option value="light">white</option>
          </select>
        </div>
      )}
    </>
  );
}
