import React from 'react';
import bookingIcon from "../../../assets/bookingIcon.png"

const HowItWorks = () => {
    const information = [
        {
            title: "Booking Pick & Drop",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
    ]
    return (
        <div className='px-4'>
            <h2 className='text-3xl text-gray-700 font-bold mb-6'>How It Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    information.map((info, index) =>

                        <div key={index} className='p-5 rounded-2xl bg-white space-y-3'>
                            <img src={bookingIcon} alt="" />
                            <h2 className='text-md font-bold text-gray-600'>{info.title}</h2>
                            <p className='text-sm'>{info.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HowItWorks;