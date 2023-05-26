import React from 'react';
import './style/issueComponent.css';

export default function IssueComponent(props) {
    return (
    <div className='issueCompDiv'>
        <div id='issueCompSubDiv1' className='issueCompSubDivs'>{props.time}</div>
        <div className='issueCompSubDivs'>{props.name}</div>
        <div className='issueCompSubDivs'>₪{props.cost}</div>
    </div>
    )
}
