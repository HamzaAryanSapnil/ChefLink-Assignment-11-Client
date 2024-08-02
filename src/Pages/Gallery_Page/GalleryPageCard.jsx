
import PropTypes from "prop-types";
const GalleryPageCard = ({ item, galleryImg, feedback, user }) => {
    console.log(user?.displayName, user?.email);
  const {  foodImageUrl, } = item;
  


  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl 
        transition duration-500 ease-in-out  relative overflow-hidden hover:bg-slate-900"
    >
      <figure className="">
        <img
          src={foodImageUrl ? foodImageUrl : galleryImg}
          alt="Shoes"
          className="h-64 w-full xl:w-96 rounded-xl"
        />
      </figure>
      <div
        className="card-body absolute inset-0 flex flex-col justify-center 
          items-center bg-slate-900 bg-opacity-75 opacity-0 transition-opacity 
          duration-500 ease-in-out hover:opacity-100 text-white"
      >
        <h2 className="card-title">{user?.displayName}</h2>
        <p> {feedback} </p>
      </div>
    </div>
  );
};

GalleryPageCard.propTypes = {
  item: PropTypes.object,
  galleryImg: PropTypes.string,
  feedback: PropTypes.array,
  user: PropTypes.object,
};
export default GalleryPageCard;
