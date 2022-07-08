import React, { createContext, useState, useEffect } from "react";
import pokeAPI from "../services/api"

export const PokemonContext = createContext({})

export default function PokemonProvider({children}){
    const [pokemon, setPokemon] = useState()
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(30)

    useEffect(()=>{
        getPokemon(limit,offset)
    },[offset])

    async function getPokemon(limit,offset){
        let response = pokeAPI.get(`pokemon?limit=${limit}&offset=${offset}`)
        setPokemon((await response).data.results)
    }

    async function getPokemonByName(name){
        let response = pokeAPI.get(`pokemon/${name}`)
        return response.data
    }

    return(
        <PokemonContext.Provider
            value={{
                pokemon,
                offset,
                setOffset,
                limit,
                setLimit,
                getPokemonByName
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}