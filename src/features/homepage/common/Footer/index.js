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
            lorem blsa jwkaj djawk djwkajkldwa jkldjwklqjd irugitejwg  ifdjqwidjqw  oidopkwpok djdskajdz  wqiodiiowaij djskajdaslkjdwaj jfkjwakfjw
        </FooterText>
        <SocialList />
    </footer>
)

export default Footer