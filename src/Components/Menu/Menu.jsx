import React from "react";
import styles from "./Menu.module.scss";
import { Logo } from "../../Assets/svg";
const Menu = (props)=>{
    return(
        <div className={styles.Menu}>
           <Logo/>
           <ul>
               <li>STORIES</li>
               <li>FEATURES</li>
               <li>Pricing</li>
           </ul>
        </div>
    )
}


export default Menu