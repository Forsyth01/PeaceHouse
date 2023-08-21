import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import "swiper/css/bundle";

const Activities = () => {
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
        <div className='w-[85%] m-auto py-24' >
            <div className="text-center xl:w-[70%] m-auto">
                <h1 className="font-bold text-2xl 2xl:text-4xl my-2">
                    Students Embrace Diverse Campus Life
                </h1>
                <p className="text-sm xl:w-[80%] m-auto leading-6 2xl:text-xl">Explore a vibrant tapestry of campus life at Peace House Foundation University, where students of all backgrounds engage in dynamic activities, from interactive lectures, spirited sports to creative arts, clubs, and community service.</p>
            </div>
            {/* <div className="flex gap-10 justify-center mt-10">
                <img src="basketball.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover" />
                <img src="baseball.png" alt="" className="xl:h-[60vh] h-[30vh] lg:h-[50vh] lg:flex hidden" />
            </div>

            <div className="flex justify-center gap-3 mt-10">
                <img src="leftarrow.png" alt="" className="h-[6vh] cursor-pointer" />
                <img src="rightarrow.png" alt="" className="h-[6vh] cursor-pointer" />
            </div> */}
            <div className="text-center">
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
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
                className='my-10 '
            >
                <SwiperSlide>
                    <img src="basketball.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="baseball.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" />
                </SwiperSlide>
                <SwiperSlide><img src="golf.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" /></SwiperSlide>
                <SwiperSlide>  <img src="friends.png" alt="" className="xl:h-[60vh] lg:h-[50vh] object-cover cursor-pointer" /></SwiperSlide>
                <div className="flex justify-center gap-3 mt-4">
                    <img src="leftarrow.png" onClick={goPrev} alt="" className="xl:h-[6vh] h-[3vh h-[32px] cursor-pointer" />
                    <img src="rightarrow.png" onClick={goNext} alt="" className="xl:h-[6vh] h-[3vh h-[32px] cursor-pointer" />
                </div>
            </Swiper>
            </div>
        </div>
    );
};

export default Activities;