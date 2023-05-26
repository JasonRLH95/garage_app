import React,{useState} from 'react';
import Logo from './Logo.jsx';
import Toolbar from './Toolbar.jsx';
import IssuesIndexTable from './IssuesIndexTable.jsx';
import History from './History.jsx';
import DetailsPage from './DetailsPage.jsx';
import './style/clientpage.css';

export default function ClientPage(props) {
    const [pageFlag,setPageFlag] = useState(0);
    const changePages=()=>{
        if(pageFlag===0){
            return <IssuesIndexTable arr={props.defIssuesArr} currentClient={props.currentClient}/>
        }
        if(pageFlag===1){
            return <History currentClient={props.currentClient}/>
        }
        if(pageFlag===2){
            return <DetailsPage currentClient={props.currentClient}/>
        }
    }
    return (
    <div>
        <Logo/>
        <Toolbar setPageFlag={setPageFlag}/>
        <div id='pagesDiv'>
            {changePages()}
        </div>
    </div>
    )
}
