import { useForm } from "react-hook-form";
import foodImg from "../../assets/hydrabadi_biriyani.jpg";
import Swal from "sweetalert2";
import BannerBtn from "../../Components/Banner_Btn/BannerBtn";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodUpdate = () => {
  const foodData = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    email,
    foodName,
    price,
    foodCategory,
    foodImageUrl,
    description,
    foodOrigin,
    userName,
    quantity,
  } = foodData;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email,
      foodName,
      price,
      foodCategory,
      foodImageUrl,
      description,
      foodOrigin,
      quantity,
      userName,
    },
  });

  const onSubmit = () => {
    const formValues = getValues();
    console.log(formValues);
    axios
      .put(`http://localhost:5000/allFoodItems/${_id}`, formValues, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("Response:", res);
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated", "Your food has been updated", "success");
          navigate("/my_added_foods");
        } else {
          Swal.fire("No Change", "No updates were made", "info");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };
  return (
    <div className="flex justify-center items-center flex-col gap-y-10 min-h-screen   mx-auto bg-[#faf9f5] p-4">
      <div className=" z-10 ">
        <h1 className="text-3xl md:text-5xl  font-bold text-center text-black ">
          Update Your Own Food
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row-reverse w-full gap-4 justify-around items-center ">
        <img
          src={foodImageUrl ? foodImageUrl : foodImg}
          className="md:max-w-md rounded-lg shadow-2xl "
        />

        <div className="card shrink-0 w-full max-w-5xl  shadow-2xl bg-base-100">
          <form
            className="card-body grid grid-cols-1 md:grid-cols-3 gap-6  md:mx-auto md:justify-center md:items-center"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              onSubmit({
                foodName: data.foodName || foodName,
                foodImageUrl: data.foodImageUrl || foodImageUrl,
                foodCategory: data.foodCategory || foodCategory,
                quantity: data.quantity || quantity,
                price: data.price || price,
                userName: data.userName || userName,
                email: data.email || email,
                foodOrigin: data.foodOrigin || foodOrigin,
                description: data.description || description,
              });
            })}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder={foodName}
                className="input input-bordered"
                {...register("foodName", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.foodName && (
                <p className="text-red-500">Food name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image Url</span>
              </label>
              <input
                type="text"
                placeholder={foodImageUrl}
                className="input input-bordered"
                {...register("foodImageUrl", {
                  required: {
                    value: true,
                    message: "Food image url is required",
                  },
                })}
              />
              {errors.foodImageUrl && (
                <p className="text-red-500">Food image url is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue={foodCategory}
                {...register("foodCategory", { required: true })}
              >
                <option value="">Select Food Category</option>
                <option value="Fish">Fish</option>
                <option value="Biriyani">Biriyani</option>
                <option value="Lentil">Lentil</option>
                <option value="Veg">Veg</option>
                <option value="Salad">Salad</option>
              </select>
              {errors.foodCategory && (
                <p className="text-red-500">Food category is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                className="input input-bordered"
                {...register("quantity", {
                  required: {
                    value: false,
                    message: "Quantity is required",
                  },
                })}
              />
              {errors.quantity && (
                <p className="text-red-500">Quantity is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder={price}
                className="input input-bordered"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
              />
              {errors.price && (
                <p className="text-red-500">Price is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder={userName}
                className="input input-bordered"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "User Name is required",
                  },
                })}
                readOnly
              />
              {errors.userName && (
                <p className="text-red-500">User Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={email}
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                readOnly
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <input
                type="text"
                placeholder={foodOrigin}
                className="input input-bordered"
                {...register("foodOrigin", {
                  required: {
                    value: true,
                    message: "Food origin is required",
                  },
                })}
              />
              {errors.foodOrigin && (
                <p className="text-red-500">Food origin is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">A short description</span>
              </label>
              <textarea
                placeholder={description}
                className="textarea h-32 input-bordered"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              />
              {errors.description && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>
            <div className="form-control">
              <BannerBtn>Update</BannerBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodUpdate;
