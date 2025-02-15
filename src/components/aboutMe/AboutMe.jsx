import React from 'react'
import styles from "./AboutMe.module.css"
import Heading from '../utilityComponents/sectionHeading/Heading'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const AboutMe = () => {
    return (
        <div id='aboutMe' className={`${styles.AboutMeContainer} containerBlockPadding text-center container align-content-center`}>
            <div className='mb-5'>
                <Heading heading="About Me" />
            </div>

            <div className="row justify-content-center gap-5 gap-lg-0">
                <div className={`${styles.AboutMeImageContainer} fadeUpAnimation col-12 col-lg-3`}>
                    <img src="../../../public/images/about_img.webp" alt="hero img" />
                </div>
                <div className={`${styles.AboutMeContentContainer} col-12 col-lg-9 d-flex flex-column`}>
                    <h1 className='text-start mb-2 scrollReveal w-100 text-center text-lg-start'>Vijay Bansal</h1>
                    <p className={styles.skillAtTitle}>Front-end Developer</p>
                    <p className='text-start fadeUpAnimation text-center text-lg-start'>I am a highly motivated and results-oriented Front-End Developer with expertise in HTML, CSS, Bootstrap, and React.js. I excel in creating responsive, visually compelling websites that focus on delivering seamless user experiences and driving engagement. With a solid understanding of modern web development technologies, I am adept at transforming complex requirements into efficient, scalable solutions. My passion for innovation and continuous learning drives me to stay updated with the latest industry trends, ensuring the delivery of cutting-edge digital experiences that align with business objectives.</p>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.img_cont}>
                                <img src="../../../public/images/tools-trade.svg" alt="" />
                            </div>
                            <div>
                                <h3>Tools of the Trade</h3>
                                <p>I work with modern front-end technologies, including:</p>
                                <ul>
                                    <li>React.js & TypeScript</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>CSS (Tailwind, Bootstrap, Sass)</li>
                                    <li>Git & GitHub</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.img_cont}>
                                <img src="../../../public/images/dev-approach.svg" alt="" />
                            </div>
                            <div>
                                <h3>How I Approach Development</h3>
                                <p>I believe in writing clean, maintainable, and efficient code. My approach to development revolves around:</p>
                                <ul>
                                    <li>User-first design</li>
                                    <li>Performance optimization</li>
                                    <li>Scalability & maintainability</li>
                                    <li>Continuous learning & improvement</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.img_cont}>
                                <img src="../../../public/images/chess.svg" alt="" />
                            </div>
                            <div>
                                <h3>Did You Know?</h3>
                                <p>When I'm not coding, I enjoy:</p>
                                <ul>
                                    <li>Playing chess ♟️</li>
                                    <li>Exploring the latest web designs and Themes 🚀</li>
                                    {/* <li>Enjoys strategy games & staying updated on tech trends</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                        <NavLink to="/contact">
                            <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                        </NavLink>
                        <NavLink to="https://drive.google.com/file/d/11kjO3LLICN_kWkQFj8fhr5-ApX04PDRO/view?usp=drivesdk" target='_black' download>
                            <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="animatedIcon">
                <img src="../../../public/images/plus.svg" alt="animated icon" />
            </div>
        </div >
    )
}

export default AboutMe
