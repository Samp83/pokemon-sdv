import { useState, useEffect } from 'react'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import ListallPokemons from './pages/ListAllPokemons'
import ListAllTypes from './pages/ListAllTypes'
import TypeSearchResults from './pages/TypeSearchResults'
import PokemonsByType from './pages/PokemonsByType'
import ShowPokemon from './pages/ShowPokemon'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/all-pokemons" element={<ListallPokemons />} />
        <Route path="/all-types" element={<ListAllTypes />} />
        <Route path="/type/:type" element={<PokemonsByType/>} />
        <Route path="/pokemon/:id" element={<ShowPokemon/>} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App