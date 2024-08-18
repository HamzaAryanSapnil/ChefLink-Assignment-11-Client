import PropTypes from "prop-types";

const GalleryPageCard = ({item, galleryImg,  singleFeedback }) => {
  console.log(item);
  
  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl 
        transition duration-500 ease-in-out  relative overflow-hidden hover:bg-slate-900"
    >
      <figure className="">
        <img
          src={item?.foodImageUrl ? item?.foodImageUrl : galleryImg || singleFeedback?.img ? singleFeedback?.img : galleryImg }
          alt="Gallery"
          className="h-64 w-full xl:w-96 rounded-xl"
        />
      </figure>
      <div
        className="card-body absolute inset-0 flex flex-col justify-center 
          items-center bg-slate-900 bg-opacity-75 opacity-0 transition-opacity 
          duration-500 ease-in-out hover:opacity-100 text-white"
      >
        <h4 className="font-bold text-xl">
          {" "}
          {singleFeedback?.name ? singleFeedback?.name : "User"}{" "}
        </h4>
        <p className="">
          {" "}
          {singleFeedback?.name ? singleFeedback?.review : "User'Review"}{" "}
        </p>
      </div>
    </div>
  );
};

GalleryPageCard.propTypes = {
  item: PropTypes.object,
  galleryImg: PropTypes.string,
  singleFeedback: PropTypes.any,
};

export default GalleryPageCard;
