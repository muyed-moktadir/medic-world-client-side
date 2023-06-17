import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import { Home } from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment";

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
        path:"/appointment",
        element:<Appointment/>
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
