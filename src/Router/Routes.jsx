import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Sign Up/Signup";
import MyOrderedFoods from "../Pages/My Ordered Foods/MyOrderedFoods";
import MyAddedFoods from "../Pages/My Added Foods/MyAddedFoods";
import AddFood from "../Pages/Add Food/AddFood";

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
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
        {
          path: "/my_added_foods",
          element: <MyAddedFoods/>,
        },
        {
          path: "/add_food",
          element: <AddFood/>,
        },
        {
          path: "/my_ordered_foods",
          element: <MyOrderedFoods/>,
        },
      ],
    },
  
  ]);

  export default router;