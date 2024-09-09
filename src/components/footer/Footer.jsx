import React from 'react'
import styles from "./Footer.module.css"
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks"
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container row gap-4 gap-lg-0">
                <div className="footerLogo col-12 col-lg-3 text-center text-lg-start">
                    <Nav.Link href="#home"><h1>Vijay</h1></Nav.Link>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center text-center text-lg-start">
                    <ul className={`${styles.footerLinks} m-0 justify-content-center flex-column flex-sm-row`}>
                        <Nav.Link href="#home" className={`${styles.navlink}`}>Home</Nav.Link>
                        <Nav.Link href="#aboutMe" className={`${styles.navlink}`}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={`${styles.navlink}`}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={`${styles.navlink}`}>Projects</Nav.Link>
                        <Nav.Link href="#contactMe" className={`${styles.navlink}`}>Contact Me</Nav.Link>
                    </ul>
                </div>

                <div className="footerSocialMedia col-12 col-lg-3 d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                    <SocialMediaLinks />
                </div>
            </div>
            <div className="container mt-4">
                <p className='text-center m-0'>&copy;2024 Vijay. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
