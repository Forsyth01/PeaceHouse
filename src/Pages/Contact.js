import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='xl:py-24 py-12'>
            <div className="bg-blue py-20 text-white text-center flex flex-col justify-center ">
                <div className="xl:w-[70%] w-[80%] m-auto">
                    <h1 className="text-white font-bold text-3xl 2xl:text-5xl my-2">Get In Touch</h1>
                    <p className="text-sm 2xl:text-xl">Have questions or want to learn more? Reach out to us, and <br className='xl:flex hidden'/> we'll be glad to connect.</p>
                    <div className="pt-10 text-sm 2xl:text-xl">
                      
                      
                        <div className="space-y-3">
                            <div className="flex gap-3 items-center hover:cursor-pointer">
                                <img src="location.svg" alt="" className="" />
                                <p className="text-left">6260 Westpark Drive, Suite 289, Houston, TX, 77057</p>
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