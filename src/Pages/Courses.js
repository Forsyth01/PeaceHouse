import React, { useState } from 'react';

const Courses = () => {
    const [cards, setCards] = useState([
        {
            img: "card1.png",
            title: "Academic Excellence",
            para: "Immerse yourself in a world of knowledge and discovery. Our comprehensive range of courses offers the opportunity to engage with insightful teachings, led by experienced educators and mentors. Whether you're pursuing theology, business, or social justice, our academic excellence prepares you to excel in your chosen field while strengthening your faith-based foundation..",
        },
        {
            img: "card2.png",
            title: "Digital Empowerment",
            para: "Embrace the future with our cutting-edge computer classes. In a world driven by technology, our programs equip you with the skills to navigate the digital landscape with confidence.",
        },
        {
            img: "card3.png",
            title: " Creative Expression",
            para: "Unleash your creativity and artistic talents through our arts and culture programs. From music to visual arts, we celebrate the beauty of human expression. Engage in workshops, performances, and exhibitions that allow you to cultivate your passion while glorifying the Creator.",
        },
        {
            img: "card4.png",
            title: "Creative Expression",
            para: "Unleash your creativity and artistic talents through our arts and culture programs. From music to visual arts, we celebrate the beauty of human expression. Engage in workshops, performances, and exhibitions that allow you to cultivate your passion while glorifying the Creator.",
        },
        {
            img: "card5.png",
            title: "Community Bonds",
            para: "Join a vibrant community of like-minded individuals who value fellowship as a cornerstone of their journey. Engage in regular gatherings, discussions, and events that foster meaningful connections. Our fellowship activities provide a platform to share experiences, deepen your faith, and form lifelong friendships.",
        },
        {
            img: "card6.png",
            title: "Active Spirit",
            para: "Fuel your physical well-being and competitive spirit through our sporting activities. From friendly matches to organized tournaments, our sports programs encourage teamwork, discipline, and healthy living. Engage in a range of sports, from soccer to basketball, and experience the joy of camaraderie in motion.",
        },
    ])
    return (
        <div id='courses'>
            <div className="w-[85%] m-auto xl:py-24 py-12">
                <div className="leading-tight my-10">
                    <h1 className="uppercase text-sm 2xl:text-md">courses</h1>
                    <h1 className="font-bold text-xl 2xl:text-3xl">Empowering Courses to<br /> Unleash Your Divine Calling!</h1>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 space-y-5 md:space-y-0 gap-[20px]">
                    {cards.map((card) => {
                        return (
                            <div className='shadow p-5 w-[384px m-aut text-cente space-y-2 hover:cursor-pointer'>
                                <img src={card.img} alt="" className="m-auto w-full" />
                                <div className="space-y-2 leading-relaxed  py-5 m-auto">
                                    <h2 className="font-bold text-xl">{card.title}</h2>
                                    <p className="text-sm leading-relaxed text-justify">{card.para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg">
                <div className="m-auto w-[80%]">
                <h2 className="text-center text-lg lg:text-2xl font-semibold text-white md:w-[65%] 2xl:text-4xl leading-relaxed m-auto flex flex-col justify-center py-20"> “Discover how our nurturing environment and commitment to peace and understanding have transformed lives and shaped compassionate leaders”</h2>
            </div>
            </div>
        </div>
    );
};

export default Courses;