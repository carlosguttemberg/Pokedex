import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from "react-router-dom";
import api from '../../services/api';
import { returnTypeIcons } from '../../utils/returnTypeIcons';
import Header from '../Header';
import {GlobalStyle, ImgPokemonTitle, CardDetail, CardImage, Title, LineSeparator, ListAttributes, 
        LiListAttributes, Paragraph, ImgAttribute, ImgTypes, SpanLegendaryAttribute, CardSubDetailFlex, 
        CardSubDetailGrid, CardAttributes} from '../../styles';


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
                                <ImgPokemonTitle src={attribute.img_front} alt={attribute.name}></ImgPokemonTitle>
                            </CardImage>

                            <CardSubDetailGrid>
                                <Title><b><i>#{attribute.id}</i> -{attribute.name} / <i>{attribute.generation}</i>° generation</b></Title>
                                <CardSubDetailFlex>
                                    <CardSubDetailFlex>
                                        {<ImgTypes src={returnTypeIcons(attribute.type1)} title={attribute.type1}></ImgTypes>}
                                        <Paragraph>&nbsp;<b>{attribute.type1}</b></Paragraph>
                                    </CardSubDetailFlex>

                                    { attribute.type2 ? 
                                        <CardSubDetailFlex>
                                             <Paragraph> &nbsp; <b>-</b> &nbsp;</Paragraph>
                                            <ImgTypes src={returnTypeIcons(attribute.type2)} title={attribute.type2}></ImgTypes> 
                                            <Paragraph>&nbsp;<b>{attribute.type2}</b></Paragraph> 
                                        </CardSubDetailFlex>: ''}

                                </CardSubDetailFlex>
                                
                            </CardSubDetailGrid>

                            { attribute.legendary ? <SpanLegendaryAttribute>Legendary</SpanLegendaryAttribute> : ''}
                        </CardDetail>

                        <LineSeparator/>

                        <CardAttributes>
                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>HP</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={hp} alt="health"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.hp}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>Defense</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={defense} alt="defense"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.defense}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>Attack</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={attack} alt="attack"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.attack}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>SP Attack</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={sp_attack} alt="sp_attack"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.sp_atk}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>SP Defense</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={sp_defense} alt="sp_defense"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.sp_def}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>

                            <ListAttributes>
                                <LiListAttributes>
                                    <Paragraph><b>Speed</b></Paragraph>
                                    <br/>
                                    <ImgAttribute src={speed} alt="speed"></ImgAttribute>
                                    <br/>
                                    <Paragraph><b>{attribute.speed}</b></Paragraph>
                                </LiListAttributes>
                            </ListAttributes>
                        </CardAttributes>
                    </div>
                ) ) }
        </GlobalStyle>
    );
}