import OverCard from "./OverCard.jsx"
import styles from "./OverCards.module.css"
import card from "./data.overCard.js"

const OverCards = () => {

    return (
        <>
            <div className={styles?.card_container}>
                {
                    card.map((element, index) => (
                        <OverCard key={element?.imgUrl} element={element} index={index} />
                    ))
                }
            </div>
        </>
    )
}

export default OverCards
