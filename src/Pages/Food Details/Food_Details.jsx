import { useLoaderData } from "react-router-dom";


const Food_Details = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            Food details: {data._id}
        </div>
    );
};

export default Food_Details;