import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";

const AllFoods = () => {
    const foodsData = useLoaderData();
    
    
    return (
        <div className=" bg-gradient-to-r from-allFoodPageBgLeft to-allFoodPageBgRight p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-auto justify-items-center justify-center items-center gap-10" >
                {foodsData.map((food) => (
                    <AllFoodsCard
                    key={food._id}
                    food={food}
                    ></AllFoodsCard>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;