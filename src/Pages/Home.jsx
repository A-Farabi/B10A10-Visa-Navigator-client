import React from 'react';
import Carousel from '../Components/Carosual';
import VisaTypes from '../Components/VisaTypes';
import HappyClients from '../Components/HappyClients';
import LatestVisa from '../Components/LatestVisa';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <LatestVisa></LatestVisa>
            <VisaTypes></VisaTypes>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;