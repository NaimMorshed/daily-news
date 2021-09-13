import React from 'react';
import '../../styles/Home/NewsCard.css';
import { data } from './data';
import NewsCard from './NewsCard';

const Category = () => {
    return (
        <div>
            <header>
                <h2>Explore By Category</h2>
            </header>
            <section className="flex flex-wrap">
                {
                    data.map(data =>
                        <NewsCard
                            key={data.heading}
                            props={data}
                            type={"CardSquare"}
                        />)
                }
            </section>
        </div>
    );
};

export default Category;