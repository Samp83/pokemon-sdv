import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import ListallPokemons from './pages/ListAllPokemons'
import ListAllTypes from './pages/ListAllTypes'
import PokemonsByType from './pages/PokemonsByType'
import ShowPokemon from './pages/ShowPokemon'
import RandomPokemon from './pages/DisplayOneRandomPokemon'
import PokemonSearchResults from './pages/PokemonSearchResults'
import Fight from './pages/Fight'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/all-pokemons" element={<ListallPokemons />} />
        <Route path="/all-types" element={<ListAllTypes />} />
        <Route path="/type/:type" element={<PokemonsByType/>} />
        <Route path="/pokemon/:id" element={<ShowPokemon/>} />
        <Route path="/random" element={<RandomPokemon/>} />
        <Route path="/search-results/" element={<PokemonSearchResults />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App