import styled from "styled-components"

export const StyledPortfolioHeader = styled.h2`
    margin: 0;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PortfolioIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 13px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
        height: 32px;
    }
`
export const Header = styled.h3`
    margin: 0;
    margin-bottom: 8px;
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.textPrimary};
    text-transform: capitalize;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 16px;
    }
`

export const Subheader = styled.h4`
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`