import Gallery_Page_Banner from "../../Components/Gallery_Page_Banner/Gallery_Page_Banner";

const GalleryPage = () => {
  return (
    <div className="p-2 xl:p-0">
      <div
        className="flex flex-col gap-10 gap-y-4 justify-center items-center w-full md:w-1/2 
      mx-auto my-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Delicious Food Gallery
        </h1>
        <p className="text-xl text-center">
          Feast your eyes on our mouth-watering collection of culinary delights.
          From appetizers to desserts, explore our diverse range of dishes that
          will tantalize your taste buds and inspire your next meal. Each image
          captures the essence of our passion for food, ensuring you experience
          the flavor and artistry behind every dish.
        </p>
      </div>
      <Gallery_Page_Banner pageName="Gallery Page" />

      <div>
        
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl 
        transition duration-500 ease-in-out  relative overflow-hidden hover:bg-slate-900">
          <figure className="">
            <img
              src=
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="h-64 w-full xl:w-96 rounded-xl"
            />
          </figure>
          <div className="card-body absolute inset-0 flex flex-col justify-center 
          items-center bg-slate-900 bg-opacity-75 opacity-0 transition-opacity 
          duration-500 ease-in-out hover:opacity-100 text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
