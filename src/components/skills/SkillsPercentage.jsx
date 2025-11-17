import React from "react";
import styles from "./Skills.module.css";

const SkillsPercentage = ({ element }) => {
    return (
        <div className={`${styles?.skillPercentageContainer} fadeUpAnimation mb-3`}>
            <div className="skillPercentageDetails d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <div className={styles?.img_cont}>
                        <img loading="lazy" src={element?.img_url} alt={element?.skillName} />
                    </div>
                    <p className={`${styles?.skillName}`}>{element?.skillName}</p>
                </div>
                <p className={`${styles?.skillPercentage}`}>{element?.skillPercentage}</p>
            </div>
            <div
                className={`${styles?.skillPercentageBar}`}
                style={{ width: element?.skillPercentage }}></div>
        </div>
    );
};

export default SkillsPercentage;
