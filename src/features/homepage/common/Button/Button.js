import styled, { css } from "styled-components"

export const Button = styled.button`
    width: 20%;
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.buttonBackground};
    border: 1px solid ${({ theme }) => theme.color.buttonBorder};
    transition: box-shadow 0.2s;
    text-decoration: none;

    &:hover {
        box-shadow: 2px -2px 0px ${({ theme }) => theme.color.buttonFocus},
         -2px 2px 0px ${({ theme }) => theme.color.buttonFocus}, 
         2px 2px 0px ${({ theme }) => theme.color.buttonFocus}, 
         -2px -2px 0px ${({ theme }) => theme.color.buttonFocus};
    }

    &:focus {
        outline: none;
        box-shadow: 2px -2px 0px ${({ theme }) => theme.color.buttonFocus},
         -2px 2px 0px ${({ theme }) => theme.color.buttonFocus}, 
         2px 2px 0px ${({ theme }) => theme.color.buttonFocus}, 
         -2px -2px 0px ${({ theme }) => theme.color.buttonFocus};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
       font-size: 18px;
       width: 25%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       font-size: 18px;
       width: 50%;
    }

    ${({ type }) => type === "hire" && css`
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: center;
        grid-gap: 18px;
        margin: 8px 0;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            grid-gap: 14px;
    }
    `}
`