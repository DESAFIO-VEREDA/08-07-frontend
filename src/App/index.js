import './style.css'
import React, { useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Cards } from '../components/Cards';
import {PokemonContext} from '../contexts/Pokemon';
import Barra from '../components/Barra/Barra';
import Search from "../components/Search/search"
import Titulo from '../components/Titulo/Titulo';

export const App = () => {
  const {pokemon, getPokemonByName} = useContext(PokemonContext);

 // console.log(pokemon);
  return (
    <BrowserRouter>
            <Barra />
            <Search />
            <Titulo />
          <ul className='cardGroup'>

        {pokemon?.map((elemento) => {
          return(
          <Cards
           name={elemento.name}
           key={elemento.name}
          />)
        })}
          </ul>
    </BrowserRouter>
  )
}
