import React, { useEffect, useRef, useState } from 'react'
import styles from "./OverCard.module.css"
const OverCard = ({ element, index }) => {

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const elementTop = window.innerWidth <= 768 ? 150 : 90
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= elementTop);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div ref={headerRef} className={`${isSticky && styles.stickyCard} ${styles.card}`}>
                <div className="row gap-5 gap-lg-0">
                    <div className="col-12 col-lg-6">
                        <p className={styles.card_subheading}>{element?.subheading}</p>
                        <h2 className={styles.heading}>{element?.heading}</h2>
                        <p className={styles.content}>{element?.content}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className={styles.image_cont}>
                            <img src={element?.imgUrl} alt="card image" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default OverCard
