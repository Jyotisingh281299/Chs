import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import About from '../about/About';
import Team  from '../../components/Team';
import HowItWorks from '../../components/HowItWorks';
import FeatureCarousel from '../../components/FeatureCarousel';
import BrowseCategory from '../../components/BrowseCategory';
import PopularCategory from '../../components/PopularCategory';
import Contact from '../contact/Contact';
import ServiceBanner from '../../components/ServiceBanner';


export default function Home()
{
    return(
        <>
            <Header/>
            <Banner/>
            <ServiceBanner/>
            <Category/>
            <About/>
            <BrowseCategory/>
            <Contact />
            <PopularCategory/>
            <FeatureCarousel/>
            <Team/>
            <HowItWorks/>

            <Footer/>
        </>
    );
}