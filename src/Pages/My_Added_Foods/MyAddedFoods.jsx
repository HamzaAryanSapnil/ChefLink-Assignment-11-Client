import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth_Provider/AuthProvider";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import MyAddFoodsCard from "./MyAddFoodsCard";
import Swal from "sweetalert2";
import axios from "axios";

const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (user?.email) {
      setUrl(`http://localhost:5000/allFoodItems?email=${user?.email}`);
    }
  }, [user]);

  useEffect(() => {
    if (url) {
      axios.get(url, {
        withCredentials: true,
      })
        .then(res => {
          setFoodData(res.data);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);
    // delete data from server
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white",
        cancelButton: "btn bg-bannerBtnBg text-white",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/allFoodItems/${_id}`)
            .then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                const remaining = foodData?.filter((food) => food._id !== _id);
                setFoodData(remaining);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((err) => console.log(err));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="p-2">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="">
          <div className="flex justify-center items-center my-10">
            <h1 className="text-3xl font-bold">My_Added_Foods</h1>
          </div>

          <div className="hero  ">
            <div className="hero-content justify-around max-w-full flex-col  xl:flex-row">
              <img
                src={
                  foodImg
                    ? foodImg
                    : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                }
                className="w-full xl:w-1/2 rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center items-center gap-y-4">
                {foodData?.map((item) => (
                  <MyAddFoodsCard
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                  ></MyAddFoodsCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedFoods;
