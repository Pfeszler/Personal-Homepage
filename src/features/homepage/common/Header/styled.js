import styled from "styled-components"
import picture from "../assets/picture.jpg"

export const StyledHeader = styled.h1`
    width: 100%;
    display: flex;
    margin: 0;
    position: relative;
`
export const Picture = styled.div`
    flex: 1 0 25%;
    background-image: url(${picture});
    background-size: cover;
    border-radius: 50%;

    &::after {
        content: "";
        padding-bottom: 100%;
        display: block;
    }
`