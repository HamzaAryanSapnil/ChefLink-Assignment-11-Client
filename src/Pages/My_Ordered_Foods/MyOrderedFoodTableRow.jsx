import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const MyOrderedFoodTableRow = ({ purchasedFood,handleDelete }) => {
  console.log(purchasedFood);
  const { foodName, buyingDate, foodImageUrl, price, _id, userName, email } =
    purchasedFood;
    

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
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
            <div className="font-bold">{foodName}</div>
            <div className="text-sm opacity-50">{price}Tk</div>
          </div>
        </div>
      </td>
      <td>
        {userName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{buyingDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

MyOrderedFoodTableRow.propTypes = {
  purchasedFood: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default MyOrderedFoodTableRow;
