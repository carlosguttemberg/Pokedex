import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from "react-router-dom";
import api from '../../services/api';
import Header from '../Header';
import {GlobalStyle, ListPokemon} from '../../styles';

export default function Attributes() {
    
    const location = useLocation();
    const history = useHistory();
    const [attributes, setAttributes] = useState([]);

    if(typeof(location.state) === "undefined"){
        history.push('/');
    }

    useEffect(() => {
        api.get('attributes', {
            headers: {
                pokemon_id: location.state.id,
            }
        }).then(response => {
            setAttributes(response.data);
        } ) ;
    }, [location.state.id] );

    return( 
        <GlobalStyle>
            <Header/>
            <ListPokemon>
                { attributes.map(attribute => (
                    <li><img src={attribute.img_front} alt={attribute.name}></img></li>
                ) ) }
            </ListPokemon>
        </GlobalStyle>
    );
}