import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";
import Main from "../Layouts/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <h1>Not Found</h1>,
      children: [
        {
          path: "/",
          element: <h1>Home Page</h1>,
        }
      ],
    },
  ]);

  export default router;