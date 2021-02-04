import React from "react"
import { Header, PortfolioIcon, StyledPortfolioHeader, Subheader } from "./styled"

const PortfolioHeader = () => (
    <StyledPortfolioHeader>
        <PortfolioIcon />
        <Header>
            portfolio
        </Header>
        <Subheader>
            My recent projects
        </Subheader>

    </StyledPortfolioHeader>
)

export default PortfolioHeader