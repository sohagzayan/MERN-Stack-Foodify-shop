import React, { useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const InventoryProduct = ({item}) => {
    const [like , setLike] = useState(false)
    const navigate = useNavigate()
    const {image , foodCategory , quantity , price , supplier , title , _id , des} = item
    // console.log(des.slice(0 , 200));
    // const sliceDes = des.slice(0 , 200)
    return (
        <div className='mx-4 inventory_product'>
            <div className='pl-5 pr-5 mt-5'>
                <img className='rounded-md' src={image} alt="img" />
            </div>
            <div className='p-5'>
                <span className='card-date'>March.02.2021</span>
                <h4 className='tracking-wider font-light'>{foodCategory}</h4>
                <h3 className='text-2xl  font-bold'>{title}</h3>
                <h5 className='mb-2'><span className='text-lg font-semibold '>Supplier :</span>{supplier}</h5>
                <p className='my-2 text-black_soft text-sm'>{des?.slice(0 , 120)}........</p>
                <div className='flex items-center justify-between mb-3'>
                    <span className='text-3xl text-green_soft font-semibold'>${price}</span>
                    <span className='text-md text-green_soft tracking-wider'><span className='text-3xl font-bold'>Q</span>Quantity : <span className='text-2xl font-bold'>{quantity}</span></span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <button onClick={()=> {
                        console.log("hello word");
                        navigate(`/inventory/${_id}`)
                    }} to={"/inventory/"+_id} className='btn-product flex items-center cursor-pointer'>Update <AiOutlineDoubleRight className='text-lg ml-5 ' /> </button>
                    <span onClick={()=> setLike(!like)} className={like ? 'React-Love active cursor-pointer' : 'React-Love  cursor-pointer'}><FiHeart className='text-3xl love  text-yellow_soft' /></span>
                </div>
            </div>
        </div>
    );
};

export default InventoryProduct;

// [
//     {
//       "image" : "https://i.postimg.cc/pL6rxZWb/pro-img-03.jpg" ,
//       "foodCategory" : "Breakfast Cereals",
//       "title" : " Sounded like a good title for a board for multi-varieties of apples..", 
//       "supplier" : "Leanne Graham" ,
//       "price" : "4",
//       "quantity" : "30",
//       "gmail" : "gdsohag360@gmail.com"
    
//     },
//     {
//       "image" : "https://i.postimg.cc/26p5LSL0/pro-img-07.jpg" ,
//       "foodCategory" : "dryed almod",
//       "title" : "Fresh dryed almod (30gm)", 
//       "supplier" : "Ervin Howell" ,
//       "price" : "7",
//       "quantity" : "10",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/t4TJLfHN/pro-img-1.jpg" ,
//       "foodCategory" : "litchi",
//       "title" : "Fresh litchi 100% organic.", 
//       "supplier" : "Jonker Mahabub" ,
//       "price" : "3",
//       "quantity" : "25",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/SxJQZMWZ/pro-img-11.jpg" ,
//       "foodCategory" : "guava",
//       "title" : "Sp.red fresh guava", 
//       "supplier" : "Samantha" ,
//       "price" : "15",
//       "quantity" : "30",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/nzvh4fvp/pro-img-2.jpg" ,
//       "foodCategory" : "Eggplant",
//       "title" : "Fresh & healty Eggplant food", 
//       "supplier" : "Karianne" ,
//       "price" : "12",
//       "quantity" : "33",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/wMgTF4VJ/pro-img-4.jpg" ,
//       "foodCategory" : "litchi",
//       "title" : "Fresh litchi 100% organic and fresh food", 
//       "supplier" : "Chelsey Dietrich" ,
//       "price" : "20",
//       "quantity" : "12",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/sxmfLP6L/pro-img-5.jpg" ,
//       "foodCategory" : "fresh tomato",
//       "title" : "Vegetable tomato fresh and teste", 
//       "supplier" : "Leopoldo_Corkery" ,
//       "price" : "26",
//       "quantity" : "44",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/gcH0rdzK/pro-img-6.jpg" ,
//       "foodCategory" : "grassbean",
//       "title" : "Natural grassbean and total new item", 
//       "supplier" : "Elwyn.Skiles" ,
//       "price" : "50",
//       "quantity" : "17",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/CKn1Kq5Z/pro-img-7-1.jpg" ,
//       "foodCategory" : "dryed almod",
//       "title" : "new product Fresh dryed almod (50gm)", 
//       "supplier" : "Elwyn.Skiles" ,
//       "price" : "50",
//       "quantity" : "17",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/656pvSTx/pro-img-8.jpg" ,
//       "foodCategory" : "juice",
//       "title" : "Orange juice (5ltr) foraner item", 
//       "supplier" : "Elwyn.Skiles" ,
//       "price" : "8",
//       "quantity" : "22",
//       "gmail" : "gdsohag360@gmail.com"
//     },
//     {
//       "image" : "https://i.postimg.cc/FsPsgZJd/pro-img-9.jpg" ,
//       "foodCategory" : "coconet",
//       "title" : "Organic coconet (5ltr) juice fresh", 
//       "supplier" : "Elwyn.Skiles" ,
//       "price" : "37",
//       "quantity" : "22",
//       "gmail" : "gdsohag360@gmail.com"
//     },
// ]