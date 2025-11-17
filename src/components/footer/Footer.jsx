import styles from "./Footer.module.css"
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const navlinks = [
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
        },
        // {
        //     name: "Blogs",
        //     link: "/blogs"
        // },
    ]
    return (
        <footer className={styles?.footer}>
            <div className="container row gap-4 gap-lg-0">
                <div className="footerLogo col-12 col-lg-3 text-center text-lg-start">
                    <NavLink to='/'>
                        <img loading="lazy"
                            src="/svg/logo.svg"
                            className={`d-inline-block align-top ${styles?.logo_img}`}
                            alt=" logo"
                        />
                    </NavLink>
                </div>

                <div className="footerLinksContainer col-12 col-lg-6 align-content-center text-center text-lg-start">
                    <ul className={`${styles?.footerLinks} m-0 justify-content-center flex-column flex-sm-row`}>
                        {
                            navlinks.map((item, index) => (
                                <NavLink key={index} to={item.link} className={({ isActive }) => (isActive ? `text-white ${styles?.navlink} ${styles?.active}` : `text-white ${styles?.navlink}`)}>{item.name}</NavLink>
                            ))
                        }
                    </ul>
                </div>

                <div className="footerSocialMedia col-12 col-lg-3 d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                    <SocialMediaLinks />
                </div>
            </div>
            <div className="container mt-4">
                <p className='text-center m-0'>&copy;{new Date().getFullYear()} Vijay. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
