import React from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const ManageList = ({ item }) => {
  const { image, foodCategory, quantity, price, supplier, title, _id } = item;

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });

        fetch(`http://localhost:5000/api/todo/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between manageProductList">
        <div>
          <img width={"70px"} src={image} alt="img" />
          <h3 className="text-lg font-medium my-2">{title}</h3>
          <span>
            Quantity :{" "}
            <span className="text-2xl text-green_soft font-bold">
              {quantity}
            </span>
          </span>
        </div>
        <div className="flex flex-col">
          <NavLink
            to={"/inventory/" + _id}
            className=" btn-manageInventory btn-detailsPage"
          >
            Inventory
          </NavLink>
          <button
            onClick={() => handleDelete(_id)}
            className=" btn-manageInventory btn-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageList;
