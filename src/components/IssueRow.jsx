import React from 'react';
import './style/issueRow.css';


export default function IssueRow(props) {
    return (
            <tr onClick={()=>{props.setDescFlag(props.desc);props.setName(props.name);props.setCost(props.cost);props.setTime(props.time)}} className='issueRow'>
                <td className='issueData'>{props.code}</td>
                <td className='issueData'>{props.name}</td>
                <td className='issueData'>₪{props.cost}</td>
            </tr>
    )
}
