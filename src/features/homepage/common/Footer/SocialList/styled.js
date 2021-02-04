import styled from "styled-components"

export const StyledSocialList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 40px;
    }
`
export const IconLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.textPrimary};
    transition: color 0.3s;
    display: inline-block;
    margin-right: 24px;

    &:hover {
        color: ${({ theme }) => theme.color.socialIconColor}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-right:16px;
    }
`

export const StyledIcon = Icon => styled(Icon)`
    height: auto;
    width: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 32px;
    }
`