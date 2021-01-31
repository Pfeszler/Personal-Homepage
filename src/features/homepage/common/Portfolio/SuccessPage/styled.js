import styled from "styled-components"

export const StyledSuccessPage = styled.ul`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr; 
        grid-gap: 0;
    }
`

export const ProjectTile = styled.li`
    height: 322px;
    padding: 56px;
    background-color: ${({ theme }) => theme.color.section};
    border: 6px solid ${({ theme }) => theme.color.gridBorder};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow};
    transition: border 0.2s;

    &:hover{
        border: 6px solid ${({ theme }) => theme.color.gridBorderHover};
    }
    

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: unset;
        min-height: 240px;
        padding: 24px;
    }
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.projectTitle};
    text-transform: capitalize;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`

export const Description = styled.p`
    margin: 24px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.color.textSecondary};
    text-align: justify;
`
export const LinkContainer = styled.div`
    margin: 8px 0;
    font-size: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`

export const Label = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
    text-transform: capitalize;

`

export const Link = styled.a`
    display: inline-block;
    padding: 1px 0;
    margin-left: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.link};
    border-bottom: 1px solid transparent;
    transition: border 0.2s;

    &:hover{
        border-bottom: 1px solid currentColor;
    }

    &:focus {
        outline: none;
        border-bottom: 1px solid currentColor;
    }
    
`