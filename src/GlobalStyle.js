import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }
    
    #root {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.color.background}
    }
`