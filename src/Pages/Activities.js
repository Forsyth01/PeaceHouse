import React from 'react';

const Activities = () => {
    return (
        <div className='w-[85%] m-auto py-24' >
            <div className="text-center w-[50%] m-auto">
                <h1 className="font-bold">
                    Students Embrace Diverse Campus Life
                </h1>
                <p className="text-sm w-[80%] m-auto leading-6">Explore a vibrant tapestry of campus life at Peace House Foundation University, where students of all backgrounds engage in dynamic activities, from interactive lectures and spirited sports to creative arts, clubs, and community service.</p>
            </div>
            <div className="flex gap-10 justify-center mt-20">
                <img src="basketball.png" alt="" className="" />
                <img src="baseball.png" alt="" className="" />
            </div>

            <div className="flex justify-center gap-3 mt-10">
                <img src="leftarrow.png" alt="" className="" />
                <img src="rightarrow.png" alt="" className="" />
            </div>
        </div>
    );
};

export default Activities;