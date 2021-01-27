import React, { useEffect } from "react"
import { useFetchFromApi } from "../../useFetchFromApi"
import PortfolioHeader from "./PortfolioHeader"
import { StyledPortfolio } from "./styleds"

const Portfolio = () => {

    const fetchFromApi = useFetchFromApi();
    useEffect(() => { fetchFromApi() }, [])
    // intentional empty dependency array, to ensure that fetch will be done only on first load

    return (
        <StyledPortfolio>
            <PortfolioHeader />
        </StyledPortfolio>
    )
}

export default Portfolio