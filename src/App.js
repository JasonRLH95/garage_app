import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import ClientPage from './components/ClientPage';

function App() {
  const [clientsArr,setClientsArr] = useState([{}]);
  const [currentClient,setCurrentClient] = useState('');
  class Client{
    complains;
    issuesArr;
    constructor(fullname,id,phone,address,car,year,company,type){
      this.fullname=fullname;
      this.id=id;
      this.phone=phone;
      this.address=address;
      this.car=car;
      this.year=year;
      this.company=company;
      this.type=type;
      this.complains=[];
      this.issuesArr=[];
    }
    addComplain(info,name){
      let time=new Date();
      let d=time.getDay()+1;
      let h=time.getHours();
      let m=time.getMinutes();
      let s=time.getSeconds();
      let month=time.getMonth()+1;
      let t=time.getDate()
      let y=time.getFullYear();
        if(d.toString().length!==0){
        if(d===1){
          d='Sunday';
        }
        if(d===2){
          d='Monday';
        }
        if(d===3){
          d='Tuesday';
        }
        if(d===4){
          d='Wednsday';
        }
        if(d===5){
          d='Thursday';
        }
        if(d===6){
          d='Friday';
        }
        if(d===7){
          d='Saturday';
        }
      }
      let x;
      if(h.toString().length!==0){
        if(h.toString().length===1){
          h='0'+h;
        }
        if(h.toString().length===2){
          x=h;
          h=x;
        }
      }
      if(m.toString().length!==0){
        if(m.toString().length===1){
          m='0'+m;
        }
        if(m.toString().length===2){
          x=m;
          m=x;
        }
      }
      if(s.toString().length!==0){
        if(s.toString().length===1){
          s='0'+s;
        }
        if(s.toString().length===2){
          x=s;
          s=x;
        }
      }
      let temp={
        complain:info,
        time:t+'/'+month+'/'+y+'  '+h+':'+m+':'+s+'  '+d,
        clientName:name
      }
      this.complains.push(temp)
    }
    addIssue(name,cost,totTime){
      let time=new Date();
      let d=time.getDay()+1;
      let h=time.getHours();
      let m=time.getMinutes();
      let s=time.getSeconds();
      let month=time.getMonth()+1;
      let t=time.getDate()
      let y=time.getFullYear();
        if(d.toString().length!==0){
        if(d===1){
          d='Sunday';
        }
        if(d===2){
          d='Monday';
        }
        if(d===3){
          d='Tuesday';
        }
        if(d===4){
          d='Wednsday';
        }
        if(d===5){
          d='Thursday';
        }
        if(d===6){
          d='Friday';
        }
        if(d===7){
          d='Saturday';
        }
      }
      let x;
      if(h.toString().length!==0){
        if(h.toString().length===1){
          h='0'+h;
        }
        if(h.toString().length===2){
          x=h;
          h=x;
        }
      }
      if(m.toString().length!==0){
        if(m.toString().length===1){
          m='0'+m;
        }
        if(m.toString().length===2){
          x=m;
          m=x;
        }
      }
      if(s.toString().length!==0){
        if(s.toString().length===1){
          s='0'+s;
        }
        if(s.toString().length===2){
          x=s;
          s=x;
        }
      }
      let temp={
        name,
        cost,
        totTime,
        time:t+'/'+month+'/'+y+'  '+h+':'+m+':'+s+'  '+d
      }
      this.issuesArr.push(temp)
    }
  }
  const defIssuesArr=[
    {
      code:1000,
      name:'Engine',
      cost:5000,
      time:12,
      desc:"Engine died due to overuse"
    },
    {
      code:2000,
      name:'Battery',
      cost:1500,
      time:6,
      desc:"The battery is over"
    },
    {
      code:3000,
      name:'Wheels',
      cost:800,
      time:2,
      desc:"Wheels gone bad due to overuse"
    },
    {
      code:4000,
      name:'Brakes',
      cost:2000,
      time:4,
      desc:"Brakes need to exchange"
    },
    {
      code:5000,
      name:'Lamps exchange',
      cost:250,
      time:1,
      desc:"Lamps burned out"
    },
    {
      code:6000,
      name:'Oil exchange',
      cost:100,
      time:1,
      desc:"Normal check of Oil and water status, clean the pipes and refill if needed"
    },
    {
      code:7000,
      name:'Painting',
      cost:4000,
      time:10,
      desc:"Repairing the color of the car by re-paint the last layer"
    },
    {
      code:8000,
      name:'Shape repair',
      cost:2500,
      time:6,
      desc:"Replace the parts of the car that been demaged"
    },
    {
      code:9000,
      name:'AC exchange',
      cost:400,
      time:2,
      desc:"Replacing the AC filter due to overuse"
    },
    {
      code:10000,
      name:'Test',
      cost:1250,
      time:4,
      desc:"Passing a whole test for the car once a year"
    }
  ];
  // var temp;
  return (
    <div className="App">
      <BrowserRouter>
      {/* <button onClick={()=>{temp = new Client('lioz hen','315070300','0507170101','harish','3514533','2014','kia','rio'); console.log(temp);setCurrentClient(temp); return temp}}>adduser</button>
      <button onClick={()=>{currentClient.addIssue('lioz',2000,12)}}>addissue</button>
      <button onClick={()=>{currentClient.addComplain('i have issue with your service','lioz')}}>addcomplains</button> */}
        <Routes>
          <Route path='/garage_app' element={<Home arr={clientsArr} currentClient={currentClient} setCurrentClient={setCurrentClient}/>}/>
          <Route path='/signup' element={<SignUp class={Client} setClientsArr={setClientsArr} clientsArr={clientsArr}/>}/>
          <Route path={`/client_${currentClient.fullname}`} element={<ClientPage currentClient={currentClient} defIssuesArr={defIssuesArr}/>}/>
          {/* <Route path={`/client`} element={<ClientPage currentClient={currentClient} defIssuesArr={defIssuesArr}/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
