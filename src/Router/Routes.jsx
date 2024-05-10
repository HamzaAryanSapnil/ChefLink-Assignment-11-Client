import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";

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
  ]);

  export default router;