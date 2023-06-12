import React, { useState } from 'react';
import './style/detailspage.css';
import ComplainDiv from './ComplainDiv';

export default function DetailsPage(props) {
    const [complainFlag,setComplainFlag] = useState(false)
    const showComplain=()=>{
        if(complainFlag===true){
            return <ComplainDiv setComplainFlag={setComplainFlag} currentClient={props.currentClient}/>
        }
        else if(complainFlag===false){
            return null
        }
    }
    return (
    <div id='details_mainDiv'>
        <div id='details_subDiv'>
            <p className='details_p'><span className='details_span'>Client's name: </span>{props.currentClient.fullname}</p>
            <p className='details_p'><span className='details_span'>Client's ID: </span>{props.currentClient.id}</p>
            <p className='details_p'><span className='details_span'>Phone: </span>{props.currentClient.phone}</p>
            <p className='details_p'><span className='details_span'>Address: </span>{props.currentClient.address}</p>
            <p className='details_p'><span className='details_span'>Car number: </span>{props.currentClient.car}</p>
            <p className='details_p'><span className='details_span'>Car model: </span>{props.currentClient.company+' '+props.currentClient.type+' '+props.currentClient.year}</p>
        <p id='details_comp_p' onClick={()=>{setComplainFlag(true)}}>I want to complain</p>
        </div>
        
        <div id='complain_mainDiv'>{showComplain()}</div>
    </div>
    )
}
