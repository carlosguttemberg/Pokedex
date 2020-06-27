import React from 'react';
import { useLocation } from "react-router-dom";

export default function Attributes() {
    
    const location = useLocation();
    console.log(location.state.id);
    return( 
        <h1>TESTE</h1>
    );
}