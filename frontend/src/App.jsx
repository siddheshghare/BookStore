import React from 'react'
import Home from './home/Home'
import { Route,Routes }from "react-router-dom"
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Toaster />

    </>
  )
}

export default App
