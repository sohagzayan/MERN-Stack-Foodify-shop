import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import styleShape from '../../assets/image/table-leaves-shape.png';
import "./OpeningTable.css";
const OpeningTable = () => {
    return (
        <div className='openingTable my-24'>
            <span className='styleShape1'><img className='' src={styleShape} alt="" /></span>
            <span className='styleShape2'><img className='' src={styleShape} alt="" /></span>
            <div className='container mx-auto text-center'>
                <span className='smallBtn'>BOOK TABLE</span>
                <h2 className='mb-24 text-4xl  '>Opening Table</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  items-center'>
                    <div className='md:mb-0 mb-8' >
                        <h4 className='text-3xl font-semibold text-black_soft mb-3'>Monday To Tuesday</h4>
                        <span className='text-xl text-black_soft'>9:00 am - 22:00 pm</span>
                    </div >
                    <div className='flex md:mb-0 mb-8 flex-col items-center justify-center'>
                        <h4 className='phoneBtn'><FaPhoneAlt className='text-2xl' /></h4>
                        <span className='text-xl text-black_soft'>+503 377 1500</span>
                    </div>
                    <div className='md:mb-0 mb-8'>
                        <h4 className='text-3xl font-semibold text-black_soft mb-3'>Friday To Sunday</h4>
                        <span className='text-xl text-black_soft'>11:00 am - 20:00 pm</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningTable;