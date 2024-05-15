import Banner from "../../Components/Banner/Banner";
import TopFoodsSection from "./Top_Foods_Section/TopFoodsSection";
import Videosection from "./Video/Videosection";

const Home = () => {
  return (
    <div className="space-y-14">
      <Banner />
      <TopFoodsSection />
      <Videosection></Videosection>
    </div>
  );
};

export default Home;
