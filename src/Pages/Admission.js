import React from 'react';

const Admission = () => {
    return (
        <div id='register' className='py-24'>
            <div className="w-[80%] m-auto flex justify-between items-center ">
                <div className="w-[50%] space-y-3">
                    <div className="">
                        <h3 className="">ADMISSION</h3>
                        <h1 className="font-bold">Join Our Community of Faith and <br/>Learning</h1>
                    </div>
                    <p className="">Our admission process is designed to identify individuals who embody our core values of faith, compassion, and excellence. We seek students who are eager to grow intellectually and spiritually, contributing positively to our diverse and inclusive learning environment.</p>
                    <button className="border-2 border-[#07294D] px-16 py-4 rounded-full">Register</button>
                </div>
                <div className="">
                    <img src="reading.png" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default Admission;