import styled from "styled-components"

export const StyledListSection = styled.section`
    margin: 63px 0;
    padding: 32px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow};
    background: ${({ theme }) => theme.color.section};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px;
    }
`

export const ListHeader = styled.h2`
    padding-bottom: 15px;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.color.sectionHeaderBorder};

    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 1px;
        font-size: 18px;
    }
`

export const List = styled.ul`
    font-size: 18px;
    margin-top: 32px;
    padding: 0; 
    color: ${({ theme }) => theme.color.textSecondary};
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;  
    

    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 12px;
        flex-direction: column;
        font-size: 14px;
        justify-content: start;
        align-items: start;
    }
`

export const ListItem = styled.li`
    width: 33%;
    margin-bottom: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 50%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
    }

    &::before {
        content: "•";
        color: ${({ theme }) => theme.color.bullet};
        vertical-align: text-top;
        display: inline-block;
        height: 9px;
        width: 1em;
    }
`