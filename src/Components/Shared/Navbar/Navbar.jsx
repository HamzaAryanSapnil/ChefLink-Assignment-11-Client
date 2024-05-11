import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log("from nav", user?.photoURL);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout", user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li className=" hover:transition-all hover:duration-300 hover:bg-signBtn hover:text-white hover:rounded-lg hover:shadow-lg hover:shadow-signBtn hover:font-manrope hover:font-medium" >
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" hover:transition-all hover:duration-300 hover:bg-signBtn hover:text-white hover:rounded-lg hover:shadow-lg hover:shadow-signBtn hover:font-manrope hover:font-medium">
        <NavLink to="/update_profile">Update Profile</NavLink>
      </li>
      {user ? (
        <>
          <li className=" hover:transition-all hover:duration-300 hover:bg-signBtn hover:text-white hover:rounded-lg hover:shadow-lg hover:shadow-signBtn hover:font-manrope hover:font-medium" >
            <NavLink to="/user_profile">User Profile</NavLink>
          </li>
          <li className=" hover:transition-all hover:duration-300 hover:bg-signBtn hover:text-white hover:rounded-lg hover:shadow-lg hover:shadow-signBtn hover:font-manrope hover:font-medium" >
            <NavLink to="/property_details">Property Details</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className=" hover:transition-all hover:duration-300 hover:bg-signBtn hover:text-white hover:rounded-lg hover:shadow-lg hover:shadow-signBtn hover:font-manrope hover:font-medium" >
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="mt-4">
      <div className="navbar bg-base-100 font-mulish text-navCol">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl font-titillium font-bold text-descolor"
          >
            <span className="text-signBtn">Elite</span>Realty
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip"
              data-tip={user?.displayName ? user?.displayName : "User"}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  }
                />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className=" btn text-error btn-outline btn-error font-medium "
            >
              SignOut
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn btn-neutral font-bold"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
