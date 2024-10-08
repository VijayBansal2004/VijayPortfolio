import React from 'react'
import Header from "../header/Header"
import Home from "../heroSection/Home"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import ContactMe from "../contactMe/ContactMe"
import Footer from "../footer/Footer"
import styles from "./Layout.module.css"
import AboutMe from '../aboutMe/AboutMe'

import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
            <div className={`${styles.gotoHome}`}>
                <Nav.Link href="#home" className="btn primaryBtn">^</Nav.Link>
            </div>
        </>
    )
}

export default Layout