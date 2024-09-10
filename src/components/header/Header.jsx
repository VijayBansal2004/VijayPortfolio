import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';
import { NavLink } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container className="pb-3 pb-lg-0">
                <Navbar.Brand href="#home" className={`${styles.textColor} fw-bolder fs-1`}>Vijay</Navbar.Brand>
                <Navbar.Toggle className={`${styles.hamburger}`} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={` ${styles.navlinkContainer}`}>
                        <NavLink href="#home" className={`text-white ${styles.navlink}`}>Home</NavLink>
                        <NavLink href="#aboutMe" className={`text-white ${styles.navlink}`}>About Me</NavLink>
                        <NavLink href="#skills" className={`text-white ${styles.navlink}`}>Skills</NavLink>
                        <NavLink href="#projects" className={`text-white ${styles.navlink}`}>Projects</NavLink>
                        <NavLink href="#contactMe" className={`text-white ${styles.navlink}`}>Contact Me</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <NavLink href="#contactMe" className={`text-white`}><Button className="primaryBtn">Let's Connect</Button></NavLink>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
