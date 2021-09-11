import React from 'react';
import { data } from './data';
import NewsCard from './NewsCard';

const TopNews = () => {
    return (
        <div>
            <header className="mt-5">
                <h2>Top News</h2>
            </header>
            <section className="flex flex-wrap">
                {
                    data.map(data => <NewsCard props={data} type={"CardBox"} />)
                }
            </section>
        </div>
    );
};

const Card = (props) => {
    const imgStyle = {
        backgroundImage: `url(${props.props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 2000px #030405a2',
        color: "white",
    }
    return (
        <main style={imgStyle} className="box-card mr-2.5 mb-2.5">
            <section className="relative">
                <div className="tag bg-red-500">
                    {props.props.tag}
                </div>
            </section>

            <section className="px-6 py-3 flex flex-col justify-center align-center">
                <div>
                    <h2 className="text-start mt-12">{props.props.heading}</h2>
                    <button className="mt-2 flex">
                        Read more
                        <RightArrow />
                    </button>
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

const RightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative top-1 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
    );
}

export default TopNews;