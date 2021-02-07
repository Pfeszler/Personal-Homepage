import styled from "styled-components"

export const FooterHeader = styled.h2`
    margin: 24px 0;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 12px 0;
    }
`

export const Email = styled.a`
    font-size: 32px;
    font-weight: 900;
    margin: 24px 0;
    color: ${({ theme }) => theme.color.textPrimary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.emailHover}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 18px;
        margin: 12px 0;
    }
`

export const FooterText = styled.p`
    width: 60%;
    margin: 24px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width:unset;
        margin: 12px 0;
        font-size: 14px;
    }
`