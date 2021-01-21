import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.color.background}
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }
    
    #root {
        margin: 0;
        font-family: 'Inter', sans-serif;
         
    }
`