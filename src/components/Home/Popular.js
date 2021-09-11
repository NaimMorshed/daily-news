import React from 'react';
import { data } from './data';
import NewsCard from './NewsCard';

const Popular = () => {
    return (
        <div>
            <header className="mt-5">
                <h2>Popular</h2>
            </header>
            <section className="flex flex-wrap">
                {
                    data.map(data => <NewsCard props={data} type={"CardLong"} />)
                }
            </section>
        </div>
    );
};

const Card = (props) => {
    return (
        <main className="rectangle-card mr-2.5 mb-2.5">
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
                <div className="mt-2 text-sm">
                    <p>{props.props.description}</p>
                </div>
                <div>
                    <button className="text-blue-500">Read more...</button>
                </div>
                <div className="flex justify-center align-center mt-3">
                    <Author />
                    <div className="flex justify-center align-center">
                        <CalendarIcon />
                        <p><small>{props.props.date}</small></p>
                    </div>
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

const Author = () => {
    return (
        <div className="flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#3B82F6">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <h5 className="mr-5">Lisa Scholfield</h5>
        </div>
    );
}

export default Popular;