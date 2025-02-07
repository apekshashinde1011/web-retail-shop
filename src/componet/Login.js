import React, { useState } from 'react'
import "./Login.css";

function Login() {
    const [email,seEmail]=useState(" ");
    const [passwod,setPassword]=useState(" ");
    const [error,setError]=useState(" ");

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(!email|| !passwod){
        alert("all fild are required")
       }
       return;
    }
    

    const ChengEmail=(e)=>{
        seEmail(e.target.value);
    }

    const chengePassword=(e)=>{
        setPassword(e.target.value);
    }
  return (
    <div className='"login-container"'>
       <h2>Login From</h2> 
       <form onSubmit={handleSubmit}>
        <div className="input-group">
            
            <input type='email' placeholder='Enter Email'value={email} onChange={ChengEmail}></input>
        </div>

        <div className="input-group">
            <input type='password' placeholder='Enter the password'value={passwod} onChange={chengePassword} ></input>
        </div>

        <button type='submit' className="login-button">Ligin</button>
       </form>
    </div>
  )
}

export default Login