import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from "../assets/authImage.png"

const AuthLayout = () => {
    return (
         <div className='min-h-screen bg-base-300 flex flex-col'>

            <div className="max-w-screen-2xl w-full mx-auto">

                {/* <Logo /> */}

                <div className='flex flex-col md:flex-row min-h-screen'>

                    {/* LEFT SIDE FORM */}
                    <div className='flex-1 min-h-[60vh] md:min-h-screen'>
                        <div className='ml-5 mt-2'>
                            <Logo />
                        </div>
                        <Outlet />
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className='flex-1 min-h-[40vh] md:min-h-screen bg-green-50 hidden md:flex justify-center items-center'>
                        <img src={authImage} alt="" className="w-full h-auto" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AuthLayout;