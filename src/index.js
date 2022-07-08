import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonProvider, { PokemonContext } from './contexts/Pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonProvider>

    <App />
    </PokemonProvider>
  </React.StrictMode>
);