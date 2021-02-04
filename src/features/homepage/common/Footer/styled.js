import styled from "styled-components"

export const FooterHeader = styled.h2`
    margin: 24px 0;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};
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
`

export const FooterText = styled.p`
    width: 60%;
    margin: 24px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.color.textPrimary};
`

export const StyledIcon = Icon => styled(Icon)`
    height: auto;
    width: 40px;
`