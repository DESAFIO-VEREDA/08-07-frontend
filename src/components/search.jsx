import React from "react";
import "./search.css";

export default search => {
    return (
        <div className="search">
            <input type="text" id="textBusca" placeholder="Buscar"/>
            <img src="magnifying-glass.png" id="btnBusca" alt="Buscar"/>
        </div>
    )
}