import React from 'react'
import styles from "./Footer.module.css"
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks"
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container row gap-4 gap-lg-0">
                <div className="footerLogo col-12 col-lg-3 text-center text-lg-start">
                    <Nav.Link href="#home"><h1>Logo</h1></Nav.Link>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center text-center text-lg-start">
                    <ul className={`${styles.footerLinks} m-0 justify-content-center flex-column flex-sm-row`}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contactMe">Contact Me</Nav.Link>
                    </ul>
                </div>

                <div className="footerSocialMedia col-12 col-lg-3 d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                    <SocialMediaLinks />
                </div>
            </div>
        </footer>
    )
}

export default Footer
