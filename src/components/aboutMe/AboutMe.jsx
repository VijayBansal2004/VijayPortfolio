import styles from "./AboutMe.module.css"
import Heading from '../utilityComponents/sectionHeading/Heading'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Card from "../utilityComponents/card/Card"
import card from "./data.card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutMe = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.animatedText_about', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#aboutMe",
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
            }
        })
        tl.from(".fadeUpAnimationText", {
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#aboutMe",
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
            }
        })
    })

    const splitText = (text) => {
        return text.split("").map((char, index) => {
            if (char === " ") {
                return <span className="animatedText_about" key={index} style={{ display: "inline-block" }}>&nbsp;</span>
            }
            return <span className="animatedText_about" key={index} style={{ display: "inline-block" }}>{char}</span>
        })
    }
    return (
        <div id='aboutMe' className={`${styles?.AboutMeContainer} containerBlockPadding text-center container align-content-center`}>
            <div className='mb-5'>
                <Heading heading="About Me" />
            </div>

            <div className="row justify-content-center gap-5 gap-lg-0">
                <div className={`${styles?.AboutMeImageContainer} fadeUpAnimation col-12 col-lg-3`}>
                    <img loading="lazy" src="/images/about_img.webp" alt="hero img" />
                </div>
                <div className={`${styles?.AboutMeContentContainer} col-12 col-lg-9 d-flex flex-column`}>
                    <h2 className='text-start mb-2 w-100 text-center text-lg-start'>{splitText("Vijay Bansal")}</h2>
                    <p className={styles?.skillAtTitle}>Front-end Developer</p>
                    <p className='text-start fadeUpAnimationText text-center text-lg-start'>I am a highly motivated and results-oriented Front-End Developer with expertise in HTML, CSS, Bootstrap, and React.js. I excel in creating responsive, visually compelling websites that focus on delivering seamless user experiences and driving engagement. With a solid understanding of modern web development technologies, I am adept at transforming complex requirements into efficient, scalable solutions. My passion for innovation and continuous learning drives me to stay updated with the latest industry trends, ensuring the delivery of cutting-edge digital experiences that align with business objectives.</p>
                    <div className={styles?.cards}>
                        {card.map((cardItem) => (
                            <Card key={cardItem.title} cardItem={cardItem} />
                        ))}
                    </div>
                    <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                        <NavLink to="/contact">
                            <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                        </NavLink>
                        <NavLink to="https://github.com/VijayBansal2004/resume/blob/main/Resume.pdf" target='_black' download>
                            <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="animatedIcon">
                <img loading="lazy" src="/svg/plus.svg" alt="animated icon" />
            </div>
        </div >
    )
}

export default AboutMe
