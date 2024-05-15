import { useEffect, useState } from "react";
import Gallery_Page_Banner from "../../Components/Gallery_Page_Banner/Gallery_Page_Banner";
import axios from "axios";
import GalleryPageCard from "./GalleryPageCard";
import galleryImg from '../../assets/hydrabadi_biriyani.jpg'

const GalleryPage = () => {
  // get data from server with axios for gallery page
  const [galleryData, setGalleryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-seven-pi.vercel.app/allFoodItems`,
        
      )
      .then((data) => {
        setGalleryData(data.data);
        setIsLoading(false);
      }).catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-2 xl:p-0 bg-allFoodPageBgLeft">
        {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
      <div
        className="flex flex-col gap-10 gap-y-4 justify-center items-center w-full md:w-1/2 
      mx-auto py-10 "
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

      <div className="my-10 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      container mx-auto justify-center items-center gap-10 justify-items-center " >
        {galleryData.map((item) => (
            <GalleryPageCard key={item._id} item={item} galleryImg={galleryImg} />
        ))}
      </div>
      </>
      )}
    </div>
  );
};

export default GalleryPage;
