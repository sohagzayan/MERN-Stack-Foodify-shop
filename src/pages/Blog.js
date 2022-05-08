import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const Blog = () => {
    return (
        <>
        <Header />
        <div className=' mt-10 container mx-auto px-5'>
            <ul>
                <li>
                    <h2 className='text-2xl text-black_soft'>Difference between javascript and nodejs ?</h2>
                    <p  className='py-6'>
                        <span>node...</span>
                        It is a JS runtime environment that lets Javascript to be run on the server-side. It is cross-platform, and it thus allows the JS code to run outside any browser easily. There are various modules in NodeJS, and it is mainly utilised in the process of web development.
                        <span>js</span>
                        It is a scripting language, but JS is basically the ECMA script’s updated version. Javascript is mainly utilised in making the HTML web pages more dynamic and interactive. It is a high-level language, and it makes use of the Oops concept. Yet, it is based primarily on the concept of prototype inheritance.
                    </p>
                </li>
                <li>
                    <h2 className='text-2xl text-black_soft'>When should you use nodejs and when should you use mongodb ?</h2>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium facilis fugiat maxime, maiores corporis! Esse tempore libero sunt blanditiis?</p>

                </li>
                <li>
                    <h2 className='text-2xl text-black_soft'>Differences between sql and nosql databases. ?</h2>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium facilis fugiat maxime, maiores corporis! Esse tempore libero sunt blanditiis?</p>

                </li>
                <li>
                    <h2 className='text-2xl text-black_soft'>What is the purpose of jwt and how does it work ?</h2>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium facilis fugiat maxime, maiores corporis! Esse tempore libero sunt blanditiis?</p>

                </li>
            </ul>
        </div>
        <Footer />
        </>
    );
};

export default Blog;