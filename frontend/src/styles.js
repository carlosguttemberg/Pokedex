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
        color: #737380;
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
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
`;

export const HeaderApplication = styled.header `
    margin-bottom: 10px;
`;