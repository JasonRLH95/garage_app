import React from 'react';
import './style/logo.css';
import img1 from './images/logo_garage_app.png';

export default function Logo() {
    return (
        <div id='logoMainDiv'>
            <div id='logoSubDiv'>My Garage Manager</div>
            <img src={img1} alt='logo' id='logo_img'></img>
        </div>
    )
}
