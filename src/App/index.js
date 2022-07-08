import React from 'react';
import './style.css'
import Barra from '../components/Barra/Barra';
import Search from "../components/Search/search"
import Titulo from '../components/Titulo/Titulo';

export const App = () => {
  return (
    <div>
      <Barra />
      <Search />
      <Titulo />
    </div>
  );
}
