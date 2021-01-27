import React from "react"
import Icon from "../../assets/GitHubLogo.svg"
import { Header, PortfolioIcon, StyledPortfolioHeader, Subheader } from "./styled"

const PortfolioHeader = () => (
    <StyledPortfolioHeader>
        <PortfolioIcon
            src={Icon}
            alt="GitHub Icon"
        />
        <Header>
            portfolio
        </Header>
        <Subheader>
            My recent projects
        </Subheader>

    </StyledPortfolioHeader>
)

export default PortfolioHeader