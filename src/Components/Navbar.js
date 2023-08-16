import React from 'react';

const Navbar = () => {
    return (
        <div className='fixed z-10 w-[100%] bg-white' id='home'>
            <div className="flex justify-between items-center py-4 w-[85%] m-auto">
                <div className="hover:cursor-pointer" id='home'>
                    {/* <h2 className='font-bold'>PeaceHouse Univerisity</h2> */}
                    <a href="#" className="">
                        <img src="/logo.png" alt="" className="h-[6vh]" />
                    </a>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="#" className="font-bold hover:font-bold">Home</a>
                    <a href="#courses" className="opacity-50  hover:opacity-100 hover:font-bold">Courses</a>
                    <a href="#faculty" className="opacity-50  hover:opacity-100 hover:font-bold">Trainings</a>
                    <a href="#contact" className="opacity-50 hover:opacity-100 hover:font-bold">Contact Us</a>
                </div>
                <div className="">
                    <button className="rounded bg-[#004B4A] text-white py-3 px-10 hover:scale-105 ">Register</button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;