import { Link, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import BannerBtnRoundedFull from "../../Components/Banner_Btn/BannerBtnRoundedFull";

const Food_Details = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    foodName,
    foodImageUrl,
    foodCategory,
    price,
    description,
    userName,
    foodOrigin,
  } = data;
  // z-index: 0;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // max-width: 80rem/* 1280px */;
  // gap: 1rem/* 16px */;
  // padding: 1rem/* 16px */;
  return (
    <div className="hero min-h-screen bg-foodDetailsBg p-4">
      <div className="hero-content max-w-full flex-col xl:flex-row ">
        <img
          src={
            foodImageUrl
              ? foodImageUrl
              : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          }
          className=" xl:w-1/2 rounded-lg shadow-2xl xl:max-w-screen-lg"
        />
        <div className="xl:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col  gap-4">
            <h3 className="text-5xl font-bold">{foodName}</h3>
            <p className="text-xl">{description}</p>
          </div>
          <div className="flex justify-start items-end gap-4">
            <h3 className="text-3xl font-bold">Category:</h3>
            <p className="text-xl">{foodCategory}</p>
          </div>
          <div className="flex justify-start items-end gap-4">
            <h3 className="text-3xl font-bold">Price:</h3>
            <p className="text-xl">{price}</p>
          </div>
          <div className="flex justify-start items-end gap-4">
            <h3 className="text-2xl font-bold">Made By:</h3>
            <p className="text-xl">{userName}</p>
          </div>
          <div className="flex justify-start items-end gap-4">
            <h3 className="text-2xl font-bold">Food Origin:</h3>
            <p className="text-xl">{foodOrigin}</p>
          </div>
          <Link to={"/purchase"}>
            <BannerBtnRoundedFull>Purchase</BannerBtnRoundedFull>
          </Link>
        </div>
      </div>
    </div>
  );
};
Food_Details.propTypes = {
  data: PropTypes.object,
};
export default Food_Details;
