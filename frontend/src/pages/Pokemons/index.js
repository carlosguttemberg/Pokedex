import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {GlobalStyle, ListPokemon, LiList, ImgPokemon, Paragraph} from '../../styles';
import Header from '../Header';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    async function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        await loadPokemons();
    }

    async function loadPokemons() {
        if(loading){
            return null;
        }

        if(total > 0 && pokemons.length === total){
            return null;
        }

        setLoading(true);

        const response = await api.get('/', {
            params: {page}
        });

        setPokemons(pokemons => [...pokemons, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page => page +1);
        setLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, page, total]);

    async function handleAttributes(id, e) {
        e.preventDefault();
    
        try{
            console.log('teste - ' + id);
            history.push({pathname: '/attributes',
                          state: { id: id}
            });
        } catch(err){
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <GlobalStyle>
            <Header/>
            <ListPokemon>
                { pokemons.map(pokemon => (
                    <LiList key={pokemon.id} onClick={(e) => handleAttributes(pokemon.id, e)}>
                        <ImgPokemon src={pokemon.img_front} alt={pokemon.name}></ImgPokemon>
                        <Paragraph><b><i>#{pokemon.id}</i> - {pokemon.name}</b></Paragraph>
                    </LiList>
                ))}
            </ListPokemon>
        </GlobalStyle>
    );

}