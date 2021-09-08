import React from 'react';
import '../../styles/App/Home.css'
import BreakingNews from './BreakingNews';
import NavBar from './NavBar';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Slider />
            <BreakingNews />
        </div>
    );
};

export default Home;