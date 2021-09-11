import React from 'react';
import '../../styles/Home/Home.css'
import BreakingNews from './BreakingNews';
import Category from './Category';
import NavBar from './NavBar';
import Popular from './Popular';
import Slider from './Slider';
import TopNews from './TopNews';
//grid gap-7 grid-cols-2

const Home = () => {
    return (
        <div>
            <NavBar />
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