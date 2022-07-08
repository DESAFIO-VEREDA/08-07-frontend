import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';

export const Cards = () => {
    const [pokemons, setPokemons] = useState([
        {
            id: "1",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            types: "grass"
        },
        {
            id: "2",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: "3",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: "4",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: "5",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: "6",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: "7",
            name: "bulbassaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
    ]);

    return (
        <div className="cardGroup">
            {pokemons.map((data) => (
                <React.Fragment key={data.id}>
                    <Card className='card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.image} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{data.types}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </React.Fragment>
            ))}
        </div>
    )
}