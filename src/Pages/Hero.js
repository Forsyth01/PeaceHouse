import React from 'react';

const Hero = () => {
    return (
        <div >
            <div className="absolute w-[100%] m-auto ">
                <div className="flex flex-col space-y-4 text-center  justify-center items-center h-[824px] text-white">
                    <h1 className="font-bold text-white text-[64px]">Championing Learning, Shaping <br /> Tomorrow</h1>
                    <p className="">Unveil Your Potential in an Innovative Learning Environment that Nurtures Critical Thinking,<br /> Creativity, and Lifelong Success</p>
                    <a href="#register" className="">
                    <button className="bg-[#004B4A] px-12 py-4 rounded-xl">Get Started</button>
                    </a>
                </div>
            </div>
            <div className="">
            <img src="" alt="" className="transition h-[824px]"/>
            {/* <div className="transition"></div> */}
            </div>
        </div>
    );
};

export default Hero;