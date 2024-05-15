import { useEffect, useState } from "react";
import BannerBtnRoundedFull from "../../../Components/Banner_Btn/BannerBtnRoundedFull";
import { Link } from "react-router-dom";
import Top_Foods_Cards from "./Top_Foods_Cards/Top_Foods_Cards";
import axios from "axios";

const TopFoodsSection = () => {
  // get data from all food

  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    axios
      // .get("https://assignment-11-server-seven-pi.vercel.app/allFoodItems")
      .get(
        "https://assignment-11-server-seven-pi.vercel.app/allFoodItems?sort=purchaseCount&order=desc&limit=6"
      )
      .then((res) => setTopFoods(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-14 w-full p-4 space-y-10">
      <div className="md:w-1/2 mx-auto gap-y-4 flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-black">Top Selling Foods</h1>
        <p className="text-lg text-justify md:text-center">
          Discover our top-selling culinary treasures! Dive into a world of
          irresistible flavors and culinary excellence with our curated
          selection of best-selling food items. From crowd-pleasing classics to
          innovative culinary creations, each dish is a testament to quality and
          taste. Join us in celebrating the art of gastronomy as we present our
          most-loved creations that keep our customers coming back for more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto justify-items-center justify-center items-center gap-10">
        {topFoods.map((topFood) => (
          <Top_Foods_Cards
            key={topFood._id}
            topFood={topFood}
          ></Top_Foods_Cards>
        ))}
      </div>
      <div className="w-full flex justify-center items-center ">
        <Link to={"/all_foods"}>
          <BannerBtnRoundedFull>See All_Foods</BannerBtnRoundedFull>
        </Link>
      </div>
    </div>
  );
};

export default TopFoodsSection;
