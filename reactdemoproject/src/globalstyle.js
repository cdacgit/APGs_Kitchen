import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body { 
        overflow-y: visible;
        overflow-x: hidden;
        background-position: 100% 100%;
    }
    Nav {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Dancing Script', sans-serif;
    }
`