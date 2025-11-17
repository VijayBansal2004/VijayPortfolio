import React from "react";
import styles from "./Skills.module.css";
import SkillContainer from "./SkillContainer";
import SkillsPercentage from "./SkillsPercentage";
import Heading from "../utilityComponents/sectionHeading/Heading";
import OverCards from "./OverCards";
import { skills, skillPercentage } from "./data.skills"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Skills = () => {
    const splitText = (text) => {
        return text.split("").map((char, index) => {
            if (char === " ") {
                return <span className="animatedText_whyChooseMe" key={index} style={{ display: "inline-block" }}>&nbsp;</span>
            }
            return <span className="animatedText_whyChooseMe" key={index} style={{ display: "inline-block" }}>{char}</span>
        })
    }
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".animatedText_whyChooseMe", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".animatedText_whyChooseMe",
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
            }
        })
    })

    return (
        <>
            <section
                id="skills"
                className={`${styles?.skillsSection} align-content-center`}>
                <div
                    className={`${styles?.skillsContainer} containerBlockPadding text-center container position-relative`}>
                    <Heading heading="Skills" />
                    <h2 className="text-center mb-5 w-100">
                        {splitText("Why Choose Me ?")}
                    </h2>
                    <p className={`${styles?.scrollReveal}`}>
                        I have a strong front-end development skill set, specializing in
                        building user-centric applications in domains like remittance,
                        blockchain, cryptocurrency, and fantasy gaming. With a core
                        understanding of HTML, CSS, JavaScript, React.js, and WordPress, I
                        craft responsive, accessible, and performance-optimized interfaces.
                        My expertise extends to Git & GitHub for efficient version control
                        and collaboration.
                    </p>

                    <div className={styles?.skillContainer}>
                        {skills.map((element, index) => (
                            <SkillContainer
                                styles={styles?.skillLogo}
                                element={element}
                                key={index}
                            />
                        ))}
                    </div>

                    <div className={`${styles?.skillsPercentage} row`}>
                        <div className="col-12 col-lg-6">
                            <h3 className={`${styles?.skillsPercentageHeading}`}>
                                Technologies
                            </h3>
                        </div>

                        <div className={` col-12 col-lg-6`}>
                            {skillPercentage.map((element, index) => (
                                <SkillsPercentage element={element} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="container">
                    <OverCards />
                </div>
            </section> */}
        </>
    );
};

export default Skills;
