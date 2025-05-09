import React from 'react'
import Home from './home'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Typography from './components/sidebar/Typography'
import Color from './components/sidebar/Color'
import Login from './components/sidebar/Login'
import Icons from './components/sidebar/Icons'
import Register from './components/sidebar/Register'
import SamplePage from './components/sidebar/SamplePage'
import ChartApex from './components/chart/chartApex'
import MapVector from './components/chart/MapVector'
import AccountProfile from './components/application/AccountProfile'
import Calender from './components/application/Calender'
import Chat from './components/application/Chat'
import CustomerList from './components/application/CustomerList'
import EcommerceCheckout from './components/application/EcommerceCheckout'
import EcommerceProduct from './components/application/EcommerceProduct'
import EcommerceAddProduct from './components/application/EcommerceAddProduct'
import EcommerceProductDetails from './components/application/EcommerceProductDetails'
import EcommereceProductList from './components/application/EcommereceProductList'
import UserCard from './components/application/UserCard'
import UserList from './components/application/UserList'
import UserProfile from './components/application/UserProfile'

const Routers = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/typography" element={<Typography />} />
      <Route path="/color" element={<Color />} />
      <Route path="/icons" element={<Icons />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/samplepage" element={<SamplePage />} />
      <Route path="/chart-apex" element={<ChartApex />} />
      <Route path="/map-vector" element={<MapVector />} />
     {/* Account profile routing */}
     <Route path="/account-profile" element={<AccountProfile />} />
     <Route path="/calender" element={<Calender />} />
     <Route path="/chat" element={<Chat />} />
     <Route path="/customer-list" element={<CustomerList/>} />
     <Route path="/ecom-checkout" element={<EcommerceCheckout/>} />
     <Route path="/ecom-product" element={<EcommerceProduct/>} />
     <Route path="/ecom-product-add" element={<EcommerceAddProduct/>} />
     <Route path="/ecom-product-details" element={<EcommerceProductDetails/>} />
     <Route path="/ecom-product-list" element={<EcommereceProductList/>} />
     <Route path="/user-card" element={<UserCard/>} />
     <Route path="/user-list" element={<UserList/>} />
     <Route path="/user-profile" element={<UserProfile/>} />
  
     </Routes>
    </>

  )
}

export default Routers