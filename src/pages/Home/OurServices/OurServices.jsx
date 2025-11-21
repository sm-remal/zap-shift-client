import React from 'react';
import serviceIcon from '../../../assets/service.png'

const OurServices = () => {
    const services = [
        {
            title: "Express  & Standard Delivery",
            description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
        },
        {
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
        },
        {
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support."
        },
        {
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        },
    ]
    return (
        <div className='mx-4 p-6 md:p-20 my-16 bg-secondary rounded-2xl'>
            <div className='text-center space-y-4 pb-10'>
                <h2 className='text-3xl font-bold text-white'>Our Services</h2>
                <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br className='hidden md:flex' /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    services.map((service, index) =>

                        <div key={index} className='p-5 rounded-2xl bg-white space-y-3 text-center py-10 hover:bg-primary'>
                            <div className='flex justify-center items-center'>
                                <img src={serviceIcon} alt="" className='p-4 rounded-full bg-red-50' />
                            </div>
                            <h2 className='text-md font-bold text-gray-600'>{service.title}</h2>
                            <p className='text-sm'>{service.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurServices;