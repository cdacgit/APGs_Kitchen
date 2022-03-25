import React, { useState } from 'react'
import Axios from 'axios';
import { RegisterContainer,RegisterButton,RegisterInput,RegisterHeading } from './registerElements';

function Register() {

  const [fnameReg, setFnameReg] = useState('');
  const [lnameReg, setLnameReg] = useState('');
  const [mobilenoReg, setMobileReg] = useState('');
  const [addressReg, setAddressReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  
  const registerr = () => {
    Axios.post("http://localhost:5000/register",{
      fname: fnameReg,
      lname: lnameReg,
      mobile: mobilenoReg,
      address: addressReg,
      email: emailReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <RegisterContainer id='signup'>
      <div>
        <RegisterHeading>Sign up</RegisterHeading>
        <RegisterInput 
          type="text" 
          placeholder="First Name"
          onChange={(e) => {
            setFnameReg(e.target.value);
          }} />
        <RegisterInput 
          type="text" 
          placeholder="Last Name"
          onChange={(e) => {
            setLnameReg(e.target.value);
          }} /><br/>
        <RegisterInput
          type="text" 
          placeholder="Mobile No."
          onChange={(e) => {
            setMobileReg(e.target.value);
          }} />
        <RegisterInput
          type="text" 
          placeholder="Address"
          onChange={(e) => {
            setAddressReg(e.target.value);
          }} /><br/>
        <RegisterInput
          type="email"
          placeholder="Email" 
          onChange={(e) => {
            setEmailReg(e.target.value);
          }} />
        <RegisterInput
          type="text" 
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }} /><br/>
        <RegisterButton onClick={registerr}>Submit</RegisterButton>
      </div>
    </RegisterContainer>
  );
 
}
export default Register