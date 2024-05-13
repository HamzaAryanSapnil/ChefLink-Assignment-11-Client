import BannerBtnRoundedFull from "../../Components/Banner_Btn/BannerBtnRoundedFull";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MyAddFoodsCard = ({ item, handleDelete }) => {
  const { _id, foodName, foodImageUrl, foodCategory, price } = item;
  // delete functionallity

  return (
    <div className="card w-full flex-col md:flex-row bg-base-100 shadow-xl ">
      <figure>
        <img
          src={foodImageUrl ? foodImageUrl : foodImg}
          alt="Shoes"
          className="md:h-64 md:w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p> Food Category: {foodCategory}</p>
        <p> Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/food_update/${_id}`}>
            <BannerBtnRoundedFull>Update</BannerBtnRoundedFull>
          </Link>
          <BannerBtnRoundedFull>
            {" "}
            <span onClick={() => handleDelete(_id)}>Delete</span>
          </BannerBtnRoundedFull>
        </div>
      </div>
    </div>
  );
};

MyAddFoodsCard.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default MyAddFoodsCard;
