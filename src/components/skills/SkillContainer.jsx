import styles from './Skills.module.css'

const SkillContainer = ({ element, styles }) => {
    return (
        <>
            <img loading="lazy" className={styles} src={element?.imgPath} alt="" />
        </>
    )
}

export default SkillContainer
