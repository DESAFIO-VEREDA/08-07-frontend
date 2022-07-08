import React from "react";
import {Search} from "./styled.js"

export default function search() {
    return (
        <Search>
            <input type="text" id="textBusca" placeholder="Buscar"/>
            <img src="magnifying-glass.png" id="btnBusca" alt="Buscar"/>
        </Search>
    )
}