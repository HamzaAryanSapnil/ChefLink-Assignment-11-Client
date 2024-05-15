import bannerImg from '../../assets/hydrabadi_biriyani.jpg'

const Gallery_Page_Banner = () => {
    return (
        <div className=" carousel w-full min-h-screen z-0 my-10">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerImg})`,
          }}
          id="slide1"
          className="carousel-item relative w-full bg-cover bg-center bg-[#fbf9f0]"
        >
          <div className=" bg-opacity-60"></div>
          <div className="absolute flex justify-center  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="max-w-sm flex flex-col justify-center items-center gap-4 p-2 text-white">
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                <span className="bg-gradient-to-bl from-[#ffc586] to-bannerBtnBg bg-clip-text text-transparent">
                  ChefLink
                </span>
              </h1>
              <p className=" text-3xl">
                All Food Page
              </p>
           
            </div>
            <div>
              
            </div>
          </div>
         
        </div>
  
        
      </div>
    );
};

export default Gallery_Page_Banner;