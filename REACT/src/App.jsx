import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Enter from "./pages/Enter"
import About from './pages/About'
import Login from './pages/Login'
import Home from './pages/Home'
import EndOfRegistration from './pages/EndOfRegistration'
import Register from './pages/Register'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Enter />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home user="מיכל"/>} />
          <Route path="endOfRegistration" element={<EndOfRegistration />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
