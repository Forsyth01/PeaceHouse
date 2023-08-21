import React from 'react';

const Logo = () => {
    return (
        <div>
            <a href="#" className="">
                <div className="flex items-center">
                    <div className="">
                        <img src="logo3.png" alt="" className="md:h-[62px m-aut  object-cove" />
                    </div>
                    <div className="text-justify md:leading-[17px] leading-[13px] cursor-pointer">
                        <div className="">
                            <h1 className="font-bold md:text-[14px] tracking-wider text-[12px] cursor-pointer">PEACE HOUSE</h1>
                        </div>
                        <div className="">
                            <p className=" md:tracking-[0.3em] md:text-[12px] text-[11px] font-semibold tracking-[0.2em] cursor-pointer">UNIVERSITY</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Logo;