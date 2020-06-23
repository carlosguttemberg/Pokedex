import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {GlobalStyle} from '../../styles';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        api.get('/').then(response => {
            setPokemons(response.data);
        } ) ;
    });

    return (
        <GlobalStyle>
            <ul>
                
                { pokemons.map(pokemon => (
                    <li key={pokemon.id}>
                        <img src={pokemon.img_front}></img>
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </GlobalStyle>
    );

}