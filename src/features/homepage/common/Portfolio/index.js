import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectStatus } from "../../pageSlice"
import { useFetchFromApi } from "../../useFetchFromApi"
import PortfolioHeader from "./PortfolioHeader"
import FailedPage from "./PortfolioHeader/FailedPage"
import LoadingPage from "./PortfolioHeader/LoadingPage"
import SuccessPage from "./PortfolioHeader/SuccessPage"
import { StyledPortfolio } from "./styled"

const Portfolio = () => {

    const fetchFromApi = useFetchFromApi();
    useEffect(() => { fetchFromApi() }, [])
    // intentional empty dependency array, to ensure that fetch will be done only on first load

    const status = useSelector(selectStatus);

    return (
        <StyledPortfolio>
            <PortfolioHeader />
            <SuccessPage
                status={status}
            />
            <FailedPage
                status={status}
            />
            <LoadingPage
                status={status}
            />
        </StyledPortfolio>
    )
}

export default Portfolio