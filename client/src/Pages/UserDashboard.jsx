import React from 'react'
import Button from '../Components/Button'
import { UserAuth } from '../context/AuthContext';

export default function UserDashboard() {
    const { logOut, user } = UserAuth();
    const handleLogOut = async () => {
        try {
            console.log("inside handlelogout");
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Welcome {user?.displayName}</h1>
            <Button text="Log out" onClick={handleLogOut} />
        </div>
    )
}
