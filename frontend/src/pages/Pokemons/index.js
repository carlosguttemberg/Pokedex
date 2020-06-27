import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {GlobalStyle, ListPokemon} from '../../styles';
import Header from '../Header';
import load from '../../assets/load.gif'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    let   page = 1;
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    async function loadPokemons() {
        if(loading){
            return null;
        }

        if(total > 0 && pokemons.length == total){
            return null;
        }

        setLoading(true);

        const response = await api.get('/', {
            params: {page}
        });

        setPokemons(pokemons => [...pokemons, ...response.data]);
        setTotal(response.headers['x-total-count']);
        page = page +1;
        setLoading(false);
    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        loadPokemons();
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <GlobalStyle>
            <Header/>
            <ListPokemon>
                { pokemons.map(pokemon => (
                    <li key={pokemon.id}>
                        <img src={pokemon.img_front}></img>
                        <p><b><i>#{pokemon.id}</i> - {pokemon.name}</b></p>
                    </li>
                ))}
            </ListPokemon>
        </GlobalStyle>
    );

}