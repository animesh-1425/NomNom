import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes,Route } from 'react-router-dom'
import Add from './components/pages/Add/Add'
import List from './components/pages/List/List'
import Orders from './components/pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const url= "http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-contents">
        <Sidebar/>
        <Routes>
            <Route path='/add' element={<Add url={url}/>}></Route>
            <Route path='/list' element={<List url={url}/>}></Route>
            <Route path='/orders' element={<Orders url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
