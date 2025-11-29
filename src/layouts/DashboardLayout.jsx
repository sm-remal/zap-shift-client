import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { BsBoxSeam } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RiSidebarUnfoldLine } from "react-icons/ri";
import Logo from '../components/Logo/Logo';
import { FaMotorcycle, FaRegCreditCard } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <RiSidebarUnfoldLine size={20}/>
                    </label>
                    <div className="px-4"><Logo></Logo></div>
                </nav>
                {/* Page content here */}

                <Outlet></Outlet>

                
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <IoHomeOutline size={20}/>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>

                        {/* Out Dashboard Links  */}
                        <li>
                            <NavLink 
                            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                            data-tip="My Parcels"
                            to={"/dashboard/my-parcels"}>
                            <BsBoxSeam size={20}/>
                            <span className="is-drawer-close:hidden">My parcels</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                            data-tip="Payment History"
                            to={"/dashboard/payment-history"}>
                            <FaRegCreditCard size={20} />
                            <span className="is-drawer-close:hidden">Payment History</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                            data-tip="Approve Riders"
                            to={"/dashboard/approve-riders"}>
                            <FaMotorcycle size={20} />
                            <span className="is-drawer-close:hidden">Approve Riders</span>
                            </NavLink>
                        </li>


                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <IoSettingsOutline size={20}/>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;