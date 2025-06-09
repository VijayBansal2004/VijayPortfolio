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

import { motion, AnimatePresence } from "motion/react";

const Layout = () => {
    const pages = [
        {
            path: "/",
            element:
                <>
                    <Home />
                    <AboutMe />
                    <Skills />
                    <Projects />
                    <ContactMe />
                </>,
        },
        {
            path: "/about",
            element: <AboutMe />,
        },
        {
            path: "/skills",
            element: <Skills />,
        },
        {
            path: "/projects",
            element: <Projects />,
        },
        {
            path: "/contact",
            element: <ContactMe />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ];

    const variants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 1 ? -300 : 300
        }),
        visible: { opacity: 1, x: 0 }
    }

    return (
        <>
            <AnimatePresence mode="wait">
                <Router>
                    <Header />
                    <Routes>
                        {
                            pages.map((page) => (
                                <Route
                                    key={page.path}
                                    path={page.path}
                                    element={
                                        <Suspense fallback={<Loader />}>
                                            <motion.div variants={variants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                            >
                                                {page.element}
                                            </motion.div>
                                        </Suspense>
                                    }
                                />
                            ))
                        }
                    </Routes>
                    <Footer />
                    <div className={`${styles?.gotoHome}`}>
                        <Nav.Link href="#root" className="btn primaryBtn">
                            ^
                        </Nav.Link>
                    </div>
                </Router>
            </AnimatePresence>
        </>
    );
};

export default Layout;
