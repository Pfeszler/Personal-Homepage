import React from "react"
import { Email, FooterHeader, FooterText } from "./styled"
import { email } from "../assets/email"
import SocialList from "./SocialList"

const Footer = () => (
    <footer>
        <FooterHeader>
            let's talk!
        </FooterHeader>
        <Email
            href={`mailto:${email}`}
            title={email}
        >
            {email}
        </Email>
        <FooterText>
            If you want to talk about web development, job oportunieties or offer some feedback on my project feel free to contanct me, you can find a direct link to my e-mail adres above.
           <br />
            PS. Also, i love DnD and always happy to talk about it, so any message about my favorite tabletop game is also welcome ;)
        </FooterText>
        <SocialList />
    </footer>
)

export default Footer