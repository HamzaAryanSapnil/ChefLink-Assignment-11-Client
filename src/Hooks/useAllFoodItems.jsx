
import useAxiosSecure from "./Use_Axios_Secure/UseAxiosSecure";


const useAllFoodItems = async () => {
    const axiosSecure = useAxiosSecure();
    const { data } = await axiosSecure.get("/allFoodItems")
    
    
    return [data];
};

export default useAllFoodItems;