import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className='w-[85%] m-auto space-y-4 my-4'>
            <div className="">
                <div className="bg-[#D2D2D2] w-[100%] h-[0.2px]"></div>
            </div>
            <div className="sm:flex  items-center justify-between">
                <div className="">
                    <Logo />
                </div>
                <div className="xl-text-md text-[12px] px-4 xl:px-0">
                    <p className=""> &copy; Peace House University 2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;