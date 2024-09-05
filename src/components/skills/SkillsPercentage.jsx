import React from 'react'
import styles from './Skills.module.css'

const SkillsPercentage = ({ element }) => {
    return (
        <div className={`${styles.skillPercentageContainer} fadeUpAnimation mb-3`}>
            <div className='skillPercentageDetails d-flex justify-content-between align-items-center'>
                <p className={`${styles.skillName}`}>{element.skillName}</p>
                <p className={`${styles.skillPercentage}`}>{element.skillPercentage}</p>
            </div>
            <div className={`${styles.skillPercentageBar}`} style={{ width: element.skillPercentage }}>

            </div>
        </div >
    )
}

export default SkillsPercentage
