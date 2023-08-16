import React from 'react';

const Testimonial = () => {
    return (
        <div className='bg-[#004B4A] h-[628px] flex flex-col my-24'>
            <div className="2xl:w-[70%] m-auto ">
                <div className="flex items-center">
                    <div className="text-white space-y-4 text-center w-full">
                        <h2 className="">More than over 3500+ Students</h2>
                        <h1 className="font-bold text-white leading-tight">Empowering Peaceful Leaders: <br /> Hear Their Stories</h1>
                        <button className="rounded-full border-white border-2 px-8 py-3 ">View all</button>
                    </div>
                    <div className="text-white w-full">
                        <div className="border-2 border-white rounded-xl w-[60%] m-auto text-center space-y-5 p-5 py-10">
                            <p className="text-sm leading-6">I am incredibly grateful for my time at Peace House University. The nurturing and inclusive environment helped me grow not only as a student but as an individual. The focus on promoting peace and understanding among diverse cultures instilled in me a sense of empathy and global responsibility. Today, I am a proud graduate of Peace House University, ready to make a positive impact on the world.</p>
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