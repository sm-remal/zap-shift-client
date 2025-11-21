import React from 'react';
import { motion } from "framer-motion";

import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'

import live_tracking from "../../../assets/live-tracking.png"
import safe_delivery from "../../../assets/safe-delivery.png"

const Brands = () => {
    const logos = [
        amazon, casio, amazon_vector,
        moonstar, randstad, star, star_people
    ];

    const customerSupport = [
        {   
            image: live_tracking,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
        },
        {
            image: safe_delivery,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
        },
        {
            image: safe_delivery,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        },
    ]
    return (
        <div className='my-10 max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl font-bold text-center mb-12'>
                We've helped thousands of sales teams
            </h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="marquee w-full overflow-hidden">
                    <div className="marquee-track flex">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className=""
                                style={{
                                    width: "180px",
                                    height: "80px",
                                }}
                            >                            
                                    <img
                                    src={logo}
                                    alt="brand-logo"
                                    className="w-[120px] h-10"
                                />                              
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <div className="w-full border-t-2 border-dashed border-gray-400 my-4"></div>

            {/* Customer Support */}
            <div className='my-24'>
                {
                    customerSupport.map((support, index) => 
                    <div key={index}>
                        <div className='flex flex-col md:flex-row items-center gap-16 p-12 rounded-2xl bg-white my-10'>
                            <img src={support.image} alt="" />
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-bold'>{support.title}</h2>
                                <p>{support.description}</p>
                            </div>
                        </div>
                    </div>)
                }
                 <div className="w-full border-t-2 border-dashed border-gray-400 my-20"></div>
            </div>
        </div>
    );
};

export default Brands;
