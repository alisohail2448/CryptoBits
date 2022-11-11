import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import m1 from '../images/me11.jpg';
import m4 from '../images/me4.png';
import m2 from '../images/me22.jpg';
import m3 from '../images/me3.jpg';
import m5 from '../images/me5.jpg';
import m6 from '../images/me6.jpeg';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper max-w-[1140px] rounded-2xl h-[440px] shadow-md mt-28"
            >
                <SwiperSlide  >
                    <img
                        className="object-fit w-full h-[96]  "
                        src={m4}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        className="object-fit md:w-full h-[96] "
                        src={m5}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit md:w-full h-[96]"
                        src={m6}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit md:w-full h-[96]"
                        src={m3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}