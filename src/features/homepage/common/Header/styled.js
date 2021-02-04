import styled from "styled-components"
import picture from "../assets/picture.jpg"

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    margin: 0 0;
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const Picture = styled.div`
    flex: 1 0 25%;
    background-image: url(${picture});
    background-size: cover;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 50%;
        margin-bottom: 13px;
    }

    &::after {
        content: "";
        padding-bottom: 100%;
        display: block;
    }
`