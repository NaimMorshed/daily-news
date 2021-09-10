import React from 'react';

const data = [
    {
        tag: 'World',
        img: "https://news.harvard.edu/wp-content/uploads/2019/05/merkelcrop-1600x900.jpg",
        heading: "Germany's Angela declares 'yes', I am a feminist",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus sed, eum ut saepe nobis asdfj ssa ewr asdf laa.",
        author: "Silver Tom",
        date: "11 September, 2021"
    },
    {
        tag: 'Technology',
        img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/D6C2/production/_120487945_gettyimages-1136867741.jpg",
        heading: "Amazon offers to pay college fees for 750,000 US staff",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus sed, eum ut saepe nobis asdfj ssa ewr asdf laa.",
        author: "Tom Cruise",
        date: "11 September, 2021"
    },
    {
        tag: 'Sport',
        img: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/4C3A/production/_120441591_gettyimages-1281593057.jpg",
        heading: "Usain Bolt rules out athletics comeback but has 'got that itch for a return",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus sed, eum ut saepe nobis asdfj ssa ewr asdf laa.",
        author: "Jason Statham",
        date: "11 September, 2021"
    },
    {
        tag: 'Entertainment',
        img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/11E6D/production/_120452337_matrix1.png",
        heading: "The Matrix 4: Trailer gives first taste of Keanu Reeves' sci-fi comeback",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus sed, eum ut saepe nobis asdfj ssa ewr asdf laa.",
        author: "Vin Diesel",
        date: "11 September, 2021"
    },
]

const Popular = () => {
    return (
        <div>
            <header className="mt-5">
                <h2>Popular</h2>
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