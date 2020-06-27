import React from 'react';
import {SearchInput, HeaderApplication} from '../../styles';
import pokemonImg from '../../assets/pokemon-logo.png';
import { Search } from '@styled-icons/material'

export default function Header() {
    return( 
        <HeaderApplication>
            <img src={pokemonImg} ></img>
            <SearchInput placeholder="Search (Press '/' to focus)"></SearchInput>
        </HeaderApplication>
    );
}