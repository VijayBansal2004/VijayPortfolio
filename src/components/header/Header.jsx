import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#home" className={`${styles.textColor} fw-bolder fs-1`}>Logo</Navbar.Brand>
                <Navbar.Toggle className={`${styles.hamburger}`} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={` ${styles.navlinkContainer}`}>
                        <Nav.Link href="#home" className={`text-white ${styles.navlink}`}>Home</Nav.Link>
                        <Nav.Link href="#aboutMe" className={`text-white ${styles.navlink}`}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={`text-white ${styles.navlink}`}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={`text-white ${styles.navlink}`}>Projects</Nav.Link>
                        <Nav.Link href="#contactMe" className={`text-white ${styles.navlink}`}>Contact Me</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button className={`${styles.primaryBtn} ${styles.navBtn}`}>Let's Connect</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
