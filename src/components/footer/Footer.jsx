import React from 'react'
import styles from "./Footer.module.css"
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container row gap-4 gap-lg-0">
                <div className="footerLogo col-12 col-lg-3 text-center text-lg-start">
                    <h1>Logo</h1>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center text-center text-lg-start">
                    <ul className={`${styles.footerLinks} m-0 justify-content-center flex-column flex-sm-row`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutMe">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contactMe">Contact Me</a></li>
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
