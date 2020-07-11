import React from 'react';
import {HeaderApplication} from '../../styles';
import pokemonImg from '../../assets/pokemon-logo.png';
import Search from '../autoComplete/index';
import { useHistory } from 'react-router-dom';
//import { Search } from '@styled-icons/material'

export default function Header() {
    const history = useHistory();

    async function handleAttributes(e) {
        e.preventDefault();
    
        try{
            history.push({pathname: '/'
            });
        } catch(err){
            alert('Something is wrong.')
        }
    }

    return( 
        <HeaderApplication>
            <img src={pokemonImg} style={{cursor: 'pointer'}} onClick={(e) => handleAttributes(e)} alt="Pokemon" ></img>

            <Search />
        </HeaderApplication>
    );
}