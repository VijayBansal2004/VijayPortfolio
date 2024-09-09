import React from 'react'
import styles from "./AboutMe.module.css"
import Heading from '../utilityComponents/sectionHeading/Heading'
import { Button } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div id='aboutMe' className={`${styles.AboutMeContainer} containerBlockPadding text-center container align-content-center`}>
            <div className='mb-5'>
                <Heading heading="About Me" />
            </div>

            <div className="row justify-content-center align-items-center gap-5 gap-lg-3">
                <div className={`${styles.AboutMeContentContainer} col-12 col-lg-5 d-flex flex-column justify-content-between`}>
                    <h1 className='text-start mb-2 scrollReveal w-100 text-center text-lg-start'>Vijay Bansal</h1>
                    <p className='text-start fadeUpAnimation text-center text-lg-start'>I am a highly motivated and results-oriented Front-End Developer with expertise in HTML, CSS, Bootstrap, and React.js. I excel in creating responsive, visually compelling websites that focus on delivering seamless user experiences and driving engagement. With a solid understanding of modern web development technologies, I am adept at transforming complex requirements into efficient, scalable solutions. My passion for innovation and continuous learning drives me to stay updated with the latest industry trends, ensuring the delivery of cutting-edge digital experiences that align with business objectives.</p>
                    <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                        <a href="#contactMe">
                            <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                        </a>
                        <a href="https://drive.google.com/file/d/11kjO3LLICN_kWkQFj8fhr5-ApX04PDRO/view?usp=drivesdk" target='_black' download>
                            <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                        </a>
                    </div>
                </div>
                <div className={`${styles.AboutMeImageContainer} fadeUpAnimation col-12 col-lg-5`}>
                    <img src="../../../public/images/post1.png" alt="hero img" />
                </div>
            </div>

            <div className="animatedIcon">
                <img src="../../../public/images/plus.svg" alt="animated icon" />
            </div>
        </div>
    )
}

export default AboutMe
