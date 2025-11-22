import React, { use } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="mx-4 mb-10">
      {/* Heading */}
      <div className="text-center my-14 space-y-5.5">
        <h2 className="text-3xl font-bold">What our customers are sayings</h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce
          <br className="hidden md:flex" />
          pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="relative">
        {/* SWIPER */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper my-16"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewCard reviews={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS + DOTS */}
        <div className="flex items-center justify-center gap-42 mt-8">
          {/* LEFT ARROW */}
          <button
            className="prevBtn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
            aria-label="previous"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="#003B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* DOTS */}
          <div className="custom-pagination swiper-pagination flex items-center"></div>

          {/* RIGHT ARROW */}
          <button
            className="nextBtn w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-md hover:brightness-95 transition cursor-pointer"
            aria-label="next"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#003B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
