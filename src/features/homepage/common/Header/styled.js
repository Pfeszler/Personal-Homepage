import styled from "styled-components"
import picture from "../assets/picture.jpg"

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    margin: 0 0;
    position: relative;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const Picture = styled.div`
    flex: 1 0 25%;
    aspect-ratio: 1 / 1;
    background-image: url(${picture});
    background-size: cover;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 25%;
        margin-bottom: 13px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 50%;
    }

    
`