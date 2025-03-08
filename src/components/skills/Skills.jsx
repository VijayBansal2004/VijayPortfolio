import React from "react";
import styles from "./Skills.module.css";
import SkillContainer from "./SkillContainer";
import SkillsPercentage from "./SkillsPercentage";
import Heading from "../utilityComponents/sectionHeading/Heading";

const Skills = () => {
    const skills = [
        {
            imgPath: "/images/htmlLogo.svg",
        },
        {
            imgPath: "/images/cssLogo.svg",
        },
        {
            imgPath: "/images/javascriptLogo.svg",
        },
        {
            imgPath: "/images/reactJSLogo.svg",
        },
        {
            imgPath: "/images/wordpressLogo.svg",
        },
        {
            imgPath: "/images/htmlLogo.svg",
        },
        {
            imgPath: "/images/cssLogo.svg",
        },
        {
            imgPath: "/images/gitLogo.svg",
        },
        {
            imgPath: "/images/githubLogo.svg",
        },
        {
            imgPath: "/images/illustratorLogo.svg",
        },
        {
            imgPath: "/images/javascriptLogo.svg",
        },
        {
            imgPath: "/images/reactJSLogo.svg",
        },
        {
            imgPath: "/images/illustratorLogo.svg",
        },
    ];

    const skillPercentage = [
        {
            skillName: "HTML",
            skillPercentage: "95%",
        },
        {
            skillName: "CSS",
            skillPercentage: "91%",
        },
        {
            skillName: "JS",
            skillPercentage: "85%",
        },
        {
            skillName: "React JS",
            skillPercentage: "80%",
        },
        {
            skillName: "Illustrator",
            skillPercentage: "75%",
        },
        {
            skillName: "Git/Github",
            skillPercentage: "84%",
        },
        {
            skillName: "Wordpress",
            skillPercentage: "60%",
        },
    ];

    return (
        <>
            <section
                id="skills"
                className={`${styles.skillsSection} align-content-center`}>
                <div
                    className={`${styles.skillsContainer} containerBlockPadding text-center container position-relative`}>
                    <Heading heading="Skills" />
                    <h2 className="text-center mb-5 scrollReveal w-100">
                        Why Choose Me ?
                    </h2>
                    <p className={`${styles.scrollReveal}`}>
                        I have a strong front-end development skill set, specializing in
                        building user-centric applications in domains like remittance,
                        blockchain, cryptocurrency, and fantasy gaming. With a core
                        understanding of HTML, CSS, JavaScript, React.js, and WordPress, I
                        craft responsive, accessible, and performance-optimized interfaces.
                        My expertise extends to Git & GitHub for efficient version control
                        and collaboration.
                    </p>

                    <div className={styles.skillContainer}>
                        {skills.map((element, index) => (
                            <SkillContainer
                                styles={styles.skillLogo}
                                element={element}
                                key={index}
                            />
                        ))}
                    </div>

                    <div className={`${styles.skillsPercentage} row`}>
                        <div className="col-12 col-lg-6">
                            <h3 className={`${styles.skillsPercentageHeading}`}>
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
        </>
    );
};

export default Skills;
