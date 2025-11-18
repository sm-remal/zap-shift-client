import React from 'react';
import { motion } from "framer-motion";

import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'

const Brands = () => {
    const logos = [
        amazon, casio, amazon_vector,
        moonstar, randstad, star, star_people
    ];

    return (
        <div className='my-10 py-10'>
            <h2 className='text-2xl font-bold text-center mb-10'>
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
        </div>
    );
};

export default Brands;
