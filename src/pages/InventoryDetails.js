import React, { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdDeliveryDining, MdManageAccounts } from "react-icons/md";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const [detailsProduct, setDetailsProduct] = useState({});
  const [reStack, setReStack] = useState(0);
  const { id } = useParams();
  const { image, quantity, price, supplier, title, foodCategory } =
    detailsProduct;

  /* details product find */
  useEffect(() => {
    fetch(`http://localhost:5000/api/todo/${id}`)
      .then((res) => res.json())

      .then((data) => setDetailsProduct(data));
  }, [id, detailsProduct]);

  /* quantity low alert */
  const hh = () => {
    swal("Your Quantity is Low!", "please Restock quantity fast");
  };
  /* quantityReducer func */

  const quantityReducer = () => {
    let prev = parseInt(quantity);
    if (prev <= 0) {
      hh();
    } else {
      let update = prev - 1;
      fetch(`http://localhost:5000/api/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: update }),
      });
    }
  };

  /* handleReStackQuantity */

  const handleReStackQuantity = (e) => {
    e.preventDefault();
    if (reStack === "" || reStack <= 0) {
      return alert("not allow");
    } else {
      fetch(`http://localhost:5000/api/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: parseInt(quantity) + parseInt(reStack) }),
      });
    }
  };


  const handleInput = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setReStack(e.target.value);
      e.target.value = 0
    }
  };
  return (
    <>
      <Header />

      <div className="my-14">
        <div className="container mx-auto p-5 flex justify-around lg:flex-row flex-col">
          <div>
            <img width="80%" className="mb-4 py-4  " src={image} alt="" />
          </div>
          <div className="flex  flex-col">
            <div className="flex flex-col py-3">
              <span className="text-sm">Category : {foodCategory}</span>
              <h2 className="text-3xl my-2 font-bold text-black_soft">
                {title}
              </h2>
              <span className="text-md">Supplier : {supplier}</span>
              <span className="text-black_soft py-1 ">Price : {price} </span>
              <span className="text-black_soft">
                Quantity :{" "}
                <small className="text-2xl font-bold text-green_soft tracking-wider">
                  {quantity}
                </small>
              </span>
              <button
                onClick={() => quantityReducer()}
                className="btn-delivered flex items-center justify-between"
              >
                Delivered <MdDeliveryDining className="ml-4 text-4xl" />
              </button>
            </div>
            <div className="my-4">
              <form onSubmit={handleReStackQuantity}>
                <input
                  value={reStack}
                  onChange={handleInput}
                  className="quantityInput"
                  type="text"
                  placeholder="Store Products"
                />
                <button className="btn-delivered  flex items-center">
                  Restock <AiOutlineCloudDownload className="text-2xl ml-4" />{" "}
                </button>
              </form>
            </div>
          </div>
          <hr className="border-2 border-green_soft opacity-30 my-7" />
        </div>
      </div>
      <div className="flex container mx-auto flex justify-center">
        <button className="btn-inventory flex items-center my-10">
          MANAGE INVENTORY <MdManageAccounts className="text-2xl ml-4" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default InventoryDetails;
