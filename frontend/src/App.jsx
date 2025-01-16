import React from 'react'
import Home from './home/Home'
import { Route,Routes }from "react-router-dom"
import Courses from './courses/Courses'
import SignUp from './components/SignUp'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      
    </Routes>
     

    </>
  )
}

export default App
