import React from 'react';
import './home.css';
import Header from '../header/header';
import logo from '../imgs/logotexnopark.png'

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <div className="home-container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    <h4>Zamonaviy Kompyuter Kurslari</h4>
                </div>
            </div>
        </div>
    );
}

export default Home;
