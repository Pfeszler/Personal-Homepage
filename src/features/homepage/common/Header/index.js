import React from "react"
import DarkModeButton from "./DarkModeButton"
import HeaderText from "./HeaderText"
import { Picture, StyledHeader } from "./styled"


const Header = () => (
    <StyledHeader>
        <Picture />
        <HeaderText />
        <DarkModeButton />
    </StyledHeader>
)

export default Header