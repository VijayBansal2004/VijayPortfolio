import React from 'react'
import Header from "../header/Header"
import Home from "../heroSection/Home"
import Skills from "../skills/Skills"
import ContactMe from "../contactMe/ContactMe"
import Footer from "../footer/Footer"
import styles from "./Layout.module.css"

const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <Skills />
            <ContactMe />
            <Footer />
            <div className={`${styles.gotoHome}`}>
                <a href='#home' className="btn primaryBtn" type="text">^</a>
            </div>
        </>
    )
}

export default Layout