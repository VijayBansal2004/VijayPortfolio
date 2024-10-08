import React from 'react'
import styles from "./ProjectCard.module.css"

const ProjectCard = ({ content }) => {
    return (
        <>
            <div className={`${styles.projectCard} fadeUpAnimation`}>
                <a href={content.websiteURL} target='_black'>
                    <div className={`${styles.projectImgContainer}`}>
                        <img src={content.imagePath} alt={content.title} />
                    </div>

                    <div className={`${styles.projectDetailsContainer}`}>
                        <h4 className={`${styles.scrollReveal} ${styles.projectCardHeading}`}>{content.title}</h4>
                        <br />
                        <p className={`${styles.scrollReveal} ${styles.projectCardDetails}`}>{content.discription}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectCard
