import React from 'react';

const Testimonial = () => {
    return (
        <div className='bg-[#004B4A] xl:py-24 py-12 '>
            <div className="w-[80%] m-auto text-center md:text-left">
                <div className="lg:flex gap-10 justify-between items-center m-auto space-y-10 xl:space-y-0">
                    <div className="text-white space-y-4 text-centey xl:w-[80%]  m-aut  2xl:text-4xl">
                        <h2 className="">More than over 3500+ Students</h2>
                        <h1 className="font-bold text-white leading-tigh text-2xl">Empowering Peaceful Leaders: <br className='xl:flex hidden'/> Hear Their Stories</h1>
                        <button className="rounded-full border-white border-2 px-8 py-3 2xl:px-20">View all</button>
                    </div>
                    <div className="text-white w-full m-auto">
                        <div className="xl:border-2 border border-white rounded-xl xl:w-[60%] m-auto text-center space-y-5 p-5 xl:py-10 2xl:py-20">
                            <p className="text-sm leading-6 2xl:text-xl">I am incredibly grateful for my time at Peace House University. The nurturing and inclusive environment helped me grow not only as a student but as an individual. The focus on promoting peace and understanding among diverse cultures instilled in me a sense of empathy and global responsibility. Today, I am a proud graduate of Peace House University, ready to make a positive impact on the world.</p>
                            <div className="space-y-2">
                                <h2 className="font-bold">John Smith</h2>
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