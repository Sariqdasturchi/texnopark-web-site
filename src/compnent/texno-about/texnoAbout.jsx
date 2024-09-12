import React from 'react';
import './texnoAbout.css';
import { FaBriefcase } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const TexnoAbout = () => {
    return (
        <div className='texno-about-page'>
            <div className="texno-about-container">
                <div className="texno-about-title">
                    <h1>Nima uchun Samarqand Yoshlar Texnoparki?</h1>
                    <div>
                        <p>
                            PDP Academy hozir dasturlashni o'rganish istagidagi insonlarga 6
                            yildan beri professionallar bilimi, ularning tajribasi, loyihalar,
                            tadbirlar orqali sifatli ta'lim ulashib bormoqda. Hozirgacha akademiyada
                            tahsil olayotganlar 10 000 nafarni tashkil etadi.
                        </p>
                    </div>
                </div>
                <div className="texno-about-cards">
                    <div className="texno-card">
                        <div className="card-icon">
                            <FaBriefcase />
                        </div>
                        <div className="card-title">
                            <h1>6 yillik tajriba</h1>
                        </div>
                        <div className="card-desc">
                            <p>PDP Academyasi 2017-yilda tashkil topdi va bugungi kunda ko’plab IT kompaniyalarni ichiga oluvchi Ekotizimga aylandi</p>
                        </div>
                    </div>
                    <div className="texno-card-top">
                        <div className="card-icon">
                            <FaChartLine />
                        </div>
                        <div className="card-title">
                            <h1>Natijador Kurslar</h1>
                        </div>
                        <div className="card-desc">
                            <p>Kurs yakuniga faqatgina saralangan o'quvchilar yetib boradi va katta qismi IT kompanyalariga ishga kiradi.</p>
                        </div>
                    </div>
                    <div className="texno-card">
                        <div className="card-icon">
                            <GiTrophy />
                        </div>
                        <div className="card-title">
                            <h1>Intensiv ta'lim</h1>
                        </div>
                        <div className="card-desc">
                            <p>Dasturlash uchun eng kerakli muhit va sharoitda Intensive ta'lim oling, bunda o'quvchilar bor e'tiborlarini dasturlashga sarflaydilar</p>
                        </div>
                    </div>
                    <div className="texno-card-top">
                        <div className="card-icon">
                        <FaUsers />
                        </div>
                        <div className="card-title">
                            <h1>Mentorlar</h1>
                        </div>
                        <div className="card-desc">
                            <p>Ustozlar haqiqiy praktik Xalqaro toifadagi Dasturchilar hisoblanib, hozirgi kunda turli IT - kompaniyalarda faoliyat yuritib kelishmoqda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TexnoAbout;
