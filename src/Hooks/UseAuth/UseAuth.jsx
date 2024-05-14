import { useContext } from "react";
import { AuthContext } from "../../Auth_Provider/AuthProvider";


const UseAuth = () => {
   const auth = useContext(AuthContext);
   return auth;
};

export default UseAuth;