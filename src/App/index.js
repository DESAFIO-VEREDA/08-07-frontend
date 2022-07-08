import React from 'react';
import './style.css'
import Barra from '../components/Barra/Barra';
import Search from "../components/Search/search"
import Titulo from '../components/Titulo/Titulo';
import { BrowserRouter } from "react-router-dom";
import Search from "../components/search"
import PokemonContext  from '../contexts/Pokemon';

export const App = () => {
  return (
    <BrowserRouter>
      <PokemonContext>
        <Barra />
        <Search />
        <Titulo />
      </PokemonContext>
    </BrowserRouter>
  )
}
