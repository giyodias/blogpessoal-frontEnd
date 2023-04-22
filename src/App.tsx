import { useState } from 'react'
import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Login from './paginas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import CadastrarPostagem from './components/postagens/cadastrarPostagem/CadastrarPostagem'
import CadastrarTema from './components/temas/cadastrarTema/CadastrarTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema';

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
        
          <Route exact path='/formularioPostagem' element={<CadastrarPostagem/>}/>
          <Route exact path='/formularioPostagem/:id' element={<CadastrarPostagem/>}/>
          <Route exact path='/formularioTema' element={<CadastrarTema/>}/>
          <Route exact path='/formularioTema/:id' element={<CadastrarTema/>}/>
          <Route exact path='/deletarPostagem/:id' element={<DeletarPostagem/>}/>
          <Route exact path='/deletarTema:/id' element={<DeletarTema/>}/>
        
        
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
