import axios from "axios";
import useAuth from "../UseAuth/UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.interceptors.response.use( res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                console.log(error.response.status);
                logOut()
                    .then(() => {
                        console.log('Log Out')
                        navigate('/login')
                    })
                    .catch(err => console.log(err));
                
            }
    }
    )
    }, [])
    
    return axiosSecure;
};

export default useAxiosSecure;