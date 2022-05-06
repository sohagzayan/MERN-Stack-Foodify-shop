import React from "react";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Inventory from "../components/Invertory/Inventory";
import OpeningTable from "../components/OpeningTable/OpeningTable";
import WeProvide from "../components/WeProvide.js/WeProvide";

const Home = () => {
  return (
    <>
      
      <Header />
      <Hero />
      <Inventory />
      <Faq/>
      <WeProvide />
      <OpeningTable />
      <Footer />
    </>
  );
};

export default Home;
