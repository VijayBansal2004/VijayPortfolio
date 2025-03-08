import React from 'react'
import styles from './Projects.module.css'

const FeaturedProjectCard = ({ content, index }) => {
    const branchIndex = `${styles[`branch${index + 1}`]}`;
    return (
        <a href={content?.url} target="_blank"
            className={`${content?.placement === "left" ? styles.text_left : styles.text_right} ${styles.branches} ${branchIndex} ${styles.comingsoon}`}>
            {
                content?.placement === "left" ?
                    <>
                        <span>
                            <img src={content?.imageUrl} />
                        </span>
                        <label>
                            {content?.name}
                        </label>
                    </>
                    :
                    <>
                        <label>
                            {content?.name}
                        </label>
                        <span>
                            <img src={content?.imageUrl} />
                        </span>
                    </>
            }
            <div className={styles.intro_wrap}>
                <p className={styles.intro_wrap_text}>
                    {content?.details} <br /> Technologies: <b className={styles.technology}>{content?.technology} e.t.c</b>
                </p>
            </div>
        </a>
    )
}

export default FeaturedProjectCard
