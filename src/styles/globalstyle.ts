import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    body {
        
        margin: 0;
        min-height: 100vh;
        color: ${colors.primary};
        background-color: ${colors.background};
        font-family: sans-serif;
        * {
            box-sizing: border-box;
        }
    }

`;
