import { useForm } from "react-hook-form";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12 ">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-4xl font-bold text-center text-dark2 ">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
                onInvalid={(e) => e.target.setCustomValidity("")}
                onInput={(e) => e.target.setCustomValidity("")}
                placeholder="email"
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500">
                  {errors.email.type === "required"
                    ? errors.email.message
                    : errors.email.type === "pattern"
                    ? errors.email.message
                    : "Invalid email address"}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: (value) => {
                    if (value.length < 8) {
                      return "Password must have at least 8 characters";
                    } else if (
                      !/[A-Z]/.test(value) ||
                      !/[a-z]/.test(value) ||
                      !/[0-9]/.test(value) ||
                      !/[!@#$%^&*]/.test(value)
                    ) {
                      return (
                        "Password must have an uppercase, a lowercase, a number and a special character"
                      );
                    }
                  },
                })}
                type="password"
                placeholder="password"
                className={`input input-bordered ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" my-4 text-center">New to car doctor ? <Link to="/signup" className="text-appointBtnColor font-medium">Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
