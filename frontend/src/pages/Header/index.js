import React from 'react';
import {SearchInput, HeaderApplication} from '../../styles';
import pokemonImg from '../../assets/pokemon-logo.png';

export default function Header() {
    return( 
        <HeaderApplication>
            <img src={pokemonImg} ></img>
            <SearchInput></SearchInput>
        </HeaderApplication>
    );
}