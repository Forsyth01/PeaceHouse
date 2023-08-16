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
            <div className="w-[80%] m-auto py-20">
                <div className="leading-tight my-10">
                    <h2 className="uppercase tracking-wide ">courses</h2>
                    <h1 className="font-bold ">Empowering Courses to<br /> Unleash Your Divine Calling!</h1>
                </div>
                <div className="grid grid-cols-3 gap-[20px]">
                    {cards.map((card) => {
                        return (
                            <div className='shadow p-5 w-[384px m-aut text-cente space-y-2 hover:cursor-pointer'>
                                <img src={card.img} alt="" className="m-auto w-full" />
                                <div className="space-y-2 leading-relaxed  py-5 m-auto">
                                    <h2 className="font-bold text-xl">{card.title}</h2>
                                    <p className="text-[16px] leading-relaxed text-justify">{card.para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg">
                <h1 className="text-center text-white w-[50%] m-auto flex flex-col justify-center h-[463px]"> “Discover how our nurturing environment and commitment to peace and understanding have transformed lives and shaped compassionate leaders”</h1>
            </div>
        </div>
    );
};

export default Courses;