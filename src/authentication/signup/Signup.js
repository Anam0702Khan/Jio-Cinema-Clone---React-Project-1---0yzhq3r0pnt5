import React,{useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../../firebase"
import "./Signup.css"
import { toast,ToastContainer } from 'react-toastify'

function Signup() {
    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignup = async() => {

      if (!email || !password || !username) {
               toast.error("Please fill all the fields", {
                   position: "top-center",
                   autoClose: 3000,
               });
              
           }
     await createUserWithEmailAndPassword(auth, email, password)
     // .then(() => {
     //   return updateProfile(auth.currentUser, { displayName: username }); // Update profile with username
     // })
     .then(() => {
       toast.success("Logout successful!", {
         position: "top-center",
         autoClose: 3000,
       });
     })
     .catch((err) => {
       const errorMessage = getFirebaseErrorMessage(err.code); 
       toast.error(errorMessage, {
         position: "top-center",
         autoClose: 3000,
       });
     });
   }

   const getFirebaseErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please use a different email.";
      case "auth/invalid-email":
        return "Invalid email format. Please check and try again.";
      case "auth/weak-password":
        return "Password is too weak. Use a stronger password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };
  
  return (
    <>
    <h1 className='signup__text'>Sign Up</h1>
      <div className="signup">
        <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} value={username} />
        <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)}  value={email} />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
        <button onClick={handleSignup} style={{cursor:"pointer"}}>Sign Up</button>
      </div>
      <ToastContainer />
    </>
     
    
  )
}

export default Signup