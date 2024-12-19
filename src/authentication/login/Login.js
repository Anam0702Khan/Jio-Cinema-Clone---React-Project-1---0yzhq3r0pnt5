import React,{useState} from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {toast, ToastContainer} from "react-toastify"

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async () => {
      if (!email || !password) {
          toast.error("Please fill all the fields", {
              position: "top-center",
              autoClose: 3000,
          });
         
      }

      try {
          await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
          if (error.code === "auth/user-not-found") {
              toast.error("Please register", {
                position: "top-center",
                  autoClose: 3000,
              });
          } else {
              toast.error("Something went wrong. Please try again.", {
                position: "top-center",
                  autoClose: 3000,
              });
          }
      }
    }

  return (
    <>
    <h1 className='login__text'>Login</h1>
    <div className='login'>
        <input type="text" placeholder='Email' onChange={ e => setEmail(e.target.value)} value={email} required autoComplete='on' />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}  value={password} required/>
        <button onClick={handleLogin}>Login</button>
    </div>
    <ToastContainer />
    </>
  )
}

export default Login