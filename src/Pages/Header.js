import React from 'react';

const Header = () => {
    return (
        <div id='home'>
            <div className="xl:flex">
                <div className="xl:w-[50%]">
                    <div className="absolute xl:relative flex-col">
                        <div className="relative flex flex-col space-y-4 2xl:space-y-6 text-center justify-center items-center lg:h-[650px] 2xl:h-[900px] h-[650px]  w-[80%] m-auto">
                            <h1 className=" lg:leading-normal text-white xl:text-black text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl leading">Championing <br className='hidden lg:flex' />  Learning, Shaping <br className='hidden lg:flex' /> Tomorrow</h1>
                            {/* <p className="xl:text-md 2xl:text-xl text-[12px] w-[90%] xl:w-[100%]">Unveil Your Potential in an Innovative Learning Environment that Nurtures Critical Thinking,<br className='hidden lg:flex' /> Creativity, and Lifelong Success</p> */}
                            <a href="#register" className="">
                                <button className="xl:border-[#004B4A] border border-white text-white xl:text-black xl:px-8 xl:py-3 px-6 2xl:px-14 2xl:py-4 py-3 rounded-full hover:scale-105 ">Get Started</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[50%] ">
                    <img src="hero2.png" alt="" className="2xl:h-[100vh] xl:h-[95vh] h-[80vh] object-cover transitions xl:rounded-b-[400px]" />
                </div>
            </div>
        </div>
    );
};

export default Header;