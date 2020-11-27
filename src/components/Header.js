import React from 'react';
import { Link } from 'react-router-dom';
import EETLogo from '../assets/EETLogo.svg';

const Header = () => {
    return (
        <header>
            <Link to='/' className='logo-link'><img src={EETLogo} alt='EarthEventTracker' /></Link>
        </header>
    );
}

export default Header;