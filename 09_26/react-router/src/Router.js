import { createBrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Header from "./Header";
// import About from "./About";
// import Not from "./404";
// import User from "./User";
// import Userdetail from "./UserDetail";
// import Redirect from "./Redirect";
import Home from "./Home.js";
import App from "./App.js";
import About from "./About.js";
import Redirect from "./Redirect.js";
import NotFound from "./404.js";
import Error from "./Error.js";
import User from "./User.js";
import UserDetail from "./UserDetail.js";
import Comment from "./Comment.js";
//버전2
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: ":userId",
        element: <UserDetail />,
        children: [
          {
            path: "comment",
            element: <Comment />,
          },
        ],
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
  },
]);

export default Router;

//버전 1
// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/user/:userId" element={<Userdetail />} />
//         <Route path="/redirect" element={<Redirect />} />
//         <Route path="*" element={<Not />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
