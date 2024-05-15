import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const GalleryPageCard = ({ item, galleryImg }) => {
  console.log(item);
  const { _id, foodImageUrl, userName, email } = item;
  const [feedback, setFeedback] = useState(null);
  const addToGallery = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add to Gallery",
      html: `
              <input id="swal-input1" class="swal2-input" value="${userName}" readonly>
              <input id="swal-input2" class="swal2-input" value="${email}" readonly>
              <input id="swal-input3" class="swal2-input" placeholder="Image URL">
              <input id="swal-input4" class="swal2-input" placeholder="Food Feedback" type="url">
            `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
        ];
      },
    });
    if (formValues) {
      const [name, email, description, imageUrl] = formValues;
      const data = {
        name,
        email,
        description,
        imageUrl,
        foodItemId: _id,
        createdAt: new Date(),
      };
      console.log(data);
      axios
        .post(
          `https://assignment-11-server-seven-pi.vercel.app/addToGallery`,
          data
        )
        .then((data) => {
          if (data.data.insertedId) {
            console.log(data.data.insertedId);
            Swal.fire("Thank you for your contribution!");
          }
        })
        .catch((err) => {
          console.error(err);
          Swal.fire("Error", "Please try again later", "error");
        });
    }
  };

  // now get the users feedback from server
  useEffect(() => {
    axios
      .get(`https://assignment-11-server-seven-pi.vercel.app/feedback/${_id}`)
      .then((data) => {
        if (data.data.length > 0) {
          console.log(data.data);
          setFeedback(data.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);
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
        <h2 className="card-title">{userName}</h2>
        {feedback ? <p>{feedback.description}</p> : <p>No feedback yet</p>}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={addToGallery}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

GalleryPageCard.propTypes = {
  item: PropTypes.object,
  galleryImg: PropTypes.string,
};
export default GalleryPageCard;
