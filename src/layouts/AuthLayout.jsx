import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from "../assets/authImage.png"

const AuthLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-base-300 max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm'>
            <Logo></Logo>
            <div className='flex justify-center items-center'>
                <div className='flex-1 border-2 border-red-600'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 border-2 border-green-600'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;