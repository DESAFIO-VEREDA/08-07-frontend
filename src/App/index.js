import React from 'react';
import './style.css'
import Barra from '../components/Barra/Barra';
import Search from "../components/Search/search"
import Titulo from '../components/Titulo/Titulo';
import { BrowserRouter } from "react-router-dom";
import PokemonContext  from '../contexts/Pokemon';

export const App = () => {
  return (
    <BrowserRouter>
        <Barra />
        <Search />
        <Titulo />
    </BrowserRouter>
  )
}
