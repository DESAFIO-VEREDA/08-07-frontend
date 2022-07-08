import React from 'react';
import './style.css'
import { BrowserRouter } from "react-router-dom";
import Search from "../components/search"
import PokemonContext  from '../contexts/Pokemon';

export const App = () => {
  return (
    <BrowserRouter>
      <PokemonContext>
        <div>
          <h1 className="globalContainer">Boa sorte, candidato!</h1>
        </div>
      </PokemonContext>
    </BrowserRouter>
  )
}
