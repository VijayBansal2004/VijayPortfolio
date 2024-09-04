import React from 'react'
import styles from './Home.module.css'
const Home = () => {
    return (
        <>
            <section id='#home' className={`${styles.heroSection} ${styles.scrollZoomInAnimation}`}>
                <div className={`${styles.overlay} align-content-center`}>
                    <div className="container row justify-content-center align-items-center gap-3 mt-5">
                        <div className={`${styles.heroSectionImgContainer} col-12 col-lg-5`}>
                            <img src="../../../public/images/post1.png" alt="hero img" />
                        </div>
                        <div className={`${styles.heroSectionDetailsContainer} col-12 col-lg-5`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error molestiae eius aliquid inventore quod amet, deleniti adipisci explicabo. Dolores cum non omnis tempora blanditiis numquam fuga ducimus consequatur assumenda architecto.
                                Doloribus cupiditate corrupti modi illum hic, similique ut placeat adipisci. Rem explicabo ad quasi illo laborum aliquam, distinctio eveniet obcaecati dolor tempore, iste vero hic quibusdam culpa odit ab repudiandae!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
