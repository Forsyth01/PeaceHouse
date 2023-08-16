import React from 'react';

const Faculty = () => {
    return (
        <div id='faculty' className='py-24'>
            <div className="w-[80%] m-auto">
                <div className="space-y-3 my-5">
                    <div className="">
                        <h3 className="tracking-wide">FACULTY</h3>
                        <h1 className="font-semibold">OUR SKILLED FACULTY HELPS STUDENTS <br />IN MANY DICIPLINES<br />Learning</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#06213E] h-[794.325px]">
                <div className="flex flex-col h-[794.325px] justify-center w-[85%] m-auto space-y-5">
                    <div className="flex justify-center gap-5">
                        <img src="swipe1.png" alt="" className="" />
                        <img src="swipe2.png" alt="" className="" />
                    </div>
                    <div className="flex justify-center gap-5 items-center">
                        <img src="al.png" alt="" className="cursor-pointer" />
                        <img src="ar.png" alt="" className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faculty;