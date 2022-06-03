import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Signup from './Components/logins/Signup'
import Rooms from './Components/Navigation/Rooms'
import Build from './Components/Navigation/Building'
import Sitting from './Components/Navigation/Sitting'
import Foto from './Components/Home/Foto'
import SignUp from './Components/Auth/Signup'
import Login from './Components/Auth/Login'

 const App = () => {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/schedule' element={<Signup/>}/>
        <Route path='/room' element={<Rooms/>}/>
        <Route path='/build' element={<Build/>}/>
        <Route path='/sitting' element={<Sitting/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Foto/>
    </BrowserRouter>
  )
}
export default App