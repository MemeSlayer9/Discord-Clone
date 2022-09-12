import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
 import './App.css';
 import Chat from "./Chat";
import Sidebar from './features/Sidebar';
import {selectUser} from './features/userSlice';
import { auth } from './firebase';
import Login from "./Login";
import {login , logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
   
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      console.log("user is ", authUser);
    if (authUser)  {
          dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      })
      );

    } else {
      dispatch(logout());
    }
  });
  }, [dispatch]);
  return (
     <div className="app">
 
      { user ? (
        <>
         <Sidebar/>
        <Chat/>
        </>
        
      ) : (
      <Login/>
      )}
       
     </div>
  );
}

export default App;
