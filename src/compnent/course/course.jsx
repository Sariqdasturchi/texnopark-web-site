import React  from 'react';
import './course.css';
import Header from '../header/header';

const Course = () => {
    return (
        <div className='course-container'>
            <Header  />
            <div className="course-cards">
                <div className="course-title-text-cont">
                    <h3>Mashhur Kurslar</h3>
                </div>
                <div className="course-cards-cont">
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                </div>
            </div>
        </div>
    );
}

export default Course;
