import { useState, useEffect } from 'react'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import ListallPokemon from './pages/ListAllPokemons'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/all-pokemons" element={<ListallPokemon />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App