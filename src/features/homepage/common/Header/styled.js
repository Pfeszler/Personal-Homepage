import styled from "styled-components"
import picture from "../assets/picture.jpg"

export const StyledHeader = styled.h1`
    width: 100%;
    display: flex;
    flex-basis: 25%;
    margin: 0;
` 
export const Picture = styled.div`
    width: 25%;
    background-image: url(${picture});
    background-size: cover;
    border-radius: 50%;

    &::after {
        content: "";
        padding-bottom: 100%;
        display: block;
    }
`
export const Text = styled.section`
    margin: 0 66px;
`
