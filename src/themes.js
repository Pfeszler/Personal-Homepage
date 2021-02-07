const otherProperties = {
    breakpoints: {
        tabletMax: 991,
        mobileMax: 767
    },
    transition: {
        darkModeButton: 0
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);"}

export const light = {
    ...otherProperties,
    color: {
        background: "#FBFBFE ",
        textPrimary: "#252525",
        textSecondary: "#6E7E91",
        darkModeIcon: "#FFFFFF",
        buttonText: "#FFFFFF",
        buttonBackground: "#0366D6",
        buttonBorder: "rgba(209, 213, 218, 0.1)",
        buttonFocus: "#8CC2FF",
        socialIconColor: "#0366D6",
        slider: "#E5E5E5",
        sliderBorder: "rgba(209, 213, 218, 0.3)",
        sliderButton: "#6E7E91",
        section: "#FFFFFF",
        sectionHeaderBorder: "rgba(209, 213, 218, 0.3)",
        bullet: "#0366D6",
        gridBorder: "rgba(209, 213, 218, 0.3)",
        gridBorderHover: "rgba(3, 102, 214, 0.2);",
        projectTitle: "#0366D6",
        link: "#0366D6",
        emailHover: "#0366D6"
    },
}

export const dark = {
    ...otherProperties,
    color: {
        background: "#252525",
        textPrimary: "#FFFFFF",
        textSecondary: "#FFFFFF",
        darkModeIcon: "#252525",
        buttonText: "#FFFFFF",
        buttonBackground: "#2188FF",
        buttonBorder: "rgba(209, 213, 218, 0.1)",
        buttonFocus: "#6D93BE",
        socialIconColor: "#2188FF",
        slider: "rgba(54, 54, 54, 0.72)",
        sliderBorder: "rgba(9, 10, 51, 0.02)",
        sliderButton: "#FFFFFF",
        section: "rgba(54, 54, 54, 0.72);",
        sectionHeaderBorder: "rgba(209, 213, 218, 0.1)",
        bullet: "#2188FF",
        gridBorder: "rgba(209, 213, 218, 0.3)",
        gridBorderHover: "rgba(3, 102, 214, 0.5)",
        projectTitle: "#FFFFFF",
        link: "#2188FF",
        emailHover: "#2188FF"
    }
}