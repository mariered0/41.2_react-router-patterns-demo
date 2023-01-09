import React from 'react';
import { Redirect, Navigate } from 'react-router-dom'

const AdminDashboard = () => {
    const isAdmin = Math.random() < 0.5;
    return isAdmin ? <h1>Welcome Admin!</h1> : <Navigate to="/" />
}

export default AdminDashboard;