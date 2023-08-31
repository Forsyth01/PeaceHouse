import React from 'react';

const Admission = () => {
    return (
        <div id='register' className='xl:py-24 py-12'>
            <div className="w-[80%] m-auto md:flex gap-10 justify-between items-center space-y-5 ">
                <div className="md:w-[50%] space-y-4">
                    <div className="">
                        <h3 className="text-sm 2xl:text-xl">ADMISSION</h3>
                        <h1 className="font-medium text-xl 2xl:text-4xl">Join Our Community of <br/> Faith and Learning</h1>
                    </div>
                    <p className="text-justif text-sm 2xl:text-xl 2xl:leading-relaxed xl:leading-relaxed leading-relaxed">Our admission process is designed to identify individuals who embody our core values of faith, compassion, and excellence. We seek students who are eager to grow intellectually and spiritually, contributing positively to our diverse and inclusive learning environment.</p>
                    <button className="border border-[#07294D] xl:px-8 xl:py-3 px-8 2xl:px-14 2xl:py-4 py-3  rounded-full  hover:scale-105">Register</button>
                </div>
                <div className="md:w-[50%]">
                    <img src="reading.png" alt="" className="xl:h-[60vh] lg:h-min object-cover md:w-full" />
                </div>
            </div>
        </div>
    );
};

export default Admission;