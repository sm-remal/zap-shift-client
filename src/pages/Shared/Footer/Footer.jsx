import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-primary-content bg-gray-900 not-last:p-10 py-16">
            <aside className='space-y-4'>
                <Logo></Logo>
                <p className="">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br className='hidden md:flex' /> business shipments — we deliver on time, every time.
                </p>
                <div>
                    <ul className='flex flex-wrap justify-center items-center gap-5 py-3'>
                        <Link>Services</Link>
                        <Link>Coverage</Link>
                        <Link>About Us</Link>
                        <Link>Pricing</Link>
                        <Link>Blog</Link>
                        <Link>contact</Link>
                    </ul>
                    
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {/* LinkedIn */}
                    <Link>
                        <div className="bg-[#0A66C2] p-2 rounded-full">
                            <FaLinkedin className="text-white" size={25} />
                        </div>
                    </Link>

                    {/* X (Twitter) */}
                    <Link>
                        <div className="bg-white p-2 rounded-full">
                            <FaXTwitter className="text-gray-950" size={25} />
                        </div>
                    </Link>

                    {/* Facebook */}
                    <Link>
                        <div className="bg-[#1877F2] p-2 rounded-full">
                            <FaFacebookSquare className="text-white" size={25} />
                        </div>
                    </Link>

                    {/* YouTube */}
                    <Link>
                        <div className="bg-[#FF0000] p-2 rounded-full">
                            <FaYoutube className="text-white" size={25} />
                        </div>
                    </Link>
                </div>

            </nav>
        </footer>
    );
};

export default Footer;