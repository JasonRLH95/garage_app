import React,{useState} from 'react';
import './style/toolbar.css';
import { useNavigate } from 'react-router-dom';

export default function Toolbar(props) {
    const nav = useNavigate();
    const [btnFlag,setBtnFlag] = useState('')
    const btnClicked=()=>{
        let btn1= document.getElementById('toolbar_btn1');
        let btn2= document.getElementById('toolbar_btn2');
        let btn3= document.getElementById('toolbar_btn3');
        if(btnFlag==='toolbar_btn1'){
            btn1.style.backgroundColor = 'white';
            btn1.style.border= '2px solid #1C1C22'
            btn1.style.borderBottom= 'none'
            btn2.style.border= '1px solid #1C1C22'
            btn2.style.borderBottom= '1px solid #1C1C22'
            btn2.style.backgroundColor = '#E0E0E0';
            btn3.style.border= '1px solid #1C1C22'
            btn3.style.borderBottom= '1px solid #1C1C22'
            btn3.style.backgroundColor = '#E0E0E0';
        }
        if(btnFlag==='toolbar_btn2'){
            btn2.style.backgroundColor = 'white';
            btn2.style.border= '2px solid #1C1C22'
            btn2.style.borderBottom= 'none'
            btn1.style.border= '1px solid #1C1C22'
            btn1.style.borderBottom= '1px solid #1C1C22'
            btn1.style.backgroundColor = '#E0E0E0';
            btn3.style.border= '1px solid #1C1C22'
            btn3.style.borderBottom= '1px solid #1C1C22'
            btn3.style.backgroundColor = '#E0E0E0';
        }
        if(btnFlag==='toolbar_btn3'){
            btn3.style.backgroundColor = 'white';
            btn3.style.border= '2px solid #1C1C22'
            btn3.style.borderBottom= 'none'
            btn1.style.border= '1px solid #1C1C22'
            btn1.style.borderBottom= '1px solid #1C1C22'
            btn1.style.backgroundColor = '#E0E0E0';
            btn2.style.border= '1px solid #1C1C22'
            btn2.style.borderBottom= '1px solid #1C1C22'
            btn2.style.backgroundColor = '#E0E0E0';
        }
    }
    return (
    <div id='toolbar_main'>
        <button id='logoutBtn' onClick={()=>{nav('/garage_app')}}>Logout</button>
        {btnClicked()}
        <button onClick={()=>{setBtnFlag('toolbar_btn1');props.setPageFlag(2)}} className='toolbar_btns' id='toolbar_btn1'>Client details</button>
        <button onClick={()=>{setBtnFlag('toolbar_btn2');props.setPageFlag(1)}} className='toolbar_btns' id='toolbar_btn2'>Client history</button>
        <button onClick={()=>{setBtnFlag('toolbar_btn3');props.setPageFlag(0)}} className='toolbar_btns' id='toolbar_btn3'>Issues index table</button>
    </div>
    )
}
