import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import SignIn from './Components/Signin'
import SignUp from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
