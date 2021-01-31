import styled from "styled-components"

export const StyledFailedPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start; 
    padding: 100px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 30px 15px;
    }
`

export const Icon = styled.img`
    margin-bottom: 23px;

`

export const FailedHeader = styled.h3`
    font-size: 24px;
    margin: 0;
    margin-bottom: 32px;
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        margin-bottom: 23px;
    }
`

export const FailedDescription = styled.p`
    margin: 0;
    margin-bottom: 44px;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
`