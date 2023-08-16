import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='py-24'>
            <div className="bg-blue text-white text-center flex flex-col justify-center ">
                <div className="w-[70%] m-auto">
                    <h1 className="text-white font-bold text-[40px]">Get In Touch</h1>
                    <p className="text-[19px]">Have questions or want to learn more? Reach out to us, and <br /> we'll be glad to connect.</p>
                    <div className="my-20">
                        <a href="#" className="">
                            <div className="text-white"><img src="logo2.png" alt="" className="hover:cursor-pointer h-[5vh] text-white my-3" /></div>
                        </a>
                        <div className="space-y-3">
                            <div className="flex gap-3 items-center hover:cursor-pointer">
                                <img src="location.svg" alt="" className="" />
                                <p className="">6260 Westpark Drive, Suite 289, Houston, TX, 77057</p>
                            </div>
                            <div className="flex gap-3 items-center hover:cursor-pointer">
                                <img src="phone.svg" alt="" className="" />
                                <p className="">(646) 891-8294</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img src="mail.svg" alt="" className="hover:cursor-pointer" />
                                <p className="hover:cursor-pointer">peacehousefoudation@gmail.com</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img src="link.svg" alt="" className="hover:cursor-pointer" />
                                <div className="flex gap-3">
                                    <img src="instagram.svg" alt="" className="hover:cursor-pointer" />
                                    <img src="facebook.svg" alt="" className="hover:cursor-pointer" />
                                    <img src="telegram.svg" alt="" className="hover:cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;