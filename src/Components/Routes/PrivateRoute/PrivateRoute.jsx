import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loader} =useContext(AuthContext)
    if(loader){
        return <span className="loading loading-infinity  ml-28 w-60"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>

    
};

export default PrivateRoute;