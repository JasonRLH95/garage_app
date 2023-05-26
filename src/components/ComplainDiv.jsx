import React, { useState } from 'react';
import './style/complainDiv.css'

export default function ComplainDiv(props) {
    const [name,setName] = useState('');
    const [text,setText] = useState('');
    const saveComplain=()=>{
        if(name.length!==0&&text.length!==0){
            props.currentClient.addComplain(text,name);
            props.setComplainFlag(false);
            return alert('complain has been saved and you can view it at the client history page')
        }
        else{return alert('must fill all the fields first!')}
    }
    return (
    <div id='complainDiv'>
        <div id='X_btn' onClick={()=>{props.setComplainFlag(false)}}>X</div>
        <h2>Complain form</h2>
        <div id='comp_inputDiv1'>
            <label>Name: </label>
            <input onChange={(e)=>{setName(e.target.value)}} id='complain_nameInput' type='text' placeholder='Enter your name here'/>
        </div>
        <div id='comp_inputDiv2'>
            <label>Text: </label>
            <textarea onChange={(e)=>{setText(e.target.value)}} id='comp_textArea' placeholder='Enter your text here'></textarea>
        </div>
        <button id='compDiv_saveBtn' onClick={()=>{saveComplain()}}>Save</button>
    </div>
    )
}
