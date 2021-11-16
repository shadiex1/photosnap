import React from "react";
import styles from "./Menu.module.scss";
import { Logo } from "../../Assets/svg";
const Menu = (props)=>{
    return(
        <div className={styles.Menu}>
            <div className={styles.logoContainer}>
            <Logo/>
            </div>
           <ul>
               <li>STORIES</li>
               <li>FEATURES</li>
               <li>Pricing</li>
           </ul>
           <button className={styles.btn}>
               GET AN INVITE
           </button>
        </div>
    )
}


export default Menu