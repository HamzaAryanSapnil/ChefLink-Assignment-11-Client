import PropTypes from "prop-types";
import BannerBtnRoundedFull from "../../../../Components/Banner_Btn/BannerBtnRoundedFull";
import { Link } from "react-router-dom";
const Top_Foods_Cards = ({ topFood }) => {
  const { _id, foodName, foodImageUrl, foodCategory, price, purchaseCount } =
    topFood;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            foodImageUrl
              ? foodImageUrl
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          className="h-64 w-full xl:w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p>Category: {foodCategory}</p>
        <p>Price: {price}</p>
        <p>
          This food has been purchased for {purchaseCount ? purchaseCount : 0}{" "}
          times
        </p>
        <div className="card-actions ">
          <Link to={`/food_details/${_id}`}>
            <BannerBtnRoundedFull>View Full Food_Details</BannerBtnRoundedFull>
          </Link>
        </div>
      </div>
    </div>
  );
};

Top_Foods_Cards.propTypes = {
  topFood: PropTypes.object,
};
export default Top_Foods_Cards;
