import React from 'react';
import './map.css';

const Map = () => {
    return (
        <div className='map-container'>
            <div className="map-card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.205431700907!2d66.95842612639869!3d39.645091002241735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19ca891429b5%3A0xd67bdbef8e48a3a2!2sSamarqand%20Yoshlar%20Texnoparki!5e0!3m2!1sru!2s!4v1726336418681!5m2!1sru!2s" width="1200" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Map;
