// REACT IMPORTS 
// LOGO
// IMAGE
// CSS
import React from 'react';
import logo from './images/logo.png';
import Image from 'react-bootstrap/Image';
import './Styles.css';

// LOGO AND COMPANY NAME

export default function Logo() {
    return (
        <div>
            <div id='logo-div'>
                <Image id='logo' src={logo} roundedCircle />
                <h3 id='logo-title'>THE MEDIX</h3>
            </div>

        </div>
    )
} 