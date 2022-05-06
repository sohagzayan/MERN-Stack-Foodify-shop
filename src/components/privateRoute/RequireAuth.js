import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContent';
import Loading from '../Loading/Loading';



const RequireAuth = ({children}) => {
    const location = useLocation()
    const {username , loading} = useAuthContext()
    if(loading){
        return <Loading />
    }
    
    console.log(username);
    console.log("bangladesh hello word");

    return username ? children : <Navigate to="/register/login"  state={{from : location}} />
}

export default RequireAuth;