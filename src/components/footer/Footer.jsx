import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container row">
                <div className="footerLogo col-12 col-lg-3">
                    <h1>Logo</h1>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center">
                    <ul className={`${styles.footerLinks} m-0 justify-content-center`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutMe">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contactMe">Contact Me</a></li>
                    </ul>
                </div>

                <div className="footerSocialMedia col-12 col-lg-3 d-flex gap-3 align-items-center justify-content-end">
                    <FaLinkedin />
                    <FaGithub />
                    <AiFillInstagram />
                    <FaFacebook />
                    <FaXTwitter />
                </div>
            </div>
        </footer>
    )
}

export default Footer
