
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth_Provider/AuthProvider";
import foodImg from "../../assets/hydrabadi biriyani.jpg";
import MyOrderedFoodTableRow from "./MyOrderedFoodTableRow";
import Swal from "sweetalert2";

const MyOrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const [purchasedFood, setPurchasedFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `http://localhost:5000/purchasedFood?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPurchasedFood(data);
        setIsLoading(false);
      });
  }, [url]);

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/purchasedFood/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remaining = purchasedFood.filter(
                  (food) => food._id !== _id );
                setPurchasedFood(remaining);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your food has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your  data is safe :)",
            icon: "error",
          });
        }
      });
  };


  const handleConfirm = (_id) => {
    fetch(`http://localhost:5000/purchasedFood/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),

    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount > 0) {
        const remaining = purchasedFood.filter(
          (food) => food._id !== _id
        );
        const updated = purchasedFood.find((food) => food._id === _id);
        updated.status = "confirm";
        const newPurchasedFood = [updated, ...remaining];
        setPurchasedFood(newPurchasedFood);
        Swal.fire("Confirmed!", "Your food has been confirmed.", "success");
      }
    })

  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>

          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col xl:flex-row">
              <img src={foodImg} className="md:max-w-sm  rounded-lg shadow-2xl" />
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                      </th>
                      <th>Food Name</th>
                      <th className="hidden md:table-cell" >Customer Name</th>
                      <th className="hidden md:table-cell" >Buying Date</th>
                      <th className="hidden md:table-cell" >Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {purchasedFood.map((purchasedFood) => (
                      <MyOrderedFoodTableRow 
                      key={purchasedFood._id}
                      purchasedFood={purchasedFood}
                      handleDelete={handleDelete}
                      handleConfirm={handleConfirm}
                      ></MyOrderedFoodTableRow>
                    ))}
                   </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrderedFoods;
