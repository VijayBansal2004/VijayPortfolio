import React from 'react'
import styles from "./Footer.module.css"
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container row gap-4 gap-lg-0">
                <div className="footerLogo col-12 col-lg-3 text-center text-lg-start">
                    <NavLink to="/" className={styles.logo}><h1>Vijay</h1></NavLink>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center text-center text-lg-start">
                    <ul className={`${styles.footerLinks} m-0 justify-content-center flex-column flex-sm-row`}>
                        <NavLink to="/" className={`${styles.navlink}`}>Home</NavLink>
                        <NavLink to="/about" className={`${styles.navlink}`}>About Me</NavLink>
                        <NavLink to="/skills" className={`${styles.navlink}`}>Skills</NavLink>
                        <NavLink to="/projects" className={`${styles.navlink}`}>Projects</NavLink>
                        <NavLink to="/contact" className={`${styles.navlink}`}>Contact Me</NavLink>
                        <NavLink to="/blogs" className={`${styles.navlink}`}>Blogs</NavLink>
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
