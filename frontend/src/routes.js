import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pokemons from './pages/Pokemons';

export default function Routes() {
    return( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pokemons}/>
            </Switch>
        </BrowserRouter>
    );
}