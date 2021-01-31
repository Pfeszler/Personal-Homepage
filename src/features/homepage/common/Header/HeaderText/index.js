import React from "react"
import icon from "../../assets/hireIcon.svg"
import { FirstHeader, HeaderDescription, HireButon, Name, StyledHeaderText } from "./styled"

const HeaderText = () => (
    <StyledHeaderText>
        <FirstHeader>
            this is
        </FirstHeader>
        <Name>
            paweł feszler
        </Name>
        <HeaderDescription>
            Since beggining of last year i'm learining to become front-end developer. My mainly intetests are javascript es 6 and react.js. Also skilled in html 5 and css 3.
        </HeaderDescription>
        <HireButon
            as="a"
            href="mailto:pfeszler@gmail.com"
        >
            <img
                src={icon}
                alt=""
            />
            <span>
                hire me
            </span>
        </HireButon>
    </StyledHeaderText>
)

export default HeaderText