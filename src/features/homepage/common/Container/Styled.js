import styled from "styled-components"

export const StyledContainer = styled.main`
    width: calc(100% - 30px);
    max-width: 1220px;
    margin: 115px auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 32px auto;
    }

`