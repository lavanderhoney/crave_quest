import React from 'react'
import { UserAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function Protected({ children }) {
    const { user } = UserAuth();
    if (!user) {
        console.log("user is null");
        return <Navigate to="/" />
    }
    return (
        children
    )
}