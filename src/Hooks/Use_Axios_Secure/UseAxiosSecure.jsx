import axios from "axios";
import useAuth from "../UseAuth/UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://assignment-11-server-seven-pi.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              console.log("Logout");
              navigate("/login");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    );
  }, [logOut, navigate]);

  //

  return axiosSecure;
};

export default useAxiosSecure;
