import React from "react"
import icon from "../../assets/hireIcon.svg"
import { HeaderDescription, Name, StyledHeaderText, ThisIs } from "./styled"
import { email } from "../../assets/email"
import { Button } from "../../Button/Button"

const HeaderText = () => (
    <StyledHeaderText>
        <ThisIs>
            this is
        </ThisIs>
        <Name>
            paweł feszler
        </Name>
        <HeaderDescription>
            Since beggining of last year i'm learining to become front-end developer. My mainly intetests are javascript es 6 and react.js. Also skilled in html 5 and css 3.
        </HeaderDescription>
        <Button
            as="a"
            href={`mailto:${email}`}
            title={email}
            type="hire"
        >
            <img
                src={icon}
                alt=""
            />
            <span>
                hire me
            </span>
        </Button>
    </StyledHeaderText>
)

export default HeaderText