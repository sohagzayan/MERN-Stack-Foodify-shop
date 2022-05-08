import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContent";
import "./addProduct.css";


const AddProduct = () => {
  const { username } = useAuthContext();
  console.log(username.email);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const notify = () => toast(" Products Successfully added !");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    let newProductDocuments = {
      image: image,
      foodCategory: category,
      title: title,
      des: description,
      supplier: supplier,
      price: price,
      quantity: quantity,
      gmail: username.email,
    };
    try {
      await fetch("https://farmfood-freshbox-api.herokuapp.com/api/todo/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductDocuments),
      });
      notify()
      setTitle('')
      setCategory('')
      setSupplier('')
      setQuantity(0)
      setImage('')
      setDescription('')
      setPrice(0)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="max-w-3xl bg-white py-10 px-5 m-auto w-full mt-10">
        <div className="text-3xl mb-6 text-center font-bold text-black_soft ">
          ADD PRODUCT YOUR OWN
        </div>
        <form onSubmit={handleAddProduct} className="addProduct">
          <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Product Category"
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Title"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => setSupplier(e.target.value)}
                value={supplier}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Supplier"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setPrice(e.target.value);
                  }
                }}
                value={price}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Price"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setQuantity(e.target.value);
                  }
                }}
                value={quantity}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Quantity"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Image"
              />
            </div>

            <div className="col-span-2">
              <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                cols="30"
                rows="8"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="col-span-2 text-center ">
              <button className="py-3 px-8 btn-addProduct  text-white font-bold w-full ">
                ADD PRODUCT
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
