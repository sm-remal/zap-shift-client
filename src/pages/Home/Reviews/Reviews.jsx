import React, { use } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div className='mx-4'>
            <div className='text-center my-14 space-y-5.5'>
                <h2 className='text-3xl font-bold'>What our customers are sayings</h2>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br className='hidden md:flex' /> pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}   // Default for small devices
                    breakpoints={{
                        640: { slidesPerView: 1 }, // small devices
                        768: { slidesPerView: 2 }, // medium devices
                        1024: { slidesPerView: 3 }, // large devices
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper my-16"
                >
                    {
                        reviews.map(item => (
                            <SwiperSlide key={item.id}>
                                <ReviewCard reviews={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;