import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";
import bannerImg from "../../assets/hydrabadi_biriyani.jpg";
import { useEffect, useState } from "react";
import BannerBtnRoundedFull from "../../Components/Banner_Btn/BannerBtnRoundedFull";
import { Link } from "react-router-dom";
import BannerBtn from "../../Components/Banner_Btn/BannerBtn";

const AllFoods = () => {
  const [foodsData, setFoodsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [foodItemsPerPage, setFoodItemsPerPage] = useState(6);
  const { count } = totalCount;
  const numberOfPages = Math.ceil(count / foodItemsPerPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  // const page = [...Array(numberOfPages).keys()];
  // console.log(page);
  console.log(pages);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-seven-pi.vercel.app/allFoodItems?page=${currentPage}&size=${foodItemsPerPage}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        setFoodsData(data);
        setIsLoading(false);
      });
  }, [currentPage, foodItemsPerPage]);
  useEffect(() => {
    axios
      .get("https://assignment-11-server-seven-pi.vercel.app/allFoodItemsCount")
      .then((res) => {
        console.log(res);
        setTotalCount(res.data);
      });
  }, []);

  const handleFoodItemsPerChange = (e) => {
    const val = parseInt(e.target.value);
    setFoodItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextBtn = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className=" bg-gradient-to-r from-allFoodPageBgLeft to-allFoodPageBgRight p-4">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="my-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Discover the Taste of Every Moment{" "}
            </h1>
            <p className="text-center md:w-1/2 mx-auto my-4">
              Welcome to ChefLink, where every bite is a culinary masterpiece!
              Explore our extensive menu of mouthwatering dishes that transport
              you to a world of flavors and aromas. Whether you&apos;re in the
              mood for a hearty comfort food or a sweet indulgence, we have it
              all here. Order now and experience the richness of every moment.
            </p>
            {/* carosel */}
            <div className=" carousel w-full min-h-screen z-0 my-10">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerImg})`,
                }}
                id="slide1"
                className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
              >
                <div className=" bg-opacity-60"></div>
                <div className="absolute flex justify-center  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <div className="max-w-sm flex flex-col justify-center items-center gap-4 p-2 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold text-center">
                      <span className="bg-gradient-to-bl from-[#ffc586] to-bannerBtnBg bg-clip-text text-transparent">
                        ChefLink
                      </span>
                    </h1>
                    <p className=" text-3xl">
                      All Food Page
                    </p>
                 
                  </div>
                  <div>
                    
                  </div>
                </div>
               
              </div>
        
              
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-auto justify-items-center justify-center items-center gap-10 my-10">
            {foodsData.map((food) => (
              <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
            ))}
          </div>
        </>
      )}

      <div>
        <div className="flex justify-center items-center gap-2">
          <button onClick={handlePrevBtn}>
            <BannerBtnRoundedFull>Prev</BannerBtnRoundedFull>
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={
                currentPage === page
                  ? "btn bg-bannerBtnBg text-white"
                  : "btn btn-outline text-bannerBtnBg"
              }
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextBtn}>
            <BannerBtnRoundedFull>Next</BannerBtnRoundedFull>
          </button>
          <select
            value={foodItemsPerPage}
            onChange={handleFoodItemsPerChange}
            name=""
            id=""
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
