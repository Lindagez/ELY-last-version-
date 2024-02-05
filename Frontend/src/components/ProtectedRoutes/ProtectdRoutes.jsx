import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoutes({ component: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem('Token') !== null;


    if (isAuthenticated) {
        return <component {...rest} />
    }

    else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoutes;