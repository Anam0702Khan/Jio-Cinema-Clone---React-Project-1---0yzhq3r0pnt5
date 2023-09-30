import './App.css';
import React from 'react';
import Allroute from './routes/Allroute';
import Authentication from "./authentication/Authentication"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser, setLoading } from './slices/userSlice';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);
  
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);


  return (
   <div className='App'>
 
      <>{user ? <Allroute /> : <Authentication />}</>
  </div>
   
  );
}

export default App;
