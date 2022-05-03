import React from 'react';
import { FaCarrot, FaRegHandPointRight } from 'react-icons/fa';
import providedImage from '../../assets/image/foodGroup.png';
import titleBorder from '../../assets/image/title-border.png';
import './WeProvide.css';
const WeProvide = () => {
    return (
        <div className='container mx-auto px-4'>
            <h2 className=' text-4xl tracking-widest  flex items-center'>We Provide <FaCarrot className='ml-2 text-green_soft' /></h2>
            <hr className='mt-3 border-green_soft  opacity-50' />
          <div className='flex -mt-5 lg:flex-row  flex-col-reverse justify-between items-center'>
          <div  className=''>
                <img src={titleBorder} alt="" />
                <h2 className='text-4xl mb-3 tracking-wider font-bold text-black_soft leading-snug'>We Provide Good Food For Your Family!</h2>
                <p className=' text-sm'>Organic food is food produced by methods that comply with the standards  <br /> of organic farming. Standards  vary worldwide, but organic  farming features practices that cycle resources.</p>
                <ul className='my-6'>
                    <li className='flex items-center text-sm text-black_soft mb-1'>
                        <FaRegHandPointRight  className='mr-2 text-green_soft' />
                        Premium Quality
                    </li>
                    <li className='flex items-center text-sm text-black_soft mb-1'>
                        <FaRegHandPointRight  className='mr-2 text-green_soft' />
                        Harvest Everyday
                    </li>
                    <li className='flex items-center text-sm text-black_soft mb-1'>
                        <FaRegHandPointRight  className='mr-2 text-green_soft' />
                        100% Organic
                    </li>
                    <li className='flex items-center text-sm text-black_soft mb-1'>
                        <FaRegHandPointRight className='mr-2 text-green_soft' />
                        Fast Delivery
                    </li>
                </ul>
                <button className='btn'>BROWSE OUR FOODS</button>
            </div>

            <div className='provideImage '>
                <img style={{width : "700px"}} className="w-full" src={providedImage} alt="" />
            </div>
            
          </div>
        </div>
    );
};

export default WeProvide;