import React, { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdDeliveryDining, MdManageAccounts } from "react-icons/md";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();
  const [detailsProduct, setDetailsProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/todo/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsProduct(data));
  }, [id]);
  const { image, quantity, price, supplier, title, foodCategory } =
    detailsProduct;
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
              <button className="btn-delivered flex items-center justify-between">
                Delivered <MdDeliveryDining className="ml-4 text-4xl" />
              </button>
            </div>
            <div className="my-4">
              <form>
                <input
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
