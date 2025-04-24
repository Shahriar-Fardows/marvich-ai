import React from 'react';
import Hero from '../Components/Hero/Hero';
import Productivity from '../Components/Productivity/Productivity';
import Solutions from '../Components/Solutions/Solutions';
import Industries from '../Components/Industries/Industries';
import Clients from '../Components/Clients/Clients';
import { Contact } from '../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Productivity/>
            <Solutions/>
            <Industries/>
            <Clients/>
            <Contact/>
        </div>
    );
};

export default Home;