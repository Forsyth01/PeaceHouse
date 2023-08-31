import React from 'react';
import Quotes from '../Components/Quotes';

const About = () => {
    return (
        <>
            <div className='m-auto w-[85%] xl:my-20 my-10' id='about'>
                <div className="space-y-3 ">

                    <h1 className="font-extrabol font-medium text-[22px] lg:text-[30px] 2xl:text-5xl xl:pb-[20px]">About our University</h1>

                    <p className="2xl:tracking-wide leading-normal 2xl:text-xl 2xl:leading-relaxed line-clamp-6">At Peacehouse University, we stand as a testament to the harmonious fusion of faith, education, and purpose. Our institution is more than just a university; it's a sanctuary of learning where the divine meets the scholarly. With a rich history spanning generations, our roots are deeply intertwined with our commitment to nurturing hearts, expanding minds, and igniting spirits. Founded on the principles of unwavering compassion and unyielding service, we believe that education should be a transformative journey that not only enriches the intellect but also nourishes the soul.</p>

                    <div className="space-y-3 xl:flex flex-col hidden">

                        <p className="2xl:tracking-wide leading-normal 2xl:text-xl 2xl:leading-relaxed ">Our mission is clear: to empower individuals with the knowledge, skills, and spiritual wisdom they need to make a profound impact on the world. We envision a global community of graduates who carry their faith like a torch, illuminating lives and embracing diversity. We aim to be the catalyst that propels the next generation of leaders, thinkers, and change-makers to embody values of integrity, empathy, and purpose. By seamlessly integrating faith with education, we create an environment that fosters growth, fosters compassion, and embraces inclusivity.
                        </p>

                        <p className="2xl:tracking-wide leading-normal 2xl:text-xl 2xl:leading-relaxed ">At Peacehouse  University, education is not confined to textbooks and lectures. Our holistic approach recognizes that true learning comes from within, ignited by passion and nurtured by faith. </p>

                        <div className="xl:flex  justify-between items-center gap-10 my-10 ">
                            <div className="w-[100%]"><h1 className="text-[20px] 2xl:text-2xl  font-semibold">"Where Faith and Knowledge Unite, Empowering Transformational Journeys."</h1></div>
                            <div className="">
                                <div className="bg-black h-[20vh] w-[1px] opacity-50"></div>
                            </div>
                            <div className="w-[100%]"><h1 className="text-[20px] 2xl:text-2xl  font-semibold">"At Peacehouse University, education isn't just a pursuit; it's a pilgrimage of the heart and mind."</h1></div>
                            <div className="">
                                <div className="bg-black opacity-40 h-[20vh] w-[1px] "></div>
                            </div>
                            <div className="w-[100%]"><h1 className="text-[20px] 2xl:text-2xl  font-semibold">"From classrooms to communities, we're committed to building bridges of compassion and understanding."</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <Quotes />
        </>
    );
};

export default About;