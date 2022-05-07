import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuthContext } from "../../context/AuthContent";
const Signup = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const { sinUp , googleLogin } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(error);

  let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6).max(12),
    ConformPassword: yup.string().required(),
    email: yup.string().required("Please enter your email !").email(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  const onSubmit = async (data) => {
    const { username, email, password, firstName, ConformPassword } = data;
    if (password !== ConformPassword) {
      return setError("password don't match ! ");
    }
    try {
      await sinUp(email, password);
      navigate("/register/login");
    } catch (err) {
      setError(err.message);
    }
  };
  
  const googleLoginFacebook = async()=>{
    
   try{
      await googleLogin()
      navigate(from , {replace : true})
   }
   catch(err){
    setError(err.message)
   }

  }



  return (
    <div>
      <h2 className="text-3xl text-black_soft font-bold mb-5">
        Sign up for free!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col fromGroup"
      >
        <input
          type="text"
          name="username"
          placeholder="User Name"
          {...register("username")}
        />
        <p className="errMessage">{errors.username?.message}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <p className="errMessage">{errors.email?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="errMessage">{errors.password?.message}</p>

        <input
          type="password"
          name="ConformPassword"
          placeholder="Conform Password"
          {...register("ConformPassword")}
        />
        <p className="errMessage">{errors.ConformPassword?.message}</p>
        <p className="text-red-600 mb-6">{error}</p>

        <p className="text-sm">
          I agree to the
          <a className="text-blue-500 underline" href="/">
            privacy policy
          </a>
          and
          <a className="text-blue-500 underline" href="/">
            terms of service
          </a>
        </p>
        <button className="btnSignUp">Signup with email</button>
        <span  className="flex items-center justify-center mt-5">
          <GoogleButton
            onClick={googleLoginFacebook}
          />
        </span>
        <NavLink
          className="mt-4 text-blue-700 cursor-pointer hover:underline"
          to="/register/login"
        >
          Already have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
