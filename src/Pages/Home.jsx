import React from 'react';
import Carousel from '../Components/Carosual';
import VisaTypes from '../Components/VisaTypes';
import HappyClients from '../Components/HappyClients';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            {/* latest visas section  */}
            <VisaTypes></VisaTypes>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;