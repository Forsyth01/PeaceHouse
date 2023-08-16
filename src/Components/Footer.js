import React from 'react';

const Footer = () => {
    return (
        <div className='w-[85%] m-auto space-y-4 my-10'>
            <div className="">
                <div className="bg-black w-[100%] h-[1px]"></div>
            </div>
            <div className="flex items-center justify-between">
                <div className="">
                    <a href="#" className="">
                    <img src="/logo.png" alt="" className="h-[6vh] cursor-pointer" />
                    </a>
                </div>
                <div className="">
                    <p className=""> &copy; Peace House University 2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;