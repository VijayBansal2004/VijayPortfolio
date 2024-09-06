import React from 'react'
import styles from "./AnimatedIcons.module.css"

const AnimatedIcons = ({ imgURL, imgName }) => {
    return (
        <img src={imgURL} className={`${styles.animatedIcon} ${imgName === "plus" && styles.plus} ${imgName === "strockedSqr" && styles.strockedSqr} ${imgName === "overlapedSqrs" && styles.overlapedSqrs}`} alt={imgName} />
    )
}

export default AnimatedIcons
