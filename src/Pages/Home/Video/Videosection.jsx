import { Link } from "react-router-dom";
const Videosection = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row justify-around items-center gap-5 p-4 container mx-auto">
      <div className="flex-1  w-full ">
        <div className="card  w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-descolor font-cabin">
              Savor the Flavors: Discover Our Culinary Creations
            </h2>
            <p className="font-mulish text-cardDescolor">
              Dive into a world of exquisite dining with our diverse menu
              options. Explore our culinary delights, where each dish is crafted
              with passion and precision. Whether you&apos;re craving a gourmet
              meal or a quick bite, our offerings are designed to tantalize your
              taste buds and satisfy your cravings. Click the button below to
              browse our full menu and find your next favorite dish. Let us take
              you on a gastronomic journey that celebrates the art of fine
              dining and exceptional service.
            </p>
            <div className="card-actions justify-start">
              <Link to={"/allArtAndCraftItems"}>
                <button className="btn btn-outline text-orange-500 font-extrabold text-xl font-manrope">
                  {" "}
                  See All Our Crafts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body w-full">
            <div className="w-full h-full object-cover">
              <iframe
                className="w-full h-full lg:h-[450px] xl:h-[350px] object-cover "
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/kRCH8kD1GD0?si=0zrQ7U2HKyaYP7K4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
