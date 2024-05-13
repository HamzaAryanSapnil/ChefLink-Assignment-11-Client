import PropTypes from "prop-types";
import foodImg from "../../assets/hydrabadi biriyani.jpg";

const AllFoodsCard = ({ food }) => {
  const { foodName, foodImageUrl, foodCategory, price, _id } = food;
  return (
    <div className="card  lg:w-96  bg-base-100 shadow-xl">
      <figure>
        <img src={foodImageUrl ? foodImageUrl : foodImg} alt="Shoes" 
        className="h-64 w-full"
        />

      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p>Category: {foodCategory}</p>
        <p>Price: {price}tk</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

AllFoodsCard.propTypes = {
  food: PropTypes.object,
};
export default AllFoodsCard;
