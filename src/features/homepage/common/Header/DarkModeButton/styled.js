import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    position: absolute;
    top: 1px;
    right: 1px;
    align-items: center;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.color.textSecondary};
`

export const Label = styled.p`
    margin: 0 12.5px;
`

export const Slider = styled.div`
    width: 50px;
    height: 27px;
    padding: 2.5px;
    background-color:  ${({ theme }) => theme.color.slider};
    border: 1px solid ${({ theme }) => theme.color.sliderBorder};
    border-radius: 25px;
`

export const Button = styled.button`
    margin: 0;
    border: 0;
    outline: 0;
    padding: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.sliderButton};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
    transform: translateX(${({ theme }) => theme.transition.darkModeButton}%);
  
`

export const Icon = styled.img`
        filter: brightness(${({ theme }) => theme.brightness.darkModeIcon}%);
`