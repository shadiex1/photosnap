import React from "react";
import styles from "./FlexContainer.module.scss"
import ArrowImg from "../../Assets/arrow.png"
import ArrowImgBlack from "../../Assets/arrowBlack.png"
const flexContainer = (props)=>{
    return(
        <div className={styles.FlexContainer}>
            {props.inverse ? <div className={styles.invertedFlexbox}>

                {/* //inverted   */}
                <div className={styles.description}>
                    <h2>{props.header}</h2>
                    <p>{props.paragraph}</p>
                    <div className={styles.arrowBtn}>
                        <p>GET AN INVITE</p> 
                        <img src={ArrowImg} alt="arrow"/>
                    </div>
                </div>
                <div className={styles.img}>
                    {/* img */}
                    <img src={props.img} alt="image"/>
                </div>
            </div>:<div className={styles.invertedFlexbox}>
                {/* /// normal */}
 <div className={styles.img}>
                    {/* img */}
                    <img src={props.img} alt="image"/>
                </div>
                <div style={{backgroundColor:"#fff"}} className={styles.description}>
                    <h2 style={{color:"black"}}>{props.header}</h2>
                    <p style={{color:"black"}}>{props.paragraph}</p>
                    <div className={styles.arrowBtn}>
                        <p style={{color:"black"}}>GET AN INVITE</p> 
                        <img src={ArrowImgBlack} alt="arrow"/>
                    </div>
                </div>
               
                {/* //*/}
                </div>}
        </div>
    )
}

export default flexContainer