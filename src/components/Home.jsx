import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/home.css';

export default function Home(props) {
    const nav=useNavigate();
    const [radioFlag,setRadioFlag] = useState('');
    const [optionSelected,setOptionSelected] = useState('')
    const deploySelect=()=>{
        if(radioFlag===''){
            return <option disabled selected>Please Choose sort method</option>
        }
        if(radioFlag==='ID'){
            return props.arr.map((val,inx)=>{
                    if(inx===0){
                        return <option hidden disabled selected>Select from the list</option>
                    }
                    else{
                        return <option>{val.id}</option>
                    }
                })
        }
        else if(radioFlag==='Car Number'){
            return props.arr.map((val,inx)=>{
                    if(inx===0){
                        return <option hidden disabled selected>Select from the list</option>
                    }
                    else{
                        return <option>{val.car}</option>
                    }
                })
        }
    }
    const searchClient=()=>{
        props.arr.filter((val)=>{
            if(val.id===optionSelected||val.car===optionSelected){
                props.setCurrentClient(val);
            }
            return val;
        })
    }
    return (
    <div id='homeMainDiv'>
        <div id='homeSubDiv'>
            {searchClient()}
            <select id='homeSelect' onChange={(e)=>{setOptionSelected(e.target.value)}}>
                {deploySelect()}
            </select>
            <div id='homeRadioDiv'>
                <div>
                    <input onChange={()=>{setRadioFlag('ID')}} type='radio' name='radioBtn' value={'ID'}></input>
                    <label>ID</label><br/>
                </div>
                <div>
                    <input onChange={()=>{setRadioFlag('Car Number')}} type='radio' name='radioBtn' value={'Car Number'}></input>
                    <label>Car Number</label>
                </div>

            </div>
            <div id='homeBtnsDiv'>
                <button id='homeBtn1' className='homeBtns' onClick={()=>{nav(`/client_${props.currentClient.fullname}`)}}>Login</button>
                <button id='homeBtn2' className='homeBtns' onClick={()=>{nav('/signup')}}>New Client</button>
            </div>
        </div>
    </div>
    )
}
