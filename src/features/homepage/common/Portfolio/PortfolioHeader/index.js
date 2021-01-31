import React from "react"
import GitHubLogo from "../../assets/GitHubLogo"
import { Header, PortfolioIcon, StyledPortfolioHeader, Subheader } from "./styled"

const PortfolioHeader = () => (
    <StyledPortfolioHeader>
        <PortfolioIcon>
            <GitHubLogo />
        </PortfolioIcon>
        <Header>
            portfolio
        </Header>
        <Subheader>
            My recent projects
        </Subheader>

    </StyledPortfolioHeader>
)

export default PortfolioHeader