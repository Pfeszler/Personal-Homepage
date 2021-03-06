import React from "react"
import { Button, Icon, Label, Slider, Wrapper } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { selectDarkMode, toggleDarkMode } from "../../../pageSlice"


const DarkModeButton = () => {

    const darkMode = useSelector(selectDarkMode);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Label>
                dark mode {darkMode ? "on" : "off"}
            </Label>
            <Slider
                onClick={() => dispatch(toggleDarkMode())}
            >
                <Button>
                    <Icon />
                </Button>
            </Slider>
        </Wrapper>
    )
}

export default DarkModeButton