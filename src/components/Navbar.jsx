import React from 'react';
import './style/navbar.css';
import Toolbar from './Toolbar';
import Logo from './Logo';


export default function Navbar({setPageFlag}) {
  return (
    <div className='navbar_mainDiv'>
        <Logo/>
        <Toolbar setPageFlag={setPageFlag}/>
    </div>
  )
}
