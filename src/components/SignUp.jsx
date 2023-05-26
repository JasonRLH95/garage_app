import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/signup.css';

export default function SignUp(props) {
    const nav=useNavigate();
    const [fullname,setFullname] = useState('')
    const [ID,setID] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [carNumber,setCarNumber] = useState('')
    const [carCompany,setCarCompany] = useState('')
    const [carType,setCarType] = useState('')
    const [carYear,setCarYear] = useState('')
    var yearsArr=[];
    const deploy=()=>{
        for(let i=2024;i>=1950;i--){
            yearsArr.push(i);
        }
    }
    deploy();
    const validation=()=>{
        let cnt=0;
        if(fullname.length===0||ID.length===0||phone.length===0||address.length===0||carNumber.length===0||carType.length===0||carYear.length===0){
            return alert('Must fill all the fields first!')
        }
        if(fullname.length!==0){
            if(fullname.includes(' ')){
                for(let i=0;i<fullname.length;i++){
                    if((fullname[i]>='a'&&fullname[i]<='z')||(fullname[i]>='A'&&fullname[i]<='Z')||fullname[i]===' '){
                        continue;
                    }
                    else{return alert('Full name must includes only English characters!')}
                }
                cnt++;
            }
            else{return alert('full name must contain at least one space character between first name and last name!')}
        }
        if(ID.length!==0){
            if(ID.length===9){
                for(let i=0;i<ID.length;i++){
                    if(ID[i]>=0&&ID[i]<=9){
                        continue;
                    }
                    else{return alert('ID must includes only numbers!')}
                }
                cnt++;
            }
            else{return alert('ID must be 9 numbers length only!')}
        }
        if(phone.length!==0){
            if(phone.length===10){
                for(let i=0;i<phone.length;i++){
                    if(phone[i]>=0&&phone[i]<=9){
                        continue;
                    }
                    else{return alert('Phone must includes only numbers!')}
                }
                cnt++;
            }
            else{return alert('Phone must be 10 numbers length only!')}
        }
        if(address.length!==0){
            for(let i=0;i<address.length;i++){
                if((address[i]>='a'&&address[i]<='z')||(address[i]>='A'&&address[i]<='Z')){
                    continue;
                }
                else{return alert('Address must includes only English characters!')}
            }
            cnt++
        }
        if(carNumber.length!==0){
            if(carNumber.length===7){
                for(let i=0;i<carNumber.length;i++){
                    if(carNumber[i]>=0&&carNumber[i]<=9){
                            continue;
                    }
                    else{return alert('Car number must includes only numbers!')}
                }
                cnt++
            }
            else{return alert('Car number could be 7 length only!')}
        }
        if(carType.length!==0){
            for(let i=0;i<carType.length;i++){
                if((carType[i]>='a'&&carType[i]<='z')||(carType[i]>='A'&&carType[i]<='Z')){
                    continue;
                }
                else{return alert('Car type must includes only English characters!')}
            }
            cnt++
        }
        if(carCompany.length!==0){
            for(let i=0;i<carCompany.length;i++){
                if((carCompany[i]>='a'&&carCompany[i]<='z')||(carCompany[i]>='A'&&carCompany[i]<='Z')){
                    continue;
                }
                else{return alert('Car company must includes only English characters!')}
            }
            cnt++
        }
        if(cnt===7){
            let temp=new props.class(fullname,ID,phone,address,carNumber,carYear,carCompany,carType);
            props.setClientsArr([...props.clientsArr,temp])
            nav('/')
        }
    }
    return (
    <div id='signupMainDiv'>
        <div id='signupSubDiv'>
            <h1 id='signupHeader'>Signup here:</h1>
            <input className='signupLongInputs' onChange={(e)=>{setFullname(e.target.value)}} type='text' placeholder='Enter your Full name'/><br/>
            <input className='signupLongInputs' onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder='Enter your Address'/><br/>
            <input className='signupLongInputs' onChange={(e)=>{setID(e.target.value)}} type='text' placeholder='Enter your ID'/><br/>
            <input className='signupLongInputs' onChange={(e)=>{setPhone(e.target.value)}} type='text' placeholder='Enter Phone number'/><br/>
            <input className='signupLongInputs' onChange={(e)=>{setCarNumber(e.target.value)}} type='text' placeholder='Enter Car number'/><br/>
            <div id='shortInputsDiv'>
                <input className='signupShortInputs' onChange={(e)=>{setCarCompany(e.target.value)}} type='text' placeholder='Enter Car company'/><br/>
                <input className='signupShortInputs' onChange={(e)=>{setCarType(e.target.value)}} type='text' placeholder='Enter Car type'/><br/>
            </div>
            <select id='signupSelect' onChange={(e)=>{setCarYear(e.target.value)}}>
                {yearsArr.map((val)=>{
                    if(val===2024){
                        return <option disabled hidden selected>Enter car year</option>
                    }
                    else{
                        return <option>{val}</option>
                    }
                })}
            </select><br/>
        <button id='signupBtn' onClick={validation}>Save Client</button>
        </div>
    </div>
    )
}
