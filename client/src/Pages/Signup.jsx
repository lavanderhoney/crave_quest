import React from 'react'
import FormInput from '../Components/FormInput'
import Button from '../Components/Button'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
export default function Signup() {
    const { GoogleSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
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
