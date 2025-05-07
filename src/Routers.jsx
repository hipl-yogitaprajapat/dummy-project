import React from 'react'
import Home from './home'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const Routers = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>

  )
}

export default Routers