import React from 'react'
import styles from './Home.module.css'
import { useTypewriter, Cursor } from "react-simple-typewriter"

import { Button } from 'react-bootstrap'
import AnimatedIcons from '../utilityComponents/animatedIcons/AnimatedIcons'

const Home = () => {
    const [text] = useTypewriter({
        words: ["HTML", "CSS", "Javascript", "React JS"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100,
    });

    const animatedIcons = [
        {
            imgURL: "../../../public/images/plus.svg",
            imgName: "plus",
        },
        {
            imgURL: "../../../public/images/strockedSqr.png",
            imgName: "strockedSqr",
        },
        {
            imgURL: "../../../public/images/overlapedSqrs.png",
            imgName: "overlapedSqrs",
        },
        // {
        //     imgURL: "../../../public/images/linedCircle.png",
        //     imgName: "linedCircle",
        // },
    ]

    return (
        <>
            <section id='home' className={`${styles.heroSection} ${styles.scrollZoomInAnimation}`}>
                <div className={`${styles.overlay} align-content-center`}>

                    {
                        animatedIcons.map((img) => (
                            <AnimatedIcons imgURL={img.imgURL} imgName={img.imgName} />
                        ))
                    }

                    <div className="container row justify-content-center align-items-center gap-3 mt-5 flex-wrap-reverse">
                        <div className={`${styles.heroSectionDetailsContainer} col-12 col-lg-5`}>
                            <p className={`${styles.hello}`}>Hello, I am</p>
                            <h1 className={`${styles.myName}`}>Vijay Bansal</h1>
                            <p className={`${styles.role}`}>Front-End Developer</p>
                            <p className={`${styles.SkilledAtContainer}`}>Skilled at <span className={`${styles.typedText}`}>{text}</span><span className={`${styles.typedCursor}`}><Cursor /></span></p>
                            <p>Welcome to my portfolio, a curated collection of my professional journey and creative endeavors.</p>
                            <div className="buttons d-flex align-items-center gap-2">
                                <a href="#contactMe">
                                    <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                                </a>
                                <a href="https://drive.google.com/file/d/11kjO3LLICN_kWkQFj8fhr5-ApX04PDRO/view?usp=drivesdk" target='_black' download>
                                    <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                                </a>
                            </div>
                        </div>

                        <div className={`${styles.heroSectionImgContainer} col-12 col-lg-5`}>
                            {/* <div className={`${styles.heroImgbackground}`}> */}

                            <div className={`${styles.heroImg}`}></div>

                            {/* <img className={`${styles.heroImg}`} src="../../../public/images/employee.png" alt="hero img" /> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
