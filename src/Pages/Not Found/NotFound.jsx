import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404 gif.gif"

const NotFound = () => {
    return (
        <div>
            <div className="flex flex-col min-h-screen justify-center items-center" >
                <img src={notFoundImg} alt="" className="h-[250px]" />
                <Link to={"/"} className="text-[#ea6a12] font-bold" >Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;