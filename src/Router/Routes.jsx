import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Sign Up/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ],
    },
    {
        path: "/",
        element: <AuthLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            }
        ]
    }
  ]);

  export default router;