import React, { useState, useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { PokemonContext } from '../../contexts/Pokemon';
import './styles.css';

export const Cards = ({ name }) => {
    const [infoPokemons, setInfoPokemons] = useState([]);
    const [image, setImage] = useState([]);

    const { getPokemonByName } = useContext(PokemonContext);

    useEffect(() => {
        if(name) {
            async function getPokemon(){
                const response = await getPokemonByName(name);
                setInfoPokemons(response)
            }
            getPokemon()
            
        }
        if(infoPokemons){
            setImage(infoPokemons.sprites.front_default)
        }
    }, [name])
    //  console.log(infoPokemons.sprites.front_default)

    return (
        <div className="cardGroup">
            <Card className='card' style={{ width: '15rem' }}>
                <Card.Img className='pokeImg' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}