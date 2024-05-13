import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../Auth_Provider/AuthProvider";


const FoodPurchase = () => {
    const {user} = useContext(AuthContext)
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    email ,
    foodName,
    price,
    foodCategory,
    foodImageUrl,
    description,
    foodOrigin,
    quantity,
    userName,
  } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      foodName,
      price,
      quantity,
      userName,
      email: user?.email,
      buyingDate: moment().format("YYYY-MM-DD"),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-10 ">
        Purchase Your {foodName}
      </h1>
      <div className="hero min-h-screen  p-4">
        <div className="hero-content max-w-full w-full justify-around gap-10 flex-col lg:flex-row-reverse">
          <img
            src={foodImageUrl}
            alt=""
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-1 md:grid-cols-2">
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
                <button className="btn bg-bannerBtnBg text-white btn-block">Purchase</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;

