import React, { useState } from 'react'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { HashLink as Link } from "react-router-hash-link";
import { LoginContainer, LoginInput, LoginButton,LoginHeading,SingupButton } from './loginElement';

const Login = () => {

  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const [loginStatus, setLoginStatus] = useState('');


  const login = () => {
    Axios.post("http://localhost:5000/login",{
      email: emailLog,
      password: passwordLog
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].email)
      }
    });
  }

  return (
      <LoginContainer id='user' >
            <div>
                <LoginHeading>Login</LoginHeading>
                <LoginInput 
                type="email" 
                placeholder="Email"
                onChange={(e) => {
                    setEmailLog(e.target.value);
                }}/><br/>
                <LoginInput 
                type="password" 
                placeholder="Password"
                onChange={(e) => {
                    setPasswordLog(e.target.value);
                }}/><br/>
                <LoginButton onClick={login}>Login</LoginButton>
                <SingupButton >
                  <Link smooth to="#signup">Sign up</Link>
                </SingupButton>

                <br/>
            </div>
        <h1>{loginStatus}</h1>
      </LoginContainer>
  )
}
export default Login