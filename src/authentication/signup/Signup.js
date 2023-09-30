import React,{useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../../firebase"
import "./Signup.css"

function Signup() {
    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignup =() =>{
      createUserWithEmailAndPassword(auth,email,password)
      .then(signInWithEmailAndPassword(auth,email,password))
      // .then(updateProfile(auth.currentUser,{displayName: username})))
      .catch((err) => { alert(err)})
    }
  
  return (
    <>
    <h1 className='signup__text'>Sign Up</h1>
      <div className="signup">
        <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} value={username} />
        <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)}  value={email} />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </>
     
    
  )
}

export default Signup