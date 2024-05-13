import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import MyAddedFoodsCard from "./MyAddedFoodsCard";

const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (user?.email) {
      setUrl(`http://localhost:5000/allFoodItems?email=${user.email}`);
    }
  }, [user]);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
        });
    }
  }, [url]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <h1>My Added Foods: {data.length}</h1>
          <div className="flex flex-col justify-center items-center w-full">
            {data?.map((data) => (
              <MyAddedFoodsCard key={data._id} data={data}></MyAddedFoodsCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedFoods;
