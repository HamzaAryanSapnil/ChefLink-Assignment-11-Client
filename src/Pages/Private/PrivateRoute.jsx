import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Auth_Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen font-manrope text-2xl font-extrabold ">
        <span className="loading loading-spinner loading-lg "></span>
        <p>
          <span className="text-signBtn">Still Loading...!</span> <br /> reload
          the page
        </p>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
