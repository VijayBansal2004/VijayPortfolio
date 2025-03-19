import React, { useState, useEffect } from 'react'
import Header from "../header/Header"
import Home from "../heroSection/Home"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import ContactMe from "../contactMe/ContactMe"
import Footer from "../footer/Footer"
import styles from "./Layout.module.css"
import AboutMe from '../aboutMe/AboutMe'
import Nav from 'react-bootstrap/Nav';
import Blogs from '../blogs/Blogs'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../login/Login'
import Loader from '../utilityComponents/loader/Loader'

const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading
                ?
                (<Loader />)
                :
                (<Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                                <AboutMe />
                                <Skills />
                                <Projects />
                                <ContactMe />
                            </>
                        } />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<ContactMe />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Footer />
                    <div className={`${styles?.gotoHome}`}>
                        <Nav.Link href="#root" className="btn primaryBtn">^</Nav.Link>
                    </div>
                </Router>)}
        </>
    )
}

export default Layout