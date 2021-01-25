import React from "react"
import { Button, Icon, Label, Slider, Wrapper } from "./styled"
import image from "../../assets/darkModeButton.svg"


const DarkModeButton = () => (
    <Wrapper>
        <Label>
            dark mode
        </Label>
        <Slider>
            <Button>
                <Icon src={image} />
            </Button>
        </Slider>
    </Wrapper>
)

export default DarkModeButton