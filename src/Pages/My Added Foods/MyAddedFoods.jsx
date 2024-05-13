import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const MyAddedFoods = () => {
  const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const url = `http://localhost:5000/allFoodItems?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div>
      <h1>My Added Foods: {data.length}</h1>
      
    </div>
  );
};

export default MyAddedFoods;
