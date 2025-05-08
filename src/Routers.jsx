import React from 'react'
import Home from './home'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Chart from './components/Chart'
import Typography from './components/sidebar/Typography'
import Color from './components/sidebar/Color'
import Login from './components/sidebar/Login'
import Icons from './components/sidebar/Icons'
import Register from './components/sidebar/Register'
import SamplePage from './components/sidebar/SamplePage'
import ChartApex from './components/chart/chartApex'
import MapVector from './components/chart/MapVector'

const Routers = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/typography" element={<Typography />} />
      <Route path="/color" element={<Color />} />
      <Route path="/icons" element={<Icons />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/samplepage" element={<SamplePage />} />
      <Route path="/chart-apex" element={<ChartApex />} />
      <Route path="/map-vector" element={<MapVector />} />

      
     </Routes>
    </>

  )
}

export default Routers