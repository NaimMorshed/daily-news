import React from 'react';
import '../../styles/Home/Home.css'
import BreakingNews from './BreakingNews';
import Category from './Category';
import NavBar from './NavBar';
import Popular from './Popular';
import Slider from './Slider';
import TopNews from './TopNews';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Slider />
            <BreakingNews />
            <Category />
            <div className="grid gap-7 grid-cols-2">
                <Popular />
                <TopNews />
            </div>
        </div>
    );
};

export default Home;