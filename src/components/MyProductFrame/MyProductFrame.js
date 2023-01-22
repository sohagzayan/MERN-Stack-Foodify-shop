import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const MyProductFrame = ({ item }) => {
  const { image, foodCategory, quantity, price, supplier, title, _id, des } =
    item;
  const navigate = useNavigate();

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
        fetch(
          `https://warehouse-management-serve-production.up.railway.app/api/todo/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <>
      <div className=" flex md:items-center mt-20 md:flex-row flex-col container mx-auto px-4 py-4 border-b-2 ">
        <div className="pl-5 pr-5 mt-5">
          <img className="rounded-md" src={image} alt="img" />
        </div>
        <div className="p-5">
          <span className="card-date">March.02.2021</span>
          <h4 className="tracking-wider font-light">{foodCategory}</h4>
          <h3 className="text-2xl  font-bold">{title}</h3>
          <h5 className="mb-2">
            <span className="text-lg font-semibold ">Supplier :</span>
            {supplier}
          </h5>
          <p className="my-2 text-black_soft text-sm">
            {des?.slice(0, 120)}........
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl text-green_soft font-semibold">
              ${price}
            </span>
            <span className="text-md text-green_soft tracking-wider">
              <span className="text-3xl font-bold">Q</span>Quantity :{" "}
              <span className="text-2xl font-bold">{quantity}</span>
            </span>
          </div>
          <div className="flex items-center  mb-4">
            <button
              onClick={() => {
                console.log("hello word");
                navigate(`/inventory/${_id}`);
              }}
              to={"/inventory/" + _id}
              className="btn-myProduct btn-myUpdate flex items-center cursor-pointer"
            >
              Update <AiOutlineDoubleRight className="text-lg ml-5 " />{" "}
            </button>

            <button
              onClick={() => handleDelete(_id)}
              className="btn-MyDelete btn-myProduct "
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProductFrame;
