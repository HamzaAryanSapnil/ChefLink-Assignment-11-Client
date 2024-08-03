import { useEffect, useState } from "react";
import Gallery_Page_Banner from "../../Components/Gallery_Page_Banner/Gallery_Page_Banner";
import GalleryPageCard from "./GalleryPageCard";
import galleryImg from "../../assets/hydrabadi_biriyani.jpg";
import useAxiosSecure from "../../Hooks/Use_Axios_Secure/UseAxiosSecure";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";

const GalleryPage = () => {
  const {user} = UseAuth();
  // get data from server with axios for gallery page
  const [galleryData, setGalleryData] = useState([]);
  const [feedbackData, setFeedbackData] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const axiosSecure = useAxiosSecure();
  const url = "/allFoodItems";
  // useEffect(() => {
  //   axiosSecure.get(url).then((res) => {
  //       setGalleryData(res.data);
  //       setIsLoading(false);
  //     });
  //   axios.get("http://localhost:5000/usersFeedback")
  //     .then(res => {
  //       console.log( "Users feedbacks: " ,res.data);
  //     })
  //     .catch(err => console.error(err));

  // }, [axiosSecure]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const res = await axiosSecure.get(url);
        setGalleryData(res.data);
      } catch (err) {
        console.error(err);
      }
    };


   


    const fetchFeedbackData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/usersFeedback?email=${user?.email}`);
        console.log(data);
          if (data && data.length > 0) {
            const fdData = data[data.length - 1];
            setFeedbackData(fdData?.description);
            
            
            
          }
        // const feedbacks = data;
        // const feedback = feedbacks.map((feedback) => {
        //   feedback.description
        // })
        // console.log(feedback);
        
        
        // const feedbackMap = feedbacks.reduce((acc, feedback) => {
        //   if (!acc[feedback.foodItemId]) {
        //     acc[feedback.foodItemId] = [];
        //   }
        //   acc[feedback.foodItemId].push(feedback);
        //   return acc;
        // }, {});
        // setFeedbackData(feedbackMap);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      await fetchGalleryData();
      await fetchFeedbackData();
      setIsLoading(false);
    };

    fetchData();
  }, [axiosSecure, feedbackData, user?.email]);


   const addToGallery = async (email) => {
     const { value: formValues } = await Swal.fire({
       title: "Add a feedback in food Gallery",
       html: `
              <input id="swal-input1" class="swal2-input" value="${user?.displayName}" readonly>
             
              <input id="swal-input2" class="swal2-input" placeholder="Image URL">
              <input id="swal-input3" class="swal2-input" placeholder="Food Feedback" type="text">
            `,
       focusConfirm: false,
       showCancelButton: true,
       preConfirm: () => {
         return [
           document.getElementById("swal-input1").value,
           document.getElementById("swal-input2").value,
           document.getElementById("swal-input3").value,
         ];
       },
     });
     if (formValues) {
       const [name, imageUrl, description] = formValues;
       const data = {
         name,
         description,
         imageUrl,
         email,

       };
       console.log(data);
       axios
         .post(`http://localhost:5000/addToGallery`, data)
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


  return (
    <div className="p-2 xl:p-0 bg-allFoodPageBgLeft">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div
            className="flex flex-col gap-10 gap-y-4 justify-center items-center w-full md:w-1/2 
      mx-auto py-10 "
          >
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Delicious Food Gallery
            </h1>
            <p className="text-xl text-center">
              Feast your eyes on our mouth-watering collection of culinary
              delights. From appetizers to desserts, explore our diverse range
              of dishes that will tantalize your taste buds and inspire your
              next meal. Each image captures the essence of our passion for
              food, ensuring you experience the flavor and artistry behind every
              dish.
            </p>
          </div>
          <Gallery_Page_Banner pageName="Gallery Page" />

          <h1 className="text-3xl md:text-5xl font-bold text-center">
          Add Your Review
          </h1>

          <div
            className="my-10 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      container mx-auto justify-center items-center gap-10 justify-items-center "
          >
            {galleryData.map((item) => (
              <GalleryPageCard
                key={item._id}
                item={item}
                galleryImg={galleryImg}
                user={user}
                feedback={feedbackData ? feedbackData : "No feedback yet"}
                addToGallery={addToGallery}
              />
            ))}
          </div>
          <div className="flex justify-center items-center py-10">
            <button
              onClick={() => addToGallery(user?.email)}
              className="btn  bg-bannerBtnBg text-white h-11 w-16"
            >
              Add
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryPage;
