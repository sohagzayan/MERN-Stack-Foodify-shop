import React, { useEffect, useState } from "react";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Inventory from "../components/Invertory/Inventory";
import Loading from "../components/Loading/Loading";
import OpeningTable from "../components/OpeningTable/OpeningTable";
import WeProvide from "../components/WeProvide.js/WeProvide";
const Home = () => {
  const [loading, setLodaing] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLodaing(false)
    },1000)
  },[])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Hero />
          <Inventory />
          <Faq />
          <WeProvide />
          <OpeningTable />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
