import bannerImg from '../../assets/hydrabadi_biriyani.jpg';
import bgImg from "../../assets/bg add food.jpg";
import BannerBtn from "../Banner_Btn/BannerBtn";
import { Link } from "react-router-dom";
import BannerBtnRoundedFull from '../Banner_Btn/BannerBtnRoundedFull';
const Banner = () => {
  return (
    <div className=" carousel w-full min-h-screen z-0">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${bgImg})`,
        }}
        id="slide1"
        className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
      >
        <div className=" bg-opacity-60"></div>
        <div className="absolute flex flex-col-reverse lg:flex-row justify-around  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="max-w-sm flex flex-col justify-center items-start gap-4 p-2 text-black">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-bl from-[#ffc586] to-bannerBtnBg bg-clip-text text-transparent">
                ChefLink
              </span>
              . Your Very Own Recipe Network
            </h1>
            <p className="text-lg">Delicious dishes, unforgettable moments.</p>
            <Link to={"/all_foods"}>
              <BannerBtn>See All_Foods</BannerBtn>
            </Link>
          </div>
          <div>
            <img src={bannerImg} className="md:max-w-md rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 2 */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerImg})`,
        }}
        id="slide2"
        className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
      >
        <div className=" bg-opacity-60"></div>
        <div className="absolute flex flex-col-reverse lg:flex-row justify-around  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="max-w-sm flex flex-col justify-center items-start gap-4 p-2 text-white">
           
            
            <h1 className="text-3xl md:text-5xl font-bold">Add Your Very Own Food Item</h1>
            <Link to={"/add_food"}>
              <BannerBtn>Add Food</BannerBtn>
            </Link>
          </div>
          <div>
            <img src={bannerImg} className="md:max-w-md rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 3 */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerImg})`,
        }}
        id="slide3"
        className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
      >
        <div className=" bg-opacity-60"></div>
        <div className="absolute flex flex-col-reverse lg:flex-row justify-around  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="max-w-sm flex flex-col justify-center items-start gap-4 p-2 text-white">
           
            
            <h1 className="text-3xl md:text-5xl font-bold">Wanna See All Foods You Added?</h1>
            <Link to={"/all_foods"}>
              <BannerBtnRoundedFull>Your Own Added Foods</BannerBtnRoundedFull>
            </Link>
          </div>
          <div>
            <img src={bannerImg} className="md:max-w-md rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerImg})`,
        }}
        id="slide4"
        className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
      >
        <div className=" bg-opacity-60"></div>
        <div className="absolute flex flex-col-reverse lg:flex-row justify-around  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="max-w-sm flex flex-col justify-center items-start gap-4 p-2 text-white">
           
            
            <h1 className="text-3xl md:text-5xl font-bold">Scroll to See Our Awesome Foods Sections</h1>
            
          </div>
          <div>
            <img src={bannerImg} className="md:max-w-md rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
