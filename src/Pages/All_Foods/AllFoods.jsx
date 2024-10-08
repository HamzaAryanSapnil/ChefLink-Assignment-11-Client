import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";
import { useEffect, useState } from "react";
import BannerBtnRoundedFull from "../../Components/Banner_Btn/BannerBtnRoundedFull";
import Gallery_Page_Banner from "../../Components/Gallery_Page_Banner/Gallery_Page_Banner";

const AllFoods = () => {
  const [asc, setAsc] = useState(true);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
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
        `https://assignment-11-server-seven-pi.vercel.app/allFoodItems?page=${currentPage}&size=${foodItemsPerPage}&sort=${
          asc ? "asc" : "desc"
        }&min=${min}&max=${max}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        setFoodsData(data);
        setIsLoading(false);
      });
  }, [currentPage, foodItemsPerPage, asc, min, max]);
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
            <Gallery_Page_Banner pageName="All Foods"></Gallery_Page_Banner>
          </div>

          {/* main items */}
          <div className="flex justify-center flex-1 bg-yellow-200 gap-10 ">
            {/* navbar */}
            <div className="bg-[#fbf9f0] w-1/4">
              <h1 className="flex justify-center text-3xl font-bold">Filter</h1>
              <div className="flex flex-col justify-center items-center gap-4 ">
                <button
                  onClick={() => setAsc(!asc)}
                  className="btn btn-outline text-bannerBtnBg my-10"
                >
                  {asc ? "Price High To Low" : "Price Low To high"}
                </button>

                <button
                  onClick={() => {
                    setMin(20);
                    setMax(200);
                  }}
                  className="btn btn-outline text-bannerBtnBg"
                >
                  Price: 20tk to 200tk
                </button>
              </div>
            </div>

            {/* food cards */}
            <div className="bg-red-300 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-auto justify-items-center justify-center items-center gap-10 my-10  ">
                {foodsData.map((food) => (
                  <AllFoodsCard
                    key={food._id}
                    food={food}
                  ></AllFoodsCard>
                ))}
              </div>
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
          </div>
        </>
      )}
    </div>
  );
};

export default AllFoods;
