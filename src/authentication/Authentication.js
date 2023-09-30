import React,{useState} from 'react'
import "./Authentication.css"
import Login from './login/Login'
import Signup from './signup/Signup'

function Authentication() {
    const[active,setActive] = useState("login")
    const handleChange =() =>{
        setActive(active === "login" ? "signup" : "login")
    }

  return (
    <div className='authentication'>
        <div className="auth__left">
            <img src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/taali_16x9-1693572369936.jpg" alt="image" />
        </div>
        <div className="auth__right">
         { active === "login" ? (<Login /> ): (<Signup />)}
            <div className="auth__more">
            <span>
            { active  ==="login" ?
             (<> <span style={{color: "white"}}>Don't have an account?</span> <button onClick={handleChange}>Sign Up</button></>)
            :
             (<> <span style={{color: "white"}}>Already have an account?</span> <button onClick={handleChange}>Log In</button></>)}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication