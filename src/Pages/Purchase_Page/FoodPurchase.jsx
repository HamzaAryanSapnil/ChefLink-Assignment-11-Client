import {  useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../Auth_Provider/AuthProvider";
import axios from "axios";

const FoodPurchase = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigete = useNavigate();
  console.log(data);
  const {
    foodName,
    price,
    foodImageUrl,
    quantity,
  } = data;
  // fetch(`http://localhost:5000/allFoodItems/${params.id}`)
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      foodImageUrl,
      foodName,
      price,
      quantity,
      userName: user?.displayName,
      email: user?.email,
      buyingDate: moment().format("YYYY-MM-DD"),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // send data to server in purchase collection and after sending data to server use sweet alert to show success
    axios.post("http://localhost:5000/purchasedFood", data)
      .then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire("Purchased", "Your food has been purchased", "success");
          navigete("/my_ordered_foods");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-10 ">
        Purchase Your {foodName}
      </h1>
      <div className="hero min-h-screen  p-4">
        <div className="hero-content max-w-full w-full justify-around gap-10 flex-col xl:flex-row-reverse">
          <img
            src={foodImageUrl}
            alt=""
            className="xl:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="card shrink-0 xl:w-1/2 shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body grid grid-cols-1 md:grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Img Url</span>
                </label>
                <input
                  type="text"
                  placeholder="food img url"
                  {...register("foodImageUrl")}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder="food name"
                  {...register("foodName")}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price in BDT</span>
                </label>
                <input
                  type="number"
                  placeholder="price"
                  {...register("price")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="quantity"
                  {...register("quantity")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  {...register("userName")}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buying Date</span>
                </label>
                <input
                  type="date"
                  placeholder="buying date"
                  {...register("buyingDate")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 md:col-span-2  w-full">
                <button className="btn bg-bannerBtnBg text-white btn-block">
                  Purchase
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
