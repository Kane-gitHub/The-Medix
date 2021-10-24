// LIBRARY IMPORTS
// CSS
// BOOTSTRAP

import React from 'react';
import Logo from './Logo';
import Button from 'react-bootstrap/Button';
import './Styles.css';

export default function Landing() {
    return (
        <div>
            <Logo />

            <div id='landing-botons-div'>
                <a href='/login'><Button id='login-button' variant='success'>LOGIN</Button></a>
                <br />
                <a href='/signup'><Button id='sign-up-boton' variant='primary'>SIGN UP</Button></a>
            </div>
        </div>
    );
}

