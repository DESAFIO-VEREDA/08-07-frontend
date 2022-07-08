import React, {useContext} from "react";
import {SearchInput} from "./styled.js"
import PokemonContext from "../../contexts/Pokemon.js";

export default function Search() {
    return (
        <SearchInput>
            <input type="text" id="textBusca" placeholder="Buscar"/>
            <img src="magnifying-glass.png" id="btnBusca" alt="Buscar"/>
        </SearchInput>
    )
}