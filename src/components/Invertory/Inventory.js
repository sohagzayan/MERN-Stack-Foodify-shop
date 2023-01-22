import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InventoryProduct from "../InventoryProduct/InventoryProduct";
import Loading from "../Loading/Loading";
import "./Inventory.css";
const Inventory = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(
      `https://warehouse-management-serve-production.up.railway.app/api/todo?limit=6`
    )
      .then((res) => res.json())
      .then((data) => setAllData(data));
    if (allData.length) {
      setLoading(false);
    }
  }, [allData]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-16 container mx-auto">
          <h2 className="text-center text-4xl  md:text-5xl font-bold text-black_soft tracking-wider ">
            Our Inventory{" "}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2    mt-16">
            {allData.map((item) => (
              <InventoryProduct key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/manage")}
              className="btn-inventory mt-6"
            >
              Manage Inventory
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventory;
