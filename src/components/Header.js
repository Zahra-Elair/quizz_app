import React from 'react';
import CyberLogo from "../img/CyberLogo.png";

const Header = () => {
    return (
        <div className='header'>
            <img src= {CyberLogo} alt='logo' className='logo'/>
            <h1 className='title'>Quiz application</h1>
        </div>
    );
};

export default Header;

