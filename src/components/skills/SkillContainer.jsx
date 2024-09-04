import React from 'react'
import styles from './Skills.module.css'

const SkillContainer = ({ element, styles }) => {
    return (
        <>
            <img className={styles} src={element.imgPath} alt="" />
        </>
    )
}

export default SkillContainer
