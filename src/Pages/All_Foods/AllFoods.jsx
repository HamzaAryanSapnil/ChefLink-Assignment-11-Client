
import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";
import { useEffect, useState } from "react";

const AllFoods = () => {
  const [foodsData, setFoodsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allFoodItems", {
        withCredentials: true,
      })
      .then(({ data }) => {
        setFoodsData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className=" bg-gradient-to-r from-allFoodPageBgLeft to-allFoodPageBgRight p-4">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
         <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="my-10">
            <h1 className="text-5xl font-bold text-center">
              {" "}
              Order your favourite food{" "}
            </h1>
            <p className="text-center w-1/2 mx-auto my-4" >Welcome to ChefLink - Where Every Bite Tells a Story!
Explore our tantalizing menu featuring a delightful array of culinary creations. From savory starters to decadent desserts, embark on a journey of flavor with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-auto justify-items-center justify-center items-center gap-10 my-10">
            {foodsData.map((food) => (
              <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllFoods;
