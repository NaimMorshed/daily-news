import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ props, type }) => {
    return (
        <div>
            {
                type === 'CardSquare' ? <CardSquare props={props} /> :
                    type === 'CardLong' ? <CardLong props={props} /> :
                        type === 'CardBox' ? <CardBox props={props} /> :
                            <></>
            }
        </div>
    );
};

////////////////////////////////////////////////////////////////////////

const CardSquare = (props) => {
    
    return (
        <Link to={`/category/${props.props.tag}`}>
            <main className="flex flex-col square-card mr-2.5 mb-2.5">
                <section className="relative sec-1">
                    <img src={props.props.img} alt="sample" />
                    <div className="tag bg-red-500">
                        {props.props.tag}
                    </div>
                </section>

                <section className="px-6 py-3 sec-2">
                    <div>
                        <h2>{props.props.heading}</h2>
                    </div>
                </section>

                <section className="flex justify-center align-center sec-3">
                    <CalendarIcon />
                    <p><small>{props.props.date}</small></p>
                </section>
            </main>
        </Link>
    );
}

const CardLong = (props) => {
    return (
        <main className="rectangle-card mr-2.5 mb-2.5">
            <section className="relative">
                <img src={props.props.img} alt="sample" />
                <div className="tag bg-red-500">
                    {props.props.tag}
                </div>
            </section>

            <section className="px-6 py-3 flex flex-col">
                <div className="division-1">
                    <h2>{props.props.heading}</h2>
                </div>
                <div className="mt-2 text-sm division-2">
                    <p>{props.props.description}</p>
                </div>
                <div className="division-3">
                    <button className="text-blue-500">Read more...</button>
                </div>
                <div className="flex justify-center align-center mt-3 division-4">
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

const CardBox = (props) => {
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
                <div className="division-1">
                    <h2 className="text-start">{props.props.heading}</h2>
                    <button className="mt-2 flex">
                        Read more
                        <RightArrow />
                    </button>
                </div>
                <div className="flex justify-center align-center mt-3 division-2">
                    <CalendarIcon />
                    <p><small>{props.props.date}</small></p>
                </div>
            </section>
        </main>
    );
}

////////////////////////////////////////////////////////////////////////

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

const RightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative top-1 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
    );
}

export default NewsCard;