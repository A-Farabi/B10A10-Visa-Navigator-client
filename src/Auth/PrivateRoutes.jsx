import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const{user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h1>loading</h1>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children
};

export default PrivateRoutes;