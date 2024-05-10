import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <h1>Not Found</h1>,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ],
    },
  ]);

  export default router;