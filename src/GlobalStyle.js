import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.color.background};
        transition: background 0.3s;
        color: ${({ theme }) => theme.color.textPrimary}
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }
    
    #root {
        margin: 0;
        font-family: 'Inter', sans-serif;

    }
`