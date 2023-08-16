import React from 'react';
import Quotes from '../Components/Quotes';

const About = () => {
    return (
        <>
            <div className='m-auto w-[85%] my-20' id='about'>
                <div className="space-y-3 ">

                    <h1 className="font-extrabold uppercase">About our University</h1>

                    <p className="tracking-wide leading-loose">At Peacehouse Church Ministry University, we stand as a testament to the harmonious fusion of faith, education, and purpose. Our institution is more than just a university; it's a sanctuary of learning where the divine meets the scholarly. With a rich history spanning generations, our roots are deeply intertwined with our commitment to nurturing hearts, expanding minds, and igniting spirits. Founded on the principles of unwavering compassion and unyielding service, we believe that education should be a transformative journey that not only enriches the intellect but also nourishes the soul.</p> 

                    <p className="tracking-wide leading-loose">Our mission is clear: to empower individuals with the knowledge, skills, and spiritual wisdom they need to make a profound impact on the world. We envision a global community of graduates who carry their faith like a torch, illuminating lives and embracing diversity. We aim to be the catalyst that propels the next generation of leaders, thinkers, and change-makers to embody values of integrity, empathy, and purpose. By seamlessly integrating faith with education, we create an environment that fosters growth, fosters compassion, and embraces inclusivity.
                    </p>

                    <p className="tracking-wide leading-loose">At Peacehouse Church Ministry University, education is not confined to textbooks and lectures. Our holistic approach recognizes that true learning comes from within, ignited by passion and nurtured by faith. </p>
                </div>
                <div className="flex justify-between  items-center gap-10 my-10">
                    <div className="w-[100%]"><h1 className="text-[25px] font-bold">"Where Faith and Knowledge Unite, Empowering Transformational Journeys."</h1></div>
                    <div className="">
                        <div className="bg-black h-[20vh] w-[1px] opacity-50"></div>
                    </div>
                    <div className="w-[100%]"><h1 className="text-[25px] font-bold">"At Peacehouse Church Ministry University, education isn't just a pursuit; it's a pilgrimage of the heart and mind."</h1></div>
                    <div className="">
                        <div className="bg-black opacity-40 h-[20vh] w-[1px] "></div>
                    </div>
                    <div className="w-[100%]"><h1 className="text-[25px] font-bold">"From classrooms to communities, we're committed to building bridges of compassion and understanding."</h1></div>
                    {/* <div className="">
                        <p className="leading-loose tracking-wide">At Peacehouse Church Ministry University, our purpose is to cultivate and empower a new generation of compassionate leaders, equipped with a strong foundation in faith and knowledge, to make a positive impact on the world. Established with a rich history of unwavering commitment to serving communities, our university has been a beacon of hope and spiritual guidance for decades.</p>
                    </div> */}
                </div>
            </div>
            {/* <div className="bg text-center flex flex-col justify-center my-20">
                <h1 className="text-white text-[50px]">Where Faith and Knowledge Unite, <br /> Empowering Transformational<br />  Journeys.</h1>
            </div> */}
            <Quotes />
        </>
    );
};

export default About;