import { useContext, useEffect, useState } from "react";
import MyContext from "./lang-context";

export default function ThemeSelector() {
  const [Theme, setTheme] = useState("light");
  const value = useContext(MyContext);
  useEffect(() => {
    document.body.className = Theme;
  }, [Theme]);
  return (
    <>
      {value.language === "ko" ? (
        <div>
          <h2>테마 : {Theme}</h2>
          <select value={Theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">다크</option>
            <option value="light">화이트</option>
          </select>
        </div>
      ) : (
        <div>
          <h2>Theme : {Theme}</h2>
          <select value={Theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">dark</option>
            <option value="light">white</option>
          </select>
        </div>
      )}
    </>
  );
}
