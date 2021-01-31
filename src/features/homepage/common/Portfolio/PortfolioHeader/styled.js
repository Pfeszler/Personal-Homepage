import styled from "styled-components"

export const StyledPortfolioHeader = styled.h2`
    width: 100%;
    margin: 0;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PortfolioIcon = styled.svg.attrs({ viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg" })`
    width: 40px;
    height: 40px;
    margin-bottom: 13px;

    path {
        fill: ${({ theme }) => theme.color.socialIcon};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
        height: 32px;
    }
`
export const Header = styled.p`
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

export const Subheader = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`