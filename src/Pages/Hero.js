import React from 'react';

const Hero = () => {
    return (
        <div >
            <div className="absolute w-[100%] m-auto ">
                <div className="flex flex-col space-y-4 2xl:space-y-6 text-center  justify-center items-center lg:h-[650px] 2xl:h-[800px] h-[650px] text-white w-[80%] m-auto"> 
                    <h1 className="font-bold lg:leading-normal text-white text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl ">Championing Learning, Shaping <br className='hidden lg:flex'/> Tomorrow</h1>
                    <p className="xl:text-md 2xl:text-xl text-[12px] w-[90%] xl:w-[100%]">Unveil Your Potential in an Innovative Learning Environment that Nurtures Critical Thinking,<br className='hidden lg:flex'/> Creativity, and Lifelong Success</p>
                    <a href="#register" className="">
                        <button className="bg-[#004B4A] xl:px-12 xl:py-4 px-4 py-2 rounded-xl hover:scale-105 ">Get Started</button>
                    </a>
                </div>
            </div>
            <div className="">
                <img src="" alt="" className="transitions lg:h-[600px] 2xl:h-[800px] h-[600px] w-[100%]" />
            </div>
        </div>
    );
};

export default Hero;