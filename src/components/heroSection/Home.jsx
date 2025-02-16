import React from 'react'
import styles from './Home.module.css'
import { useTypewriter, Cursor } from "react-simple-typewriter"

import { Button } from 'react-bootstrap'
import AnimatedIcons from '../utilityComponents/animatedIcons/AnimatedIcons'

import { NavLink } from 'react-router-dom'

const Home = () => {
    const [text] = useTypewriter({
        words: ["HTML", "CSS", "Javascript", "React JS"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100,
    });

    const animatedIcons = [
        {
            imgURL: "/images/plus.svg",
            imgName: "plus",
        },
        {
            imgURL: "/images/strockedSqr.webp",
            imgName: "strockedSqr",
        },
        {
            imgURL: "/images/overlapedSqrs.webp",
            imgName: "overlapedSqrs",
        },
    ]

    return (
        <>
            <section id='home' className={`${styles.heroSection} ${styles.scrollZoomInAnimation} pt-5`}>
                <div className={`${styles.overlay} d-flex justify-content-center align-items-center`}>

                    {
                        animatedIcons.map((img) => (
                            <AnimatedIcons imgURL={img.imgURL} imgName={img.imgName} />
                        ))
                    }

                    <div className="container row justify-content-center align-items-center gap-3 flex-wrap-reverse">
                        <div className={`${styles.heroSectionDetailsContainer} col-12 col-lg-5 text-center text-lg-start`}>
                            <p className={`${styles.hello}`}>Hello, I am</p>
                            <h1 className={`${styles.myName}`}>Vijay Bansal</h1>
                            <p className={`${styles.role}`}>Front-End Developer</p>
                            <p className={`${styles.SkilledAtContainer}`}>Skilled at <span className={`${styles.typedText}`}>{text}<Cursor /></span></p>
                            <p>Welcome to my portfolio, a curated collection of my professional journey and creative endeavors.</p>
                            <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                                <NavLink to="/contact">
                                    <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                                </NavLink>
                                <NavLink t0="https://drive.google.com/file/d/11kjO3LLICN_kWkQFj8fhr5-ApX04PDRO/view?usp=drivesdk" target='_black' download>
                                    <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                                </NavLink>
                            </div>
                        </div>

                        <div className={`${styles.heroSectionImgContainer} col-12 col-lg-5`}>
                            <div className={styles.homeimg_cont}>
                                <img src="/images/vijay_home.webp" alt="home image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
