import React from "react"
import { Button, Icon, Label, Slider, Wrapper } from "./styled"
import image from "../../assets/darkModeButton.svg"
import { useSelector } from "react-redux"
import { selectDarkMode } from "../../../pageSlice"


const DarkModeButton = () => {

    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper>
            <Label>
                dark mode {darkMode ? "on" : "off"}
            </Label>
            <Slider>
                <Button>
                    <Icon 
                    src={image}
                    darkMode = {darkMode}
                     />
                </Button>
            </Slider>
        </Wrapper>
    )
}

export default DarkModeButton