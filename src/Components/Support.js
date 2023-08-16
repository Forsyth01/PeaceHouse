import React from 'react';

const Support = () => {
    return (
        <div className='w-[60%] m-auto py-24'>
            <div className="flex items-center gap-10">
                <div className="space-y-4">
                    <div className="">
                        <h1 className="font-bold leading-tight">Join Us in <br /> Empowering Future<br /> Leaders</h1>
                    </div>
                    <div className="">
                        <p className="w-[100%]">
                            We aim to extend our impact beyond our campus walls through community outreach programs, volunteer projects, and partnerships. Your contribution will empower us to make a tangible difference in local communities.
                            <br />
                            <br />
                            Your support is a beacon of hope for the bright minds of tomorrow. Every contribution will have a profound impact on the lives of our students and the future of our world
                        </p>
                    </div>
                    <div className="">
                        <button className="px-20 py-4 rounded-full bg-none border border-black">Donate</button>
                    </div>
                </div>
                <div className="w-[100%]">
<img src="donate.png" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default Support;