import React from 'react';
import '../../styles/Home/NewsCard.css';

const data = [
    {
        tag: 'World',
        img: "https://news.harvard.edu/wp-content/uploads/2019/05/merkelcrop-1600x900.jpg",
        heading: "Germany's Angela declares 'yes', I am a feminist",
        date: "11 September, 2021"
    },
    {
        tag: 'Technology',
        img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/D6C2/production/_120487945_gettyimages-1136867741.jpg",
        heading: "Amazon offers to pay college fees for 750,000 US staff",
        date: "11 September, 2021"
    },
    {
        tag: 'Sport',
        img: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/4C3A/production/_120441591_gettyimages-1281593057.jpg",
        heading: "Usain Bolt rules out athletics comeback but has 'got that itch for a return",
        date: "11 September, 2021"
    },
    {
        tag: 'Entertainment',
        img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/11E6D/production/_120452337_matrix1.png",
        heading: "The Matrix 4: Trailer gives first taste of Keanu Reeves' sci-fi comeback",
        date: "11 September, 2021"
    },
]

const Category = () => {
    return (
        <div>
            <header>
                <h2>Explore By Category</h2>
            </header>
            <section className="flex flex-wrap">
                {
                    data.map(data => <Card props={data} />)
                }
            </section>
        </div>
    );
};

const Card = (props) => {
    return (
        <main className="square-card mr-2.5 mb-2.5">
            <section className="relative">
                <img src={props.props.img} alt="sample" />
                <div className="tag bg-red-500">
                    {props.props.tag}
                </div>
            </section>

            <section className="px-6 py-3">
                <div>
                    <h2>{props.props.heading}</h2>
                </div>
                <div className="flex justify-center align-center mt-3">
                    <CalendarIcon />
                    <p><small>{props.props.date}</small></p>
                </div>
            </section>
        </main>
    );
}

const CalendarIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="#3B82F6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}

export default Category;