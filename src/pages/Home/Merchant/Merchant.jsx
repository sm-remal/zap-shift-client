import React from 'react';
import location_merchant from "../../../assets/location-merchant.png"

const Merchant = () => {
    return (
        <div className=' max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-16 md:gap-0 items-center bg-secondary rounded-2xl mb-20 py-12 mx-4 text-center md:text-left'>
                <div className='flex flex-1 flex-col justify-center space-y-5 md:pl-20'>
                <h2 className='text-4xl font-bold text-white'>Merchant and Customer Satisfaction <br className='hidden md:flex' /> is Our First Priority</h2>
                <p className='text-white'>We offer the lowest delivery charge with the highest value along with <br className='hidden md:flex' /> 100% safety of your product. Pathao courier delivers your parcels in every <br className='hidden md:flex' /> corner of Bangladesh right on time.</p>
                <div className='flex flex-col md:flex-row gap-5 md:gap-3 mx-6 md:mx-0'>
                    <button className='btn rounded-full bg-primary'>Become a Merchant</button>
                    <button className='btn outline-primary outline-2 rounded-full hover:bg-primary'>Earn With ZapShift Courier</button>
                </div>
            </div>
            <div className='flex-1'>
                <img src={location_merchant} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Merchant;