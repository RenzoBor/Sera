import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './routes/Home.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
