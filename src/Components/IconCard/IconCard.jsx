import React from "react";
import styles from "./IconCard.module.scss";

const IconCard = (props)=>{
    return(
        <div className={styles.IconCard}>
            {/* <img src={props.icon} alt="icon"/> */}
            
            {/* <svg>{props.icon}</svg> */}
            
            {/* {console.log(props.children)} */}
            {/* {props.children} */}
            <div className={styles.imgContainer}>
            <img src={props.icon} alt="icon"/>
            </div>
            <h2>{props.header}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default IconCard