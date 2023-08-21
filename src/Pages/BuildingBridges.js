import React from 'react';

const BuildingBridges = () => {
    return (
        <>
            <div className='w-[85%] m-auto xl:py-24 py-12'>
                <div className="xl:flex lg:flex items-center justify-between gap-10 space-y-5 xl:space-y-0">
                    <div className="lg:w-[90%] space-y-2">
                        <h2 className="font-bold text-sm 2xl:text-xl text-[#07294D]">Building Bridges</h2>
                        <h2 className="font-extrabold text-xl  text-[#07294D] 2xl:text-2xl">Our university is committed to welcoming students from all walks of life, fostering a community of diversity.</h2>
                        <p className="text-justif 2xl:text-xl">we actively seek out students from various backgrounds, believing that the convergence of cultures and perspectives enhances the learning experience for everyone. From the moment students step onto our campus, they're embraced by a supportive community that values their uniqueness. We champion open dialogues that encourage the exchange of ideas, where differences are not only acknowledged but celebrated.</p>
                    </div>
                    <div className="w-[100%]">
                        <img src="mansmiling.png" alt="" className="m-auto xl:h-[60vh]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildingBridges;