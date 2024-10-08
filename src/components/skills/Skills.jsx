import React from 'react'
import styles from './Skills.module.css'
import SkillContainer from './SkillContainer'
import SkillsPercentage from './SkillsPercentage'
import Heading from '../utilityComponents/sectionHeading/Heading'

const Skills = () => {

    const skills = [
        {
            imgPath: "../../../public/images/htmlLogo.svg",
        },
        {
            imgPath: "../../../public/images/cssLogo.svg",
        },
        {
            imgPath: "../../../public/images/javascriptLogo.svg",
        },
        {
            imgPath: "../../../public/images/reactJSLogo.svg",
        },
        {
            imgPath: "../../../public/images/wordpressLogo.svg",
        },
        {
            imgPath: "../../../public/images/htmlLogo.svg",
        },
        {
            imgPath: "../../../public/images/cssLogo.svg",
        },
        {
            imgPath: "../../../public/images/illustratorLogo.svg",
        },
        {
            imgPath: "../../../public/images/photoshopLogo.svg",
        },
        {
            imgPath: "../../../public/images/javascriptLogo.svg",
        },
        {
            imgPath: "../../../public/images/reactJSLogo.svg",
        },
        {
            imgPath: "../../../public/images/illustratorLogo.svg",
        },
        {
            imgPath: "../../../public/images/photoshopLogo.svg",
        },
    ]

    const skillPercentage = [
        {
            skillName: "HTML",
            skillPercentage: "90%",
        },
        {
            skillName: "CSS",
            skillPercentage: "86%",
        },
        {
            skillName: "JS",
            skillPercentage: "75%",
        },
        {
            skillName: "React JS",
            skillPercentage: "70%",
        },
        {
            skillName: "Wordpress",
            skillPercentage: "60%",
        },
        {
            skillName: "Illustrator",
            skillPercentage: "75%",
        },
        {
            skillName: "Photoshop",
            skillPercentage: "50%",
        },
    ]

    return (
        <section id='skills' className={`${styles.skillsSection} align-content-center`}>
            <div className={`${styles.skillsContainer} containerBlockPadding text-center container`}>
                <Heading heading="Skills" />
                <h1 className='text-center mb-5 scrollReveal w-100'>Why Choose Me ?</h1>
                <p className={`${styles.scrollReveal}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sed eveniet aut soluta fugiat similique rem, quod voluptatum? Accusantium aut repellat sit error reprehenderit dignissimos quidem illum, molestias blanditiis? Eveniet.
                </p>

                <div className={styles.skillContainer}>
                    {
                        skills.map((element, index) => (<SkillContainer styles={styles.skillLogo} element={element} key={index} />))
                    }
                </div>

                <div className={`${styles.skillsPercentage} row`}>
                    <div className="col-12 col-lg-6">
                        <h2 class={`${styles.skillsPercentageHeading}`}>Technologies</h2>
                    </div>

                    <div className={` col-12 col-lg-6`}>
                        {
                            skillPercentage.map((element, index) => (<SkillsPercentage element={element} key={index} />))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
