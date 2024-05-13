import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Not Found/NotFound";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Sign Up/Signup";
import MyOrderedFoods from "../Pages/My Ordered Foods/MyOrderedFoods";
import MyAddedFoods from "../Pages/My_Added_Foods/MyAddedFoods";
import AllFoods from "../Pages/All_Foods/AllFoods";
import Food_Details from "../Pages/Food_Details/Food_Details";
import AddFood from "../Pages/Add_Food/AddFood";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import FoodUpdate from "../Pages/Food_Update/FoodUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/all_foods",
        element: <AllFoods />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/my_added_foods",
        element: (
          <PrivateRoute>
            <MyAddedFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/add_food",
        element: <AddFood />,
      },
      {
        path: "/my_ordered_foods",
        element: <MyOrderedFoods />,
      },
      {
        path: "/food_details/:id",
        element: <Food_Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allFoodItems/${params.id}`),
      },
      {
        path: "/food_update/:id",
        element: (
          <PrivateRoute>
            <FoodUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allFoodItems/${params.id}`),
      },
    ],
  },
]);

export default router;
