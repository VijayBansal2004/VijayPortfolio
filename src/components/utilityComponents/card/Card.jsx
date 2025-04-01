import styles from "./Card.module.css"

const Card = ({ cardItem }) => {
    return (
        <>
            <div className={styles?.card}>
                <div className={styles?.img_cont}>
                    <img loading="lazy" src={cardItem.icon} alt="" />
                </div>
                <div>
                    <h3>{cardItem.title}</h3>
                    <p>{cardItem.description}</p>
                    <ul>
                        {
                            cardItem.list.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
