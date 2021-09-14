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
                    data.map(data =>
                        <NewsCard
                            key={data.heading}
                            props={data}
                            type={"CardBox"}
                        />)
                }
            </section>
        </div>
    );
};

export default TopNews;