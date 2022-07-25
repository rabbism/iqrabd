import React from 'react';
import { } from '@mui/material';
import Menubar from './../Components/Menubar';
import Banner from '../Components/Banner';
import FlashSale from '../Components/FlashSale';
import PopularCollection from './../Components/PopularCollection';
import ComboPack from './../Components/ComboPack';
import Review from './../Components/Review';
import WatchVideo from './../Components/WatchVideo';
import Footer from './../Components/Footer';


const Home = () => {


    return (

        
        <>
        
            {/* Menubar */}
            <Menubar active="home"></Menubar>

            {/* Banner */}
            <Banner></Banner>

            {/* Flash Sale */}
            <FlashSale></FlashSale>

            {/* PopularCollection */}
            <PopularCollection></PopularCollection>

            {/* ComboPack */}
            <ComboPack></ComboPack>

            {/* Review */}
            <Review></Review>

            {/* Review */}
            <WatchVideo></WatchVideo>

            {/* Review */}
            <Footer></Footer>

        </>


    )

}

export default Home