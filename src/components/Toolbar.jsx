import React,{useState} from 'react';
import './style/toolbar.css';
import { useNavigate } from 'react-router-dom';

export default function Toolbar(props) {
    const nav = useNavigate();
    const [btnFlag,setBtnFlag] = useState('')
    const [mobileBtnFlag,setMobileBtnFlag] = useState(false);
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
    const div = document.getElementById('mobileToolBar');
    const btn1 = document.getElementById('mobileToolbar_btn1');
    const btn2 = document.getElementById('mobileToolbar_btn2');
    const btn3 = document.getElementById('mobileToolbar_btn3');
    const btn4 = document.getElementById('logoutMobileBtn');
    const showMobileToolbar=()=>{
        if(div!=null &&mobileBtnFlag===true){
            div.style.width = '105%';
            btn1.style.width = '100%';
            btn1.style.fontSize = '9vw';
            btn1.style.opacity = '100%'
            btn1.innerHTML = 'Client details';
            btn2.style.width = '100%';
            btn2.style.fontSize = '9vw';
            btn2.style.opacity = '100%'
            btn2.innerHTML = 'Client history';
            btn3.style.width = '100%';
            btn3.style.fontSize = '9vw';
            btn3.style.opacity = '100%'
            btn3.innerHTML = 'Issues index table';
            btn4.style.width = '100%';
            btn4.style.fontSize = '9vw';
            btn4.style.opacity = '100%'
            btn4.innerHTML = 'Logout';
        }
        else if(div!=null &&mobileBtnFlag===false){
            div.style.width = '0';
            btn1.style.width = '0';
            btn1.style.fontSize = '0';
            btn1.style.opacity = '0'
            btn1.innerHTML = '';
            btn2.style.width = '0';
            btn2.style.fontSize = '0';
            btn2.style.opacity = '0'
            btn2.innerHTML = '';
            btn3.style.width = '0';
            btn3.style.fontSize = '0';
            btn3.style.opacity = '0'
            btn3.innerHTML = '';
            btn4.style.width = '0';
            btn4.style.fontSize = '0';
            btn4.style.opacity = '0'
            btn4.innerHTML = '';
        }
    }
    setTimeout(() => {
        showMobileToolbar()
    }, 100);
    return (
        <div className='toolbar_component'>
            <div id='toolbar_main'>
                <button id='logoutBtn' onClick={()=>{nav('/garage_app')}}>Exit</button>
                {btnClicked()}
                <button onClick={()=>{setBtnFlag('toolbar_btn1');props.setPageFlag(2)}} className='toolbar_btns' id='toolbar_btn1'>Client details</button>
                <button onClick={()=>{setBtnFlag('toolbar_btn2');props.setPageFlag(1)}} className='toolbar_btns' id='toolbar_btn2'>Client history</button>
                <button onClick={()=>{setBtnFlag('toolbar_btn3');props.setPageFlag(0)}} className='toolbar_btns' id='toolbar_btn3'>Issues table</button>
                <div id='mobileToolbarDiv'>
                    <div id='mobileToolbar_img' onClick={()=>{setMobileBtnFlag(!mobileBtnFlag)}}></div>
                </div>
            </div>
            <div id='mobileToolBar'>
                {btnClicked()}
                <button onClick={()=>{setMobileBtnFlag(false);props.setPageFlag(0)}} className='mobileToolbar_btns' id='mobileToolbar_btn3'></button>
                <button onClick={()=>{setMobileBtnFlag(false);props.setPageFlag(1)}} className='mobileToolbar_btns' id='mobileToolbar_btn2'></button>
                <button onClick={()=>{setMobileBtnFlag(false);props.setPageFlag(2)}} className='mobileToolbar_btns' id='mobileToolbar_btn1'></button>
                <button id='logoutMobileBtn' className='mobileToolbar_btns' onClick={()=>{nav('/garage_app')}}></button>
            </div>
        </div>
    )
}
