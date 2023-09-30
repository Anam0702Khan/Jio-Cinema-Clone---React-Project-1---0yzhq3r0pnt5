import React,{useState} from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password);
    };

    // console.log(email);

  return (
    <>
    <h1 className='login__text'>Login</h1>
    <div className='login'>
        <input type="text" placeholder='Email' onChange={ e => setEmail(e.target.value)} value={email} required autoComplete='on' />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}  value={password} required/>
        <button onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default Login