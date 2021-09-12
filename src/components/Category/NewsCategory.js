import React, { useContext } from 'react';
import { UserContext } from '../../App';
import NewsCard from '../Home/NewsCard';
import { useParams } from 'react-router-dom';
import { data } from '../Home/data';

const NewsCategory = () => {
    const { title } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, nav, setNav] = useContext(UserContext);
    
    React.useEffect(() => {
        setNav(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <header>
                <h2>{title}</h2>
            </header>
            <section className="flex flex-wrap">
                {
                    data.map(data => data.tag === title && <NewsCard props={data} type={"CardSquare"} />)
                }
            </section>
        </div>
    );
};

export default NewsCategory;