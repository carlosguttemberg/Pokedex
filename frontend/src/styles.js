import styled from "styled-components";

export const GlobalStyle = styled.div `
    padding: 1rem;
    max-width: 1100px;
    margin: auto;
`;

export const ListPokemon = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 15px;
    text-align: center;
    position: relative;
    margin: auto;

    li{
        cursor: pointer;
        width: 12rem auto;
        align-items: center;
        background: #203144;
        padding: 24px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
    }

    li:hover {
        transform: scale(1.05);
    }

    li p {
        color: #FFFFFF;
        line-height: 21px;
        font-size: 16px;
    }

    li img {
        width: 150px;
        display: block;
        margin: auto;
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
    margin-bottom: 50px;
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