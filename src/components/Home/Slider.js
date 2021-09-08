import React from 'react';

const Slider = () => {
    return (
        <div className="slider-bg text-white flex">

            <section className="relative top-20 left-20">
                <Category />
                <Heading />
                <Body />
                <br />
                <Author />
            </section>

            <section className="flex">
                <LeftArrow />
                <RightArrow />
            </section>
        </div>
    );
};

const LeftArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
        </svg>
    );
}

const RightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
    );
}

const Author = () => {
    return (
        <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <h5>Lisa Scholfield</h5>
        </div>
    );
}

const Category = () => {
    return (
        <span className="bg-blue-500 px-3 py-2 rounded-2xl">LIFESTYLE</span>
    );
}

const Heading = () => {
    return (
        <h1 className="font-bold text-5xl max-w-2xl my-7">Everything you ever need to know about flowers</h1>
    );
}

const Body = () => {
    return (
        <p className="text-xl max-w-2xl text-justify">
            Credibly empower enterprise wide mindshare for excellent "outside the box" thinking. Proactively mesh impactful products
            meta services rather than enterprise result. Professionally generate end to end human capital...
        </p>
    );
}

export default Slider;