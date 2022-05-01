import React from "react";
import { FaPlay } from "react-icons/fa";
import image from "../../assets/image/slider13-removebg-preview.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex container pt-7   px-4 mx-auto heroWrapper   items-center ">
      <div className="hero_content">
        <span className="text-2xl">Welcome To</span>
        <h2 className=" mb-6 text-black_soft heroTitle">
          Our<span className="text-green_soft heroTitleHeilight">Foodify</span>{" "}
          Restaurant.
        </h2>
        <p className="text-black_soft font-light">
          Is it amet, consectetur adipisicing elit. Dolore atque maiores libero
          saepe qui illo recusandae odit. Voluptatibus hic veritatis officia
          eius autem saepe, in quasi? Ab magni dolore odit!
        </p>
        <div className="flex md:flex-row flex-col justify-start items-start ">
          <button className="btn btn-hero mt-5">Check Our Menu</button>
          <button className="btn-hero-feedback mt-4 md:ml-5  text-2xl">
        
            <span className="mr-5">
              <FaPlay className="playIcons text-green_soft" />
            </span>
            Watch The Recipe
          </button>
        </div>
      </div>
      <div>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
