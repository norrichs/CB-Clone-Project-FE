import React from 'react'
import CallToAction1 from "../Components/CallToAction1";
import CallToAction2 from "../Components/CallToAction2";
import CallToAction3 from "../Components/CallToAction3";
import TrendingSlider from '../Components/TrendingSlider';
import SplashCard1 from '../Components/SplashCard1';
import SplashCard2 from '../Components/SplashCard2';
import SplashCard3 from '../Components/SplashCard3';
// import HeaderDropDown from '../Components/HeaderDropDown';

const Splash = ({awsURL, imgBaseURL}, props) => {
return (
    <div>
        {/* <HeaderDropDown/> */}
        <CallToAction1/>
        <TrendingSlider/>
        <SplashCard1 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
        <CallToAction2/>
        <SplashCard2 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
        <CallToAction3/>
        <SplashCard3 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
    </div>
) 
}

export default Splash