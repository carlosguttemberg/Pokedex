import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pokemons from './pages/Pokemons';
import Attributes from './pages/Attributes';

export default function Routes() {
    return( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pokemons}/>
                <Route path="/attributes" component={Attributes}/>
            </Switch>
        </BrowserRouter>
    );
}