import React from 'react'
import FormInput from '../Components/FormInput'
import Button from '../Components/Button'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { createUser } from '../services/firestore'
export default function Signup() {
    const { GoogleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const hasCreatedUser = useRef(false);

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (user && !hasCreatedUser.current) {
            // Add user to Firestore if not already added
            createUser({
                userId: user.uid,
                email: user.email,
                name: user.displayName || '',
            });
            hasCreatedUser.current = true;
            navigate('/userdash');
        }
    }, [user, navigate]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-gray-700 text-center text-5xl m-10'>Get started with CraveQuest!</h2>
            <div className='border-[1px] w-[500px]'>
                <form className='flex flex-col items-center justify-center p-10'>
                    <FormInput label="Fullname: " />
                    <FormInput label="E-Mail: " />
                    <FormInput label="Password: " />
                    <div className='mt-10'>
                        <Button text="Submit" />
                    </div>
                </form>
            </div>
            <p className='mt-5'>Or login with google: </p>
            <div className='m-5'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    )
}
