import React from 'react';
import image from '../../assets/image/slider13-removebg-preview.png';
const Hero = () => {
    return (
        <div className=' container px-4 mx-auto flex justify-between items-center mt-16'>
            <div>
                <h2  className=' mb-6 text-black_soft heroTitle'>Welcome To <br /> Our <span className='text-green_soft heroTitleHeilight'>Foodify</span> <br /> Restaurant.</h2>
                <p className='text-black_soft font-light'>Is it amet, consectetur adipisicing elit. Dolore atque maiores libero <br /> saepe qui illo recusandae odit. Voluptatibus hic veritatis officia eius <br /> autem saepe, in quasi? Ab magni dolore odit!</p>
                <button className='btn btn-hero mt-5'>Check Our Menu</button>
            </div>
            <div>
                <img src={image} alt="img" />
            </div>
        </div>
    );
};

export default Hero;