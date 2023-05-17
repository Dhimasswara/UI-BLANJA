import './App.css'
import AuthLogin from './pages/auth/Login'
import Home from './pages/home'
import { BrowserRouter, Router } from 'react-router-dom'
import DetailProduct from './pages/detail-product'
import MyBag from './pages/mybag'
import ProfileCustomer from './pages/profile-customer'
import { Routes, Route } from 'react-router-dom'
import ProfileSeller from './pages/profile-seller'
import Checkout from './pages/checkout'
import AuthRegister from './pages/auth/Register'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybag" element={ <MyBag /> }/>
        <Route path="/checkout" element={ <Checkout /> }/>
        <Route path="/detail-product" element={ <DetailProduct /> }/>
        <Route path="/profile-customer" element={ <ProfileCustomer /> } />
        <Route path="/profile-customer/test" element={ <ProfileCustomer /> } />
        <Route path="/profile-customer/test2" element={ <ProfileCustomer /> } />
        <Route path="/profile-seller" element={<ProfileSeller />} />
        <Route path="/profile-seller/store" element={ <ProfileSeller /> } />
        <Route path="/profile-seller/product" element={ <ProfileSeller /> } />

        <Route path="/login" element={ <AuthLogin /> }/>
        <Route path="/register" element={ <AuthRegister /> }/>



      </Routes>
    </BrowserRouter>
  )
}

export default App
