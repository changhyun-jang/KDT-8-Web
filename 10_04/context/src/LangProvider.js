import MyContext from "./lang-context";
import { useState } from "react";

export default function LanguageProvider(props) {
  const [language, setLanguage] = useState("ko");
  const [Theme, setTheme] = useState("light");

  return (
    <>
      {Theme == "light" ? (
        <div>
          <MyContext.Provider
            value={{ language, setLanguage, Theme, setTheme }}
          >
            {props.children}
          </MyContext.Provider>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "100vh",
            margin: "0",
          }}
        >
          <MyContext.Provider
            value={{ language, setLanguage, Theme, setTheme }}
          >
            {props.children}
          </MyContext.Provider>
        </div>
      )}
    </>
  );
}
