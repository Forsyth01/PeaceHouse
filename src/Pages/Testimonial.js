import React from 'react';

const Testimonial = () => {
    return (
        <div className='bg-[#004B4A] xl:py-24 py-12 '>
            <div className="w-[80%] m-auto text-center md:text-left flex flex-col justify-center">
                {/* <div className="md:flex gap-10 justify-betweer items-center m-auto space-y-10 xl:space-y-0"> */}
                <div className="md:grid grid-cols-4 gap-10 items-center space-y-10 xl:space-y-0">
                    <div className="text-white space-y-4 text-centey  m-aut  2xl:text-4xl col-span-2">
                        <h2 className="">More than over 3500+ Students</h2>
                        <h1 className="font-medium text-white leading-tigh text-2xl">Empowering Peaceful Leaders: <br className='xl:flex hidden'/> Hear Their Stories</h1>
                        <button className="rounded-full border-white border xl:py-3 xl:px-8 px-8 2xl:px-14 2xl:py-4 py-3  hover:scale-105">View all</button>
                    </div>
                    <div className="text-white m-aut col-span-2">
                        <div className="xl:border border border-white rounded-xl  m-auto text-center space-y-5 p-5 xl:py-10 2xl:py-20">
                            <p className="text-sm 2xl:text-xl line-clamp-5 xl:line-clamp-6 2xl:line-clamp-none leading-relaxed 2xl:leading-relaxed xl:leading-losse opacity-90">I am incredibly grateful for my time at Peace House University. The nurturing and inclusive environment helped me grow not only as a student but as an individual. The focus on promoting peace and understanding among diverse cultures instilled in me a sense of empathy and global responsibility. </p>
                            <div className="space-y-2">
                                <h2 className="font-medium">John Smith</h2>
                                <p className="text-md"> Peace House University Graduate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;