import React from 'react'
import './style.css'

const LoginFormUseState = () => {
  
  
  return (
    <>
    <div className='bg'>  

      <div className="image">
        
      </div>

      
      <div className="cover">
     
          <h1>Login</h1>
          <input type="text"  name='email' placeholder='Email'/>
    
          <input type="Password"  name='password' placeholder='Password'/>
        
        <button>Sign Up</button>

        <h3>Or Login Using</h3>

        <div className="alt-login">
          
          <div className="facebook">
              
          </div>
          <div className="google">

          </div>
        
        </div>

      
      </div>
     
      
    </div>
    </>
  )
}

export default LoginFormUseState
