import PropTypes from "prop-types";
import foodImg from "../../assets/hydrabadi_biriyani.jpg";
import { Link } from "react-router-dom";
import BannerBtnRoundedFull from "../../Components/Banner_Btn/BannerBtnRoundedFull";

const AllFoodsCard = ({ food }) => {
  const { foodName, foodImageUrl, foodCategory, price, _id, quantity } = food;
  return (
    <div className="card  lg:w-96  bg-base-100 shadow-xl">
      <figure>
        <img
          src={foodImageUrl ? foodImageUrl : foodImg}
          alt="Shoes"
          className="h-64 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p>Category: {foodCategory}</p>
        <p>Price: {price}tk</p>
        <p>Quantity: {quantity}</p>
        <div className="card-actions ">
          <Link to={`/food_details/${_id}`}>
            <BannerBtnRoundedFull>View Food Details</BannerBtnRoundedFull>
          </Link>
        </div>
      </div>
    </div>
  );
};

AllFoodsCard.propTypes = {
  food: PropTypes.object,
};
export default AllFoodsCard;
