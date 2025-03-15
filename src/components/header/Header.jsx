import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container className="pb-3 pb-lg-0">
                <NavLink to="/" className={`${styles.textColor}  ${styles.brandLogo} fw-bolder fs-1 `}>Vijay</NavLink>
                {/* <Navbar.Brand href="#home">
                    <img
                        src="/svg/logo.svg"
                        className="d-inline-block align-top"
                        alt=" logo"
                    />
                </Navbar.Brand> */}
                <Navbar.Toggle className={`${styles.hamburger}`} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={` ${styles.navlinkContainer}`}>
                        <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/about" >About Me</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/skills" >Skills</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/projects">Projects</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/contact">Contact Me</NavLink>
                        {/* <NavLink className={({ isActive }) => (isActive ? `text-white ${styles.navlink} ${styles.active}` : `text-white ${styles.navlink}`)} to="/blogs">Blogs</NavLink> */}
                    </Nav>
                    <Form className="d-flex">
                        <NavLink to="/contact" className={`text-white`}><Button className="primaryBtn">Let's Connect</Button></NavLink>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
