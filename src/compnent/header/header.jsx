import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import './header.css';
import './mobileStyle.css';
import logo from '../imgs/logotexnopark.png'
import logo2 from '../imgs/logoBlack.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [menuBtn, setMenuBtn] = useState(false)

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const onClickBtn = () => {
        setMenuBtn(prevState => !prevState)
        console.log("click-menu-button");
    }

    window.addEventListener('scroll', changeHeader)

    return (
        <>
            <div className={navbar ? 'active-header' : 'header-page'}>
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src={navbar ? logo2 : logo} alt="" />
                            <span className={navbar ? 'text-active' : 'text'}>Samarqand <br /> Yoshlar <br /> Texnopark</span>
                        </a>
                    </div>
                    <div>
                        
                        {menuBtn ?
                            <ul className={menuBtn ? 'menu-list' : 'active-menu-list'}>
                                <li><Link className={navbar ? 'text-active' : 'text'} to={'/'}>Bosh sahifa</Link></li>
                                <li><Link className={navbar ? 'text-active' : 'text'} to={'/course'}>Kurslar</Link></li>
                                <li><Link className={navbar ? 'text-active' : 'text'} to={'/services'}>Xizmatlar</Link></li>
                                <li><Link className={navbar ? 'text-active' : 'text'} to={'/about'}>Biz haqimizda</Link></li>
                            </ul>
                            : <div className="menu-list">
                                <ul>
                                    <li><Link className={navbar ? 'text-active' : 'text'} to={'/'}>Bosh sahifa</Link></li>
                                    <li><Link className={navbar ? 'text-active' : 'text'} to={'/course'}>Kurslar</Link></li>
                                    <li><Link className={navbar ? 'text-active' : 'text'} to={'/services'}>Xizmatlar</Link></li>
                                    <li><Link className={navbar ? 'text-active' : 'text'} to={'/about'}>Biz haqimizda</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="phone-btns">
                        <a href="tel: +9989885555555"> <span><FaPhone /></span> +998(88)-555-55-55</a>
                    </div>

                    <div className="menu-humberger">
                        <button onClick={onClickBtn} className={navbar ? 'btn' : 'active-btn'} >
                            {menuBtn ? <IoMdClose /> : <IoMenu />}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
