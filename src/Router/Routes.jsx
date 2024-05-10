import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";
import AuthLayout from "../Layouts/AuthLayout";

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
            }
        ]
    }
  ]);

  export default router;