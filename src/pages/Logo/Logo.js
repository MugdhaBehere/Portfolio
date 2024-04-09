import React from 'react';
import Mugdha from '../../images/Mugdha.jpeg';
import logo from '../../images/logo.mp4';
import '../Logo/Logo.css';



const Logo = () => {
    return (
        <div className='container-logopage'>
            <div className="logo-container">
                <video className="logo-video" autoPlay loop muted>
                    <source src={logo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

    )
}

export default Logo

