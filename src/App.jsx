import { useState, useEffect } from 'react'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import ListallPokemons from './pages/ListAllPokemons'
import ListAllTypes from './pages/ListAllTypes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/all-pokemons" element={<ListallPokemons />} />
        <Route path="/all-types" element={<ListAllTypes />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App