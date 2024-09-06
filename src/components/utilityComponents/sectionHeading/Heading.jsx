import React from 'react'
import styles from "./Heading.module.css"

const Heading = ({ heading }) => {
    return (
        <div className={`${styles.headingStyles}`}>
            <p>{heading}</p>
        </div>
    )
}

export default Heading
