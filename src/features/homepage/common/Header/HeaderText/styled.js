import styled from "styled-components"

export const StyledHeaderText = styled.section`
    flex-shrink: 1;
    margin: 0 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 0 3px
    }
`

export const FirstHeader = styled.h2`
    font-size: 12px;
    margin: 0;
    margin-bottom: 12px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
       margin-bottom: 8px
    }
`

export const Name = styled.h3`
    margin: 0;
    font-size: 38px;
    font-weight: 900;
    text-transform: capitalize;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
       font-size: 27px;
    }
`
export const HeaderDiscription = styled.p`
    margin: 35px 0;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
       margin: 16px 0;
       font-size: 17px;
    }
`
export const HireButon = styled.button`
    margin: 8px 0;
    width: 20%;
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.hireButtonText};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.hireButtonBackground};
    border: 1px solid ${({ theme }) => theme.color.hireButtonBorder};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       font-size: 18px;
       width: 50%;
    }
`