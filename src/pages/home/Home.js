import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Team  from '../../components/Team';
import HowItWorks from '../../components/HowItWorks';
import FeatureCarousel from '../../components/FeatureCarousel';
import BrowseCategory from '../../components/BrowseCategory';
import PopularCategory from '../../components/PopularCategory';
import ServiceBanner from '../../components/ServiceBanner';
import About_Short from "../../components/About_Short";


export default function Home()
{
    return(
        <>
            <Header/>
            <Banner/>
            <ServiceBanner/>
            <Category/>
          <About_Short/>
            <BrowseCategory/>
           
            <PopularCategory/>
            <FeatureCarousel/>
            <Team/>
            <HowItWorks/>

            <Footer/>
        </>
    );
}