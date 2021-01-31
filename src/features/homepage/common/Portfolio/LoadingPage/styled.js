import styled from "styled-components"

export const StyledFailedPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px;
    margin-bottom: 26px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 20px;
        margin-bottom: 13px;
    }
`

export const LoadingText = styled.h3`
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 16px;
    }
   
`

export const LoadingImage = styled.img`
    margin: 48px 0;
    width: 160px;
    animation: spinning 0.8s linear infinite;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 120px;
       margin: 30px;
    }

    &::after {
        content: "";
        padding-bottom: 100%;
        display: block;
    }

    @keyframes spinning {
        50% {
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`