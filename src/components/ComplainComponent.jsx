import React from 'react';
import './style/complainComponent.css';

export default function ComplainComponent(props) {
    return (
    <div className='complainCompDiv'>
        <p>{props.time}</p>
        <p><b>Name: </b>{props.clientName}</p>
        <p className='complainComp_p'><b>Complain: </b>{props.complain}</p>
    </div>
    )
}
