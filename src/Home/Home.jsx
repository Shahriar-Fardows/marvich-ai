import React from 'react';
import Hero from '../Components/Hero/Hero';
import Productivity from '../Components/Productivity/Productivity';
import Solutions from '../Components/Solutions/Solutions';
import Industries from '../Components/Industries/Industries';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Productivity/>
            <Solutions/>
            <Industries/>
        </div>
    );
};

export default Home;