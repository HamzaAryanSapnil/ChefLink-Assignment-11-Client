import PropTypes from "prop-types";
import DeleteCircle from "../../Components/Banner_Btn/DeleteCircle";

const MyOrderedFoodTableRow = ({
  purchasedFood,
  handleDelete,
  handleConfirm,
}) => {
  const {
    foodName,
    buyingDate,
    foodImageUrl,
    price,
    _id,
    userName,
    email,
    status,
  } = purchasedFood;

  return (
    <tr>
      <th>
        <span onClick={() => handleDelete(_id)}>
          <DeleteCircle></DeleteCircle>
        </span>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-10 md:w-24 h-10 md:h-24">
              <img
                src={
                  foodImageUrl
                    ? foodImageUrl
                    : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold md:text-base text-xs">{foodName}</div>
            <div className="md:text-sm opacity-50 text-xs">{price}Tk</div>
          </div>
        </div>
      </td>
      <td>
       <p className="hidden md:table-cell" > {userName}</p>
        <br />
        <span className="hidden md:badge badge-ghost badge-sm">{email}</span>
      </td>
      <td className="hidden  md:table-cell" >{buyingDate}</td>
      <th className=" p-0 m-0 md:p-2 md:m-2" >
        {status === "confirm" ? (
          <button className="btn text-success bg-PastelYellow  p-0 m-0 md:p-2 md:m-2">
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn bg-bannerBtnBg text-white btn-xs md:btn-sm"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

MyOrderedFoodTableRow.propTypes = {
  purchasedFood: PropTypes.object,
  handleDelete: PropTypes.func,
  handleConfirm: PropTypes.func,
};

export default MyOrderedFoodTableRow;
