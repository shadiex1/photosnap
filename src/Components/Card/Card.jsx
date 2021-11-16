import React from "react"
import styles from "./Card.module.scss"
import arrow from "../../Assets/arrow.png"
const Card = (props)=>{
return(
    <div style={{backgroundImage:`url(${props.img})`}} className={styles.Card}>
        <div className={styles.group}>
            <h2>{props.header}</h2>
            <p>{props.author}</p>
        </div>
        <div className={styles.btn}>
            <p>READ STORY</p>
            <img src={arrow} alt="arrow"/>
        </div>
    </div>
)
}

export default Card