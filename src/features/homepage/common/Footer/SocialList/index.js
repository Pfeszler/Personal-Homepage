import React from "react"
import { IconLink, StyledSocialList } from "./styled"
import { socials } from "./socials"

const SocialList = () => (
    <StyledSocialList>
        {socials.map(({ title, link, Icon }) => (
            <IconLink
                href={link}
                title={title}
                target="_blank"
                rel="nonreferer"
            >
                <Icon />
            </IconLink>
        ))}
    </StyledSocialList>
)

export default SocialList