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
                    data.map(data =>
                        <NewsCard
                            key={data.heading}
                            props={data}
                            type={"CardLong"}
                        />)
                }
            </section>
        </div>
    );
};

export default Popular;