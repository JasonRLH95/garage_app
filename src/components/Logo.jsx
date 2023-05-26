import React from 'react';
import './style/logo.css';
import img1 from './images/logo_garage_app.png';

export default function Logo() {
    return (
    <div id='logo_main'>My Garage Manager<img src={img1} alt='logo' id='logo_img'></img></div>
    )
}
