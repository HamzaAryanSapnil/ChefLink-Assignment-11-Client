import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // send data to server
    fetch("http://localhost:5000/allFoodItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div
     
      className="hero min-h-screen   mx-auto bg-[#faf9f5]"
    >
        
      <div className="hero-content flex-col xl:flex-row-reverse w-full">
        <img src={foodImg} className="max-w-sm rounded-lg shadow-2xl" />

        <div className="card shrink-0 w-full max-w-5xl  shadow-2xl bg-base-100">
          <form className="card-body grid grid-cols-1 md:grid-cols-3 gap-6  md:mx-auto md:justify-center md:items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Food Name"
                className="input input-bordered"
                {...register("foodName", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.foodName && (
                <p className="text-red-500">{errors.foodName.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image Url</span>
              </label>
              <input
                type="text"
                placeholder="Food Image Url"
                className="input input-bordered"
                {...register("foodImageUrl", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.foodImageUrl && (
                <p className="text-red-500">{errors.foodImageUrl.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <input
                type="text"
                placeholder="Food Category"
                className="input input-bordered"
                {...register("foodCategory", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.foodCategory && (
                <p className="text-red-500">{errors.foodCategory.message}</p>
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
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.quantity && (
                <p className="text-red-500">{errors.quantity.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder={
                  user?.displayName ? user?.displayName : "User Name"
                }
                className="input input-bordered"
                value={user?.displayName ? user?.displayName : "User Name"}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={user?.email ? user?.email : "example@example.com"}
                className="input input-bordered"
                value={user?.email ? user?.email : "example@example.com"}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <input
                type="text"
                placeholder="Food Origin"
                className="input input-bordered"
                {...register("foodOrigin", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.foodOrigin && (
                <p className="text-red-500">{errors.foodOrigin.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">A short description</span>
              </label>
              <textarea
                placeholder="A short description"
                className="textarea h-32 input-bordered"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div className="form-control">
              <button className="btn btn-primary">ADD ITEM</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
