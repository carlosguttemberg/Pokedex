import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from "react-router-dom";
import api from '../../services/api';
import Header from '../Header';
import {GlobalStyle, ImgPokemon, CardDetail, CardImage, Title, LineSeparator, ListAttributes, LiListAttributes, Paragraph, ImgAttribute} from '../../styles';


import hp from '../../assets/hp.png';
import defense from '../../assets/defense.png';
import attack from '../../assets/attack.png';
import speed from '../../assets/speed.png';
import sp_attack from '../../assets/sp_attack.png';
import sp_defense from '../../assets/sp_defense.png';

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
                { attributes.map(attribute => (
                    <div>
                        <CardDetail>
                            <CardImage>
                                <ImgPokemon src={attribute.img_front} alt={attribute.name}></ImgPokemon>
                            </CardImage>
                                
                            <Title><b><i>#{attribute.id}</i> -{attribute.name}</b></Title>
                        </CardDetail>

                        <LineSeparator/>

                        <CardDetail>
                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={hp} alt="health"></ImgAttribute>
                                    <Paragraph><b>{attribute.hp}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={defense} alt="defense"></ImgAttribute>
                                    <Paragraph><b>{attribute.defense}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={attack} alt="attack"></ImgAttribute>
                                    <Paragraph><b>{attribute.attack}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={sp_attack} alt="sp_attack"></ImgAttribute>
                                    <Paragraph><b>{attribute.sp_atk}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={sp_defense} alt="sp_defense"></ImgAttribute>
                                    <Paragraph><b>{attribute.sp_def}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <ImgAttribute src={speed} alt="speed"></ImgAttribute>
                                    <Paragraph><b>{attribute.speed}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>
                        </CardDetail>
                    </div>
                ) ) }
        </GlobalStyle>
    );
}