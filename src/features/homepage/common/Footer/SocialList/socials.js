import { StyledIcon } from "./styled"
import { ReactComponent as Facebook } from "../../assets/FacebookLogo.svg"
import { ReactComponent as GitHub } from "../../assets/GitHubLogo.svg"
import { ReactComponent as LinkedIn } from "../../assets/LinkedInLogo.svg"

export const socials = [
    {
        title: "My GitHub",
        link: "https://github.com/Pfeszler/",
        Icon: StyledIcon(GitHub)
    },
    {
        title: "My LinkedIn",
        link: "https://www.linkedin.com/in/pawe%C5%82-feszler-9054471b5/",
        Icon: StyledIcon(LinkedIn)
    },
    {
        title: "My Facebook",
        link: "https://www.facebook.com/profile.php?id=100002437820661",
        Icon: StyledIcon(Facebook)
    },

]