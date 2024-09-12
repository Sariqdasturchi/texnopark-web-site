import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import './header.css';
import logo from '../imgs/logotexnopark.png'

const Header = () => {
    const [navbar, setNavbar] = useState(false)

    const changeHeader = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeHeader)

    return (
        <div className={navbar ? 'active-header' : 'header-page'}>
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="" />
                        <span>Samarqand <br /> Yoshlar <br /> Texnopark</span>
                    </a>
                </div>
                <div className="menu-list">
                    <ul>
                        <li><a href="#">Bosh sahifa</a></li>
                        <li><a href="#">Kurslar</a></li>
                        <li><a href="#">Xizmatlar</a></li>
                        <li><a href="#">Biz haqimizda</a></li>
                    </ul>
                </div>
                <div className="phone-btns">
                    <a href="tel: +9989885555555"> <span><FaPhone /></span> +998(88)-555-55-55</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
