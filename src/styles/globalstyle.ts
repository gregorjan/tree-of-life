import { createGlobalStyle } from "styled-components";

//TODO use variables for colors

export const GlobalStyle = createGlobalStyle`
    body {
        
        margin: 0;
        min-height: 100vh;
        color: white;
        background-color: black;
        font-family: sans-serif;
        * {
            box-sizing: border-box;
        }
    }

`;
