import React from 'react';

const Support = () => {
    return (
        <div className='w-[80%] m-auto xl:py-24 py-12'>
            <div className="xl:flex items-center gap-10 space-y-5 xl:space-y-0">
                <div className="space-y-4">
                    <div className="">
                        <h1 className="font-medium leading-tight text-xl 2xl:text-4xl">Join Us in <br /> Empowering Future<br /> Leaders</h1>  
                    </div>
                    <div className="xl:w-[90%]">
                        <p className="w-[100%] 2xl:text-xl">
                            We aim to extend our impact beyond our campus walls through community outreach programs, volunteer projects, and partnerships. Your contribution will empower us to make a tangible difference in local communities.
                            <br />
                            <br />
                            Your support is a beacon of hope for the bright minds of tomorrow. Every contribution will have a profound impact on the lives of our students and the future of our world
                        </p>
                    </div>
                    <div className="">
                        <button className="xl:px-8 xl:py-3 px-8 2xl:px-14 2xl:py-4 py-3  rounded-full bg-none border border-black  hover:scale-105">Donate</button>
                    </div>
                </div>
                <div className="w-[100%] hidden 2xl:flex">
                    <img src="donate.png" alt="" className="m-auto xl:h-[70vh] xl:w-[90%] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Support;