import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../../context/AuthContent';
const ForgotPassword = () => {
  const notify = () => toast("Send veryRest password gmail check your gmail please !",{
    position: "top-left",
   autoClose: 2000,
  });
  

  const [gmail , setGmail] = useState('')
  const [error , setError] = useState('')

 const {ForGotPassWord} = useAuthContext()


const handleSubmit = async(e)=>{
  e.preventDefault()
  try{
    await ForGotPassWord(gmail)
    notify()
    setGmail('')
     setError('')
  }
  catch(err){
    setError(err.message)
  }
}


    return (
        <div>
          
        <h2 className="text-3xl text-black_soft font-bold ">
        Login to your account!
        </h2>
          <span className=" text-sm cursor-pointer my-3 block" href="/register">
              Don’t have an account? <NavLink className="text-blue-500" to="/register/signup">Sign Up Free!</NavLink>
          </span>
        <form onSubmit={handleSubmit} className="flex flex-col fromGroup">
          <input onChange={(e)=> setGmail(e.target.value)} value={gmail} type="email" name="email" placeholder="Email"   />
          <p className='text-red-600'>{error}</p>
          <button className="btnSignUp ">Forgot Your Password</button>
         <span className='mt-5'>
           Have a passWord  <NavLink className="text-2xl text-red-400 font-600" to="/register/login">Login</NavLink> Please
         </span>
        </form>
        <div>
      
       
        <ToastContainer />
        
      </div>
      </div>
    );
};

export default ForgotPassword;