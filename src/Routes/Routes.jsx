import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import { Home } from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
