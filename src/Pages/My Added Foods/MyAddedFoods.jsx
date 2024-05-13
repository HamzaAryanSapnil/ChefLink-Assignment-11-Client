import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import MyAddedFoodsCard from "./MyAddedFoodsCard";

const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const url = `http://localhost:5000/allFoodItems?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="container mx-auto" >
      <h1>My Added Foods: {data.length}</h1>
      <div className="flex flex-col justify-center items-center w-full" >
        {data?.map((data) => (
          <MyAddedFoodsCard key={data._id} data={data} ></MyAddedFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
