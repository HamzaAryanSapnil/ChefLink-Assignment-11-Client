import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import BannerBtnRoundedFull from "../../Components/Banner Btn/BannerBtnRoundedFull";
import BannerBtn from "../../Components/Banner Btn/BannerBtn";

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
          setData(data);
          setIsLoading(false);
        });
    }
  }, [url]);

  return (
    <div className="p-2">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center flex-col gap-y-10 min-h-screen   mx-auto bg-[#faf9f5] p-4">
            <div className=" z-10 ">
              <h1 className="text-3xl md:text-5xl  font-bold text-center text-black ">
                Your Added Foods
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row w-full gap-4 justify-around items-center ">
              <img
                src={foodImg}
                className="md:max-w-full rounded-lg shadow-2xl "
              />

              <div className="overflow-x-auto xl:w-1/2 ">
                <table className="table  ">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th
                        rowSpan={1}
                        colSpan={1}
                        className="rounded-xl bg-bannerBtnBg rounded-r-none rounded-b-none text-white text-center"
                      >
                        <h1 className=" text-xs md:text-2xl xl:text-3xl font-bold">
                          Food Name
                        </h1>
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none rounded-r-none text-white text-center">
                        <h1 className=" text-xs md:text-2xl xl:text-3xl font-bold">
                          Qtn
                        </h1>
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none rounded-r-none text-white text-center">
                        <h1 className=" text-xs md:text-2xl xl:text-3xl font-bold">
                          Price
                        </h1>
                      </th>
                      <th className="rounded-xl bg-bannerBtnBg rounded-l-none rounded-b-none  text-white text-center">
                        <h1 className=" text-xs md:text-2xl xl:text-3xl font-bold">
                          Update
                        </h1>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((data) => (
                      <tr key={data?._id} className="text-center">
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar hidden ">
                              <div className="mask mask-squircle xl:w-96 xl:h-64">
                                <img
                                  src={
                                    data?.foodImageUrl
                                      ? data?.foodImageUrl
                                      : foodImg
                                  }
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold text-xs  md:text-3xl xl:text-4xl">
                                {data?.foodName}
                              </div>
                              <div className="md:text-3xl text-xs mt-3 opacity-50">
                                {data?.foodCategory}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h1 className="  md:text-3xl xl:text-5xl font-bold">
                            {data?.quantity}
                          </h1>
                        </td>
                        <td>
                          <h1 className="  md:text-3xl xl:text-5xl font-bold">
                            {data?.price}tk
                          </h1>
                        </td>
                        <th>
                          <BannerBtn>
                            <p className="hidden md:block" >Update</p>
                            <p className="block md:hidden text-xs" >Update</p>
                          </BannerBtn>
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
