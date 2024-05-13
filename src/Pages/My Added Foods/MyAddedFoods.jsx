import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import BannerBtnRoundedFull from "../../Components/Banner Btn/BannerBtnRoundedFull";

const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (user?.email) {
      setUrl(`http://localhost:5000/allFoodItems?email=${user?.email}`);
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
    <div className="">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <h1>My Added Foods: {data.length}</h1>
          <div className="flex justify-center items-center flex-col gap-y-10 min-h-screen   mx-auto bg-[#faf9f5] p-4">
            <div className=" z-10 ">
              <h1 className="text-3xl md:text-5xl  font-bold text-center text-black ">
                Your Added Foods
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row w-full gap-4 justify-around items-center ">
              <img
                src={foodImg}
                className="md:max-w-5xl rounded-lg shadow-2xl "
              />

              <div className="overflow-x-auto w-1/2">
                <table className="table  ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th
                        rowSpan={1}
                        colSpan={1}
                        className="rounded-xl bg-bannerBtnBg rounded-r-none rounded-b-none text-white text-center"
                      >
                        Food Name
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none rounded-r-none text-white text-center">
                        Quantity
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none rounded-r-none text-white text-center">
                        Price
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none  text-white text-center">
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((data) => (
                      <tr key={data?._id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={data?.foodImageUrl ? data?.foodImageUrl : foodImg}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold"> {data?.foodName}</div>
                              <div className="text-sm opacity-50">
                              
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                         {data?.quantity}
                        </td>
                        <td>{data?.price}tk</td>
                        <th>
                          <BannerBtnRoundedFull>Update</BannerBtnRoundedFull>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedFoods;
