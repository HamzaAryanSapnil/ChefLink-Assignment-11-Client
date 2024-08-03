import { useLoaderData, useNavigate } from "react-router-dom";
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
  // console.log(data);
  const { foodName, price, foodImageUrl, quantity, email, _id } = data;
  console.log(_id);
  // fetch(`http://localhost:5000/allFoodItems/${params.id}`)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      foodImageUrl,
      foodName,
      price,
      quantity: 1,
      userName: user?.displayName,
      email: user?.email,
      buyingDate: moment().format("YYYY-MM-DD"),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // const quantityValue = parseInt(data.quantity, 10);
    const quantityValue = Number(data.quantity);
    const availableQuantity = Number(quantity);
       if (quantityValue <= 0 || quantityValue > availableQuantity) {
         Swal.fire("Error", "Please enter a valid quantity", "error");
         return;
       }

    if (user?.email === email) {
      Swal.fire("Error", "You cannot purchase your own food item", "error");
      return;
    }

    const purchaseData = { ...data, quantity: quantityValue, foodId: _id};
    // send data to server in purchase collection and after sending data to server use sweet alert to show success
    axios
      .post("http://localhost:5000/purchasedFood", purchaseData)
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

  const watchQuantity = watch("quantity");
  if (watchQuantity > quantity) {
    setValue("quantity", quantity);
  }

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
              {quantity === 0 && (
                <div className="md:col-span-2 text-red-500 text-center">
                  This item is not available for purchase as it is out of stock.
                </div>
              )}
              {user?.email === email && (
                <div className="md:col-span-2 text-red-500 text-center">
                  You cannot purchase your own food item.
                </div>
              )}
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
                  <span className="label-text">
                    Enter Your Quantity.{" "}
                    <span className="text-red-500 font-bold">
                      Your item quantity is {quantity}
                    </span>
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="quantity"
                  {...register("quantity", {
                    min: { value: 1, message: "Quantity must be at least 1" },
                    max: {
                      value: quantity,
                      message: `You cannot buy more than the available quantity (${quantity})`,
                    },
                  })}
                  className="input input-bordered"
                  disabled={quantity <= 1}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm">
                    {errors.quantity.message}
                  </p>
                )}
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
                <button
                  disabled={quantity === 0 || user?.email === email}
                  className="btn bg-bannerBtnBg text-white btn-block"
                >
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
