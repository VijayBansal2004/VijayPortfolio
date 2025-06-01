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
    const pages = [
        {
            path: "/",
            element: <Home />,
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
                    {
                        pages.map((page) => (
                            <Route
                                key={page.path}
                                path={page.path}
                                element={<Suspense fallback={<Loader />}>{page.element}</Suspense>}
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
        </>
    );
};

export default Layout;
