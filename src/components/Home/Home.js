import React, { useContext } from 'react';
import '../../styles/Home/Home.css'
import { UserContext } from '../../App';
import BreakingNews from './BreakingNews';
import Category from './Category';
import Popular from './Popular';
import Slider from './Slider';
import TopNews from './TopNews';

const Home = () => {
    const [auth, setAuth, nav, setNav] = useContext(UserContext);

    React.useEffect(() => {
        setNav("Home");
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