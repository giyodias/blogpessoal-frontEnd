import { useState } from 'react'
import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Login from './paginas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div style={{minHeight: '85vh'}}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cadastrousuario' element={<CadastroUsuario/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
