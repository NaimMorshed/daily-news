import React, { useContext } from 'react';
import '../../styles/Home/Home.css'
import { UserContext } from '../../App';
import BreakingNews from './BreakingNews';
import Category from './Category';
import Popular from './Popular';
import Slider from './Slider';
import TopNews from './TopNews';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser, nav, setNav] = useContext(UserContext);

    React.useEffect(() => {
        setNav("Home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Slider />
            <BreakingNews />
            <Category />
            <div className="divider">
                <div className="divider-1">
                    <Popular />
                </div>
                <div className="divider-2">
                    <TopNews />
                </div>
            </div>
        </div>
    );
};

export default Home;