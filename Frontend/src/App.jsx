import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import SignIn from './Components/Signin'
import SignUp from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'
import UserProfile from './Components/UserProfile'
import Logout from './Components/Logout'
import MyFollowing from './Components/MyFollowing'

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/profile/:userId" element={<UserProfile/>}></Route>
        <Route exact path="/logout" element={<Logout/>}></Route>
        <Route exact path="/myfollowing" element={<MyFollowing/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
