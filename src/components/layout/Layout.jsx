import { lazy, Suspense } from "react";

import styles from "./Layout.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = lazy(() => import("../heroSection/Home"));
const AboutMe = lazy(() => import("../aboutMe/AboutMe"));
const Skills = lazy(() => import("../skills/Skills"));
const Projects = lazy(() => import("../projects/Projects"));
const ContactMe = lazy(() => import("../contactMe/ContactMe"));
const Login = lazy(() => import("../login/Login"));
const Blogs = lazy(() => import("../blogs/Blogs"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../utilityComponents/loader/Loader";
import Nav from "react-bootstrap/Nav";

const Layout = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Suspense fallback={<Loader />}>
                                    <Home />
                                    <AboutMe />
                                    <Skills />
                                    <Projects />
                                    <ContactMe />
                                </Suspense>
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<Loader />}>
                                <AboutMe />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/skills"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Skills />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Projects />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Suspense fallback={<Loader />}>
                                <ContactMe />
                            </Suspense>
                        }
                    />
                    {/* <Route path="/blogs" element={<Suspense fallback={<Loader />}><Blogs /></Suspense>} /> */}
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Login />
                            </Suspense>
                        }
                    />
                </Routes>
                <Footer />
                <div className={`${styles?.gotoHome}`}>
                    <Nav.Link href="#root" className="btn primaryBtn">
                        ^
                    </Nav.Link>
                </div>
            </Router>
        </>
    );
};

export default Layout;
