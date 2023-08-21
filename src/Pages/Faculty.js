import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import "swiper/css/bundle";

const Faculty = () => {
    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slidePrev();
        }
    }

    return (
        <div id='faculty' className='xl:py-24 py-12'>
            <div className="w-[80%] m-auto">
                <div className="space-y-3 my-5">
                    <div className="">
                        <h3 className="tracking-wid text-sm 2xl:text-xl">FACULTY</h3>
                        <h1 className="font-bold text-xl 2xl:text-4xl 2xl:leading-normal">OUR SKILLED FACULTY HELPS STUDENTS <br />IN MANY DICIPLINES<br />Learning</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#06213E] py-20">
                <div className="">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 1,
                            },
                            // When window width is >= 480px
                            480: {
                                slidesPerView: 2,
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        className=''
                    >
                        <SwiperSlide>
                            <img src="swipe1.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="swipe2.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" />
                        </SwiperSlide>
                        <SwiperSlide><img src="swipe1.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" /></SwiperSlide>
                        <SwiperSlide>  <img src="swipe2.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" /></SwiperSlide>


                        <div className="flex justify-center gap-3 mt-4">
                            <img src="al.png" onClick={goPrev} alt="" className="xl:h-[6vh] h-[3vh h-[32px] cursor-pointer" />
                            <img src="ar.png" onClick={goNext} alt="" className="xl:h-[6vh] h-[3vh h-[32px] cursor-pointer" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Faculty;