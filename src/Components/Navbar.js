import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Logo from './Logo';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={!open ? 'fixed  xl:flex z-10 w-[100%] bg-white' : " bg-white fixed  top-0 md:block w-[100%] z-10 "} id='home'>
            <div className="xl:flex items-center justify-between py-2 w-[90%] m-auto">
                <div className="flex justify-between items-center ">
                    <div className="hover:cursor-pointer" id='home'>
                        {/* <h2 className='font-bold'>PeaceHouse Univerisity</h2> */}
                        <Logo/>
                    </div>
                    <div className="xl:hidden">
                        <HiOutlineMenuAlt3 className="text-2xl md:hidden flex" onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <div className={!open ? "xl:flex hidden gap-5 items-center text-sm 2xl:text-xl" : "transition duration-500 block my-10 space-y-6 text-center py-4 xl:py-0"}>
                    <li><a href="#" className="">Home</a></li>
                    <li> <a href="#courses" className="opacity-50  hover:opacity-100 hover:font-bol">Courses</a></li>
                    <li>  <a href="#faculty" className="opacity-50  hover:opacity-100 hover:font-bol">Trainings</a></li>
                    <li> <a href="#contact" className="opacity-50 hover:opacity-100 hover:font-bol">Contact Us</a></li>
                </div>
                <div className="xl:py-0">
                    <button className="rounded border border-[#004B4A] hover:bg-[#004B4A] hover:text-white py-2 px-8 hover:scale-105 hidden xl:flex">Register</button>
                    {open && <button className="rounded border bg-[#004B4A] my-5  py-3 px-10 hover:scale-105 text-center w-full text-white">Register</button>}
                </div>
            </div>


        </div>
    );
};

export default Navbar;