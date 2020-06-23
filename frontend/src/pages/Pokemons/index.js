import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        api.get('/').then(response => {
            setPokemons(response.data);
        } ) ;
    });

    return (
        <div>
            { pokemons.map(pokemon => (
                <p>{pokemon.name}</p>
            )

            )};
        </div>
    );

}