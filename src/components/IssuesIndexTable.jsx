import React,{useState} from 'react';
import './style/issuesTable.css';
import IssueRow from './IssueRow';

export default function IssuesIndexTable(props) {
    const [descFlag,setDescFlag] = useState('');
    const [name,setName] = useState('')
    const [cost,setCost] = useState('')
    const [time,setTime] = useState('')
    const showDesc=()=>{
        let p= document.getElementById('desc_p');
        if(p!==null){
            return p.innerHTML=descFlag;
        }

    }
    showDesc()
    const addToIssuesArr=()=>{
        if(name!==''&&cost!==''&&time!==''){
            props.currentClient.addIssue(name,cost,time);
            return alert("issue has been added to client's issues history")
        }
        console.log(props.currentClient.issuesArr)
    }
    return (
    <div id='issueTableMainDiv'>
        <table id='table'>
            <tr>
                <th>Issue code</th>
                <th>Issue name</th>
                <th>Repair cost</th>
            </tr>
            {props.arr.map((val)=>{
                return <IssueRow code={val.code} name={val.name} cost={val.cost} desc={val.desc} time={val.time} setDescFlag={setDescFlag} showDesc={showDesc} setName={setName} setCost={setCost} setTime={setTime}/>
            })}
        </table>
        <div id='descriptionDiv'>
            <h2 id='desc_h2'>Description:</h2>
            <p id='desc_p'>Please select an issue first</p>
            <button id='desc_btn' onClick={()=>{addToIssuesArr()}}>Add</button>
        </div>
    </div>
    )
}
