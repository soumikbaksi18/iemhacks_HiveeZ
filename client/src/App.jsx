import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CrsPage from './pages/CrsPage';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/crs' element={<CrsPage/>} />
      </Routes>
    </>
  )
}

export default App
