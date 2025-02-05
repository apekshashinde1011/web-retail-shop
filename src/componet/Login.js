import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className='"login-container"'>
       <h2>Login From</h2> 
       <form>
        <div className="input-group">
            
            <input type='email' placeholder='Enter Email' ></input>
        </div>

        <div className="input-group">
            <input type='password' placeholder='Enter the password' ></input>
        </div>

        <button type='submit' className="login-button">Ligin</button>
       </form>
    </div>
  )
}

export default Login