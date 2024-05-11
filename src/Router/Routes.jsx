import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";
import Login from "../Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/",
          element: <Login/>,
        }
      ],
    },
  
  ]);

  export default router;