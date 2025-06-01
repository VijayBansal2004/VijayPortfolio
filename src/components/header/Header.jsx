import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    const navLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About Me",
            link: "/about"
        },
        {
            name: "Skills",
            link: "/skills"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Contact Me",
            link: "/contact"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".animatedLogo", {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "back.out(2)",
            stagger: 0.03,
        })
        tl.from(".animatedNavLink", {
            duration: 1,
            y: -30,
            opacity: 0,
            ease: "back.out(2)",
            stagger: 0.03,
        });
        tl.from(".animatedCTA", {
            duration: 1,
            y: -30,
            opacity: 0,
            ease: "back.out(2)",
            stagger: 0.03,
        });
    });

    return (
        <Navbar collapseOnSelect expand="lg" className={styles?.navbar}>
            <Container className="pb-3 pb-lg-0">
                <NavLink to="/">
                    <img loading="lazy"
                        src="/svg/logo.svg"
                        className={`d-inline-block align-top ${styles?.logo_img} animatedLogo`}
                        alt=" logo"
                    />
                </NavLink>
                <Navbar.Toggle className={`${styles?.hamburger}`} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={` ${styles?.navlinkContainer}`}>
                        {
                            navLinks.map((link) => (
                                <NavLink key={link.name} className={({ isActive }) => (isActive ? `text-white ${styles?.navlink} ${styles?.active}` : `text-white ${styles?.navlink}`)} to={link.link}><span style={{ display: 'inline-block' }} className='animatedNavLink'>{link.name}</span></NavLink>
                            ))
                        }
                    </Nav>
                    <Form className="d-flex">
                        <NavLink to="/contact" className={`text-white`}><Button className="primaryBtn animatedCTA">Let&apos;s Connect</Button></NavLink>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
