import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './routes/Home.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Construccion from './routes/Construccion.jsx'
import Whatsapp from './components/Whatsapp.jsx'
import Categoria from './routes/Categoria.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
  <Whatsapp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='categoria/:cat' element={<Categoria/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
