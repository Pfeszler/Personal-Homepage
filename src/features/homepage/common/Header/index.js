import React from "react"
import HeaderText from "./HeaderText"
import { Picture, StyledHeader } from "./styled"


const Header = () => (
    <StyledHeader>
        <Picture />
        <HeaderText />
    </StyledHeader>
)

export default Header