import styled from "styled-components";

export const GlobalStyle = styled.div `
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        list-style: none;
    }

    li{
        align-items: center;
        background: #FFF;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    li p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }

    li img {
        margin: auto;
        width: 50%;
    }
`;