import {  useEffect, useState } from "react";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import MyOrderedFoodTableRow from "./MyOrderedFoodTableRow";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import BannerBtn from "../../Components/Banner_Btn/BannerBtn";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosSecure from "../../Hooks/Use_Axios_Secure/UseAxiosSecure";

const MyOrderedFoods = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [purchasedFood, setPurchasedFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `/purchasedFood?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setPurchasedFood(res.data);
      setIsLoading(false);
    })
    // axios
    //   .get(url, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     setPurchasedFood(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

      
  }, [url, axiosSecure]);

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error",
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
          fetch(`http://localhost:5000/purchasedFood/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remaining = purchasedFood.filter(
                  (food) => food._id !== _id
                );
                setPurchasedFood(remaining);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your food has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your  data is safe :)",
            icon: "error",
          });
        }
      });
  };

  const handleConfirm = (_id) => {
    fetch(`http://localhost:5000/purchasedFood/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = purchasedFood.filter((food) => food._id !== _id);
          const updated = purchasedFood.find((food) => food._id === _id);
          updated.status = "confirm";
          const newPurchasedFood = [updated, ...remaining];
          setPurchasedFood(newPurchasedFood);
          Swal.fire("Confirmed!", "Your food has been confirmed.", "success");
        }
      });
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : purchasedFood.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen p-4 gap-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold my-6">
              Oops! It looks like you haven&apos;t purchased any food yet.
            </p>
            <Link to={"/"}>
              <BannerBtn>Go to Home and Start Shopping</BannerBtn>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col xl:flex-row">
              <img
                src={foodImg}
                className="md:max-w-sm rounded-lg shadow-2xl"
                alt="Food"
              />
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Food Name</th>
                      <th className="hidden md:table-cell">Customer Name</th>
                      <th className="hidden md:table-cell">Buying Date</th>
                      <th className="hidden md:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {purchasedFood.map((item) => (
                      <MyOrderedFoodTableRow
                        key={item._id}
                        purchasedFood={item}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}
                      />
                    ))}
                  </tbody>
                </table>
                <p className="text-center my-4">
                  <Link to={"/all_foods"}>
                    <BannerBtn>Still Hungry?</BannerBtn>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrderedFoods;
