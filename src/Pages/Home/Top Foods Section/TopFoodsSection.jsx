import { useEffect, useState } from "react";
import BannerBtnRoundedFull from "../../../Components/Banner Btn/BannerBtnRoundedFull";
import { Link } from "react-router-dom";
import Top_Foods_Cards from "./Top Foods Cards/Top_Foods_Cards";

const TopFoodsSection = () => {
  // get data from all food
  const [topFoods, setTopFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allFoodItems")
      .then((res) => res.json())
      .then((data) => setTopFoods(data));
  }, []);

  return (
    <div className="my-14 w-full p-4 space-y-10">
      <div className="md:w-1/2 mx-auto gap-y-4 flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-black">Top Foods</h1>
        <p className="text-lg text-justify md:text-center">
          Indulge in a symphony of flavors with our top food items showcase!
          From savory delights to mouthwatering treats, explore a culinary
          journey curated just for you. Savor the essence of each dish as we
          bring you the finest selection of gastronomic delights to tantalize
          your taste buds and elevate your dining experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto justify-items-center justify-center items-center gap-4" >
        {topFoods.slice(0, 6).map((topFood) => (
          
                <Top_Foods_Cards key={topFood._id} ></Top_Foods_Cards>
         
        ))}

        
        
      </div>
      <div className="w-full flex justify-center items-center " >
        <Link to={"/all_foods"} >
        <BannerBtnRoundedFull>See All</BannerBtnRoundedFull>
        </Link>
        </div>
    </div>
  );
};

export default TopFoodsSection;
