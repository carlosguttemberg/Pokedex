import styled from "styled-components";

export const GlobalStyle = styled.div `
    padding: 1rem;
    max-width: 1100px;
    margin: auto;
`;

export const LiList = styled.li `
    cursor: pointer;
    width: 12rem auto;
    align-items: center;
    background: #203144;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 3px rgba(66,153,225,.5);
    }
`;

export const Paragraph = styled.p `
    color: #FFFFFF;
    line-height: 21px;
    font-size: 16px;
`;

export const Title = styled.h1 `
    color: #FFFFFF;
    text-align:center; 
`;

export const CardDetail = styled.div `
    width: 100%;
    background: #203144;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const CardImage = styled.div `
    width: 150px;
    float: left;
`;

export const ImgPokemon = styled.img `
    width: 150px;
    display: block;
    margin: auto;
`;

export const ImgAttribute = styled.img `
    width: 80px;
    display: block;
    margin: auto;
`;

export const ListPokemon = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 15px;
    text-align: center;
    position: relative;
    margin: auto;
`;

export const ListAttributes = styled.ul `
    display: flex;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 15px;
    text-align: center;
    position: relative;
    margin: auto;
`;

export const LiListAttributes = styled.li `
    cursor: pointer;
    width: 12rem auto;
    align-items: center;
    background: #203144;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 3px rgba(66,153,225,.5);
    }
`;

export const SearchInput = styled.input `
    width: 40%;
    height: 35px;
    color: #95AABC;
    border: 2px solid #203144;
    border-radius: 9999px;
    padding: 0 24px;
    background-color:#203144;
    margin-left: auto;
    margin-top: 3px;
    font-size: 15px;
    color: white;

    &:focus{
        box-shadow: 0 0 0 3px rgba(66,153,225,.5);
    }
`;

export const HeaderApplication = styled.header `
    margin-bottom: 15px;
    display: flex;
    border-bottom: 2px solid #203144;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    img {
        width: 200px;
        display: block;
        margin-right: auto;
    }
`;

export const LineSeparator = styled.hr `
    border: 2px solid #203144;
    margin-bottom: 20px;
`;

export const PokeButton = styled.button `
    width: 100%;
    height: 60px;
    background: #203144;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    cursor: pointer;

    &:Hover{
        box-shadow: 0 0 0 3px rgba(66,153,225,.5);
    }
`;

export const DivPaginator = styled.div `
    display: flex;
    margin-bottom: 15px;
`;