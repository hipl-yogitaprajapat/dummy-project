import React, { useState } from 'react'
import Home from './home'
import { Routes,Route, Navigate } from 'react-router-dom'
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
import LayoutCompact from './components/demo/LayoutCompact'
import LayoutHorizontal from './components/demo/LayoutHorizontal'
import LayoutTab from './components/demo/LayoutTab'
import LayoutVertical from './components/demo/LayoutVertical'
import SweetAlert from './components/elements/advance/SweetAlert'
import DatePicker from './components/elements/advance/DatePicker'
import LightBox from './components/elements/advance/LightBox'
import AdvanceModel from './components/elements/advance/AdvanceModel'
import Notification from './components/elements/advance/Notification'
import RangeSlider from './components/elements/advance/RangeSlider'
import Slider from './components/elements/advance/Slider'
import SyntaxHighlighter from './components/elements/advance/SyntaxHighlighter'
import Tour from './components/elements/advance/Tour'
import TreeView from './components/elements/advance/TreeView'
import BasicAlert from './components/elements/basic/BasicAlert'
import ProtectedRoute from './protectedRoute'
import ForgetPassword from './components/sidebar/ForgetPassword'
import ChangePassword from './components/sidebar/ChangePassword'
import UpdateProfile from './components/sidebar/UpdateProfile'
import ViewProfile from './components/sidebar/ViewProfile'

const Routers = () => {
     const [isAuthenticated, setIsAuthenticated] = useState(false);     

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <>
      <ProtectedRoute setIsAuthenticated={setIsAuthenticated} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard"  element={<PrivateRoute element={<Dashboard />} />}  />
      <Route path="/dashboard/update-profile"  element={<UpdateProfile />} />
      <Route path="/dashboard/view-profile"  element={<ViewProfile />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/typography"  element={<PrivateRoute element={<Typography />} />}  />
      <Route path="/color"  element={<PrivateRoute element={<Color />} />}  />
      <Route path="/icons"  element={<PrivateRoute element={<Icons />} />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
      <Route path="/samplepage" element={<SamplePage />} />
     {/*chart routing */}
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
     {/*Layout routing */}
     <Route path="/layout-compact" element={<LayoutCompact/>} />
     <Route path="/layout-horizontal" element={<LayoutHorizontal/>} />
     <Route path="/layout-tab" element={<LayoutTab/>} />
     <Route path="/layout-vertical" element={<LayoutVertical/>} />
     {/*Elements routing */}
     {/* Basic component */}
    

     {/* Advance component */}
     <Route path="/sweet-alert" element={<SweetAlert/>} />
     <Route path="/datepicker" element={<DatePicker/>} />
     <Route path="/lightbox" element={<LightBox/>} />
     <Route path="/advance-model" element={<AdvanceModel/>} />
     <Route path="/notification" element={<Notification/>} />
     <Route path="/range-slider" element={<RangeSlider/>} />
     <Route path="/slider" element={<Slider/>} />
     <Route path="/syntax-highlighter" element={<SyntaxHighlighter/>} />
     <Route path="/tour" element={<Tour/>} />
     <Route path="/tree-view" element={<TreeView/>} />
      {/* Basic component */}
     <Route path="/basic-alert" element={<BasicAlert/>} />
     </Routes>
    </>

  )
}

export default Routers