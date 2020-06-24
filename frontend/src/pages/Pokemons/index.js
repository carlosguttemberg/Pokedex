import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {GlobalStyle, ListPokemon, SearchInput, HeaderApplication} from '../../styles';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        api.get('/').then(response => {
            setPokemons(response.data);
        } ) ;
    });

    return (
       

        <GlobalStyle>
             <HeaderApplication>
                <SearchInput></SearchInput>
            </HeaderApplication>

            <ListPokemon>
                
                { pokemons.map(pokemon => (
                    <li key={pokemon.id}>
                        <img src={pokemon.img_front}></img>
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ListPokemon>
        </GlobalStyle>
    );

}