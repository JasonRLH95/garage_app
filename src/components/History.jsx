import React, { useState } from 'react';
import './style/history.css';
import IssueComponent from './IssueComponent.jsx';
import ComplainComponent from './ComplainComponent.jsx';
import Information from './Information';

export default function History(props) {
    const [infoFlag,setInfoFlag] = useState(false);
    var TOTcost = 0;
    var TOTtime = 0;
    var TOTdays= 0;
    const deployComplains=()=>{
        if(props.currentClient.complains.length===0){
            return <p>nothing yet</p>
        }
        else{
            return props.currentClient.complains.map((val)=>{
                    return <ComplainComponent complain={val.complain} time={val.time} clientName={val.clientName}/>
            })
        }
    }
    const deployIssues=()=>{
        if(props.currentClient.issuesArr.length===0){
            return <p>nothing yet</p>
        }
        else{
            return props.currentClient.issuesArr.map((val)=>{
                    TOTcost+=val.cost;
                    TOTtime+=val.totTime;
                    if(TOTtime>=9){
                        let temp = 0;
                        temp = TOTtime -9;
                        TOTtime=temp;
                        TOTdays++;
                    }
                    return <IssueComponent name={val.name} cost={val.cost} totTime={val.totTime} time={val.time}/>
                })
        }
    }
    const showInfo=()=>{
        if(infoFlag===true){
            return <Information/>
        }
        else{return null}
    }
    return (
    <div id='historyMainDiv'>
        <div id='historySubDiv1'>
            <h1>Complains:</h1>
            {deployComplains()}
        </div>
        <div id='historySubDiv2'>
            <h1>Issues:</h1>
            {deployIssues()}
            <p>total cost: ₪{TOTcost}</p>
            <div id='totTime_info_div'>
                <p>total time: {TOTdays}d {TOTtime}h</p>
                <div id='information' onMouseEnter={()=>{setInfoFlag(true)}} onMouseLeave={()=>{setInfoFlag(false)}}>?</div>
            </div>
                <div>{showInfo()}</div>
        </div>
    </div>
    )
}
