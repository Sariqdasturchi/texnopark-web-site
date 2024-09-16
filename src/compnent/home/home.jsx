import React from 'react';
import './home.css';
import './mobileStyle.css';
import Header from '../header/header';
import TexnoAbout from '../texno-about/texnoAbout';
import Map from '../map/map';
import Footer from '../footer/footer';


const Home = () => {
    
    return (
        <>
            <div className='home-page'>
                <Header />
            </div>
            <TexnoAbout />
            <Map />
            <Footer />
        </>
    );
}

export default Home;
