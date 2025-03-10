import React from 'react'
import OverCard from "./OverCard.jsx"
import styles from "./OverCards.module.css"

const OverCards = () => {
    const card = [
        {
            subheading: "sub heading 1",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate omnis incidunt illo quod voluptas, dolores fugiat alias voluptatibus a exercitationem repellat quos vel ipsum magni ratione. Voluptatibus nobis nam nostrum. Beatae autem quos magnam tenetur quaerat perspiciatis, atque consequuntur nostrum.",
            imgUrl: "/images/bitNetX.webp",
        },
        {
            subheading: "sub heading 1",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate omnis incidunt illo quod voluptas, dolores fugiat alias voluptatibus a exercitationem repellat quos vel ipsum magni ratione. Voluptatibus nobis nam nostrum. Beatae autem quos magnam tenetur quaerat perspiciatis, atque consequuntur nostrum.",
            imgUrl: "/images/bitNetX.webp",
        },
        {
            subheading: "sub heading 1",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate omnis incidunt illo quod voluptas, dolores fugiat alias voluptatibus a exercitationem repellat quos vel ipsum magni ratione. Voluptatibus nobis nam nostrum. Beatae autem quos magnam tenetur quaerat perspiciatis, atque consequuntur nostrum.",
            imgUrl: "/images/bitNetX.webp",
        },
        {
            subheading: "sub heading 1",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate omnis incidunt illo quod voluptas, dolores fugiat alias voluptatibus a exercitationem repellat quos vel ipsum magni ratione. Voluptatibus nobis nam nostrum. Beatae autem quos magnam tenetur quaerat perspiciatis, atque consequuntur nostrum.",
            imgUrl: "/images/bitNetX.webp",
        },
    ]
    return (
        <>
            <div className={styles.card_container}>
                {
                    card.map((element, index) => (
                        <OverCard key={element.imgUrl} element={element} index={index} />
                    ))
                }
            </div>
        </>
    )
}

export default OverCards
