import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {

    const {user, signOutUser} = useAuth();

    const handleSignOut = () => {
        signOutUser()
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        }) 
    }


    const links = <>
        
        <li className='font-semibold'><NavLink>Services</NavLink></li>
        <li className='font-semibold'><NavLink to={"/coverage"}>Coverage</NavLink></li>
        <li className='font-semibold'><NavLink to={"/about"}>About Us</NavLink></li>
        <li className='font-semibold'><NavLink to={"/send-parcel"}>Send Parcel</NavLink></li>
        <li className='font-semibold'><NavLink>Pricing</NavLink></li>
        <li className='font-semibold'><NavLink>Blog</NavLink></li>
        <li className='font-semibold'><NavLink>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}  
                    </ul>
                </div>
                <a className="px-4 cursor-pointer"><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? <Link onClick={handleSignOut} to={"/login"} className="btn border-2 border-primary hover:bg-primary">Sign Out</Link> : <Link to={"/login"} className="btn border-2 border-primary hover:bg-primary">Login</Link>
                }
                <Link to={"/rider"} className="btn btn-primary text-black">Be A Rider<span className="ml-1 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">
                            &#8599; 
                        </span></Link>
            </div>
        </div>
    );
};

export default NavBar;