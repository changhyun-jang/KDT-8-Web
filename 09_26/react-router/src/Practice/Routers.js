import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Student from "./sutdent";
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student/:name",
    element: <Student />,
  },
]);

export default Routers;
