import { useEffect, useState } from "react";
import Gallery_Page_Banner from "../../Components/Gallery_Page_Banner/Gallery_Page_Banner";
import galleryImg from "../../assets/hydrabadi_biriyani.jpg";
import useAxiosSecure from "../../Hooks/Use_Axios_Secure/UseAxiosSecure";
import GalleryPageCard from "./GalleryPageCard";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const GalleryPage = () => {
  const { user } = UseAuth();

  const axiosSecure = useAxiosSecure();
  const [galleryData, setGalleryData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    try {
      const fetchAllFoods = async () => {
        const { data } = await axiosSecure.get("/allFoodItems");
        setGalleryData(data);
      };
      fetchAllFoods();

      const feedbackAllData = async () => {
        const { data } = await axiosSecure.get("/usersFeedback");
        setFeedbackData(data);
      };

      feedbackAllData();
    } catch (error) {
      console.log(error);
    }
  }, [axiosSecure]);

  const handleAdd = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, i want to give a review!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html: `
    <input value=${user?.displayName} readonly id="swal-input1" class="swal2-input ">
    <textarea placeholder="Please Give Your Review here" id="swal-input2" rows="5" cols="29" "></textarea>
    <input placeholder="Please Enter Your Image Url Here" id="swal-input3" class="swal2-input">
  `,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value,
              ];
            },
          });
          if (formValues) {
            const [name, review, img] = formValues;
            console.log(name, review, img);
            const reviewData = {
              name,
              review,
              img,
            };

            const { data } = await axiosSecure.post(
              "/addToGallery",
              reviewData
            );
            if (data?.insertedId) {
              Swal.fire("Thank you for your contribution!");
              const feedbackAllData = async () => {
                const { data } = await axiosSecure.get("/usersFeedback");
                setFeedbackData(data);
              };

              feedbackAllData();
            }
          }
        }
        
      });
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      
    }
    
  };
  

  return (
    <div>
      <div
        className="flex flex-col gap-10 gap-y-4  justify-center items-center w-full md:w-1/2 
      mx-auto py-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Delicious Food Gallery
        </h1>
        <p className="text-xl text-center">
          Feast your eyes on our mouth-watering collection of culinary delights.
          From appetizers to desserts, explore our diverse range of dishes that
          will tantalize your taste buds and inspire your next meal. Each image
          captures the essence of our passion for food, ensuring you experience
          the flavor and artistry behind every dish.
        </p>
      </div>
      <Gallery_Page_Banner pageName="Gallery Page" />
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Add Your Review
      </h1>
      <div
        className="my-10 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      container mx-auto justify-center items-center gap-10 justify-items-center"
      >
        {galleryData.map((item, index) => {
          const feedback = feedbackData[index % feedbackData.length];
          return (
            <GalleryPageCard
              key={item._id}
              item={item}
              galleryImg={galleryImg}
              singleFeedback={feedback}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full">
        <button
          onClick={handleAdd}
          className="btn btn-outline text-bannerBtnBg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
