import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import Transaction from './pages/Transaction/Transaction'
import EditUser from './pages/EditUser/EditUser'
import User from './pages/User/User'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/EditUser" element={<EditUser />}></Route>
        <Route path="/Transaction" element={<Transaction />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
