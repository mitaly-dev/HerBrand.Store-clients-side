import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    let location = useLocation()
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;