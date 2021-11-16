import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../Assets/logo.png";
import { Facebook,Twitter,Youtube,Pinterest,Instagram } from "../../Assets/svg";
import ArrowImgBlack from "../../Assets/arrow.png"
const Footer = (props)=>{
    return(
        <div style={{backgroundColor:"black"}} className={styles.FooterContainer}>
        <div className={styles.Footer}>
            <div className={styles.footerInfo}>
                <div className={styles.flexConatiner}>
                     <img src={logo} alt="logo"/>
                <ul className={styles.social}>
                    <li><Facebook/></li>
                    <li><Youtube/></li>
                    <li><Twitter/></li>
                    <li><Pinterest/></li>
                    <li><Instagram/></li>
                </ul>
                </div>
                <div className={styles.flexConatiner}>
                    <ul>
                        <li>Home</li>
                        <li>stories</li>
                        <li>features</li>
                        <li>pricing</li>
                    </ul>
                </div>
               
            </div>
            <div className={styles.copyrights}>
                 <div className={styles.btn}>
                 <p>GET AN INVITE</p> <img src={ArrowImgBlack} alt="arrow"/>
                 </div>
                 <p style={{opacity:.5,color:"white",textDecoration:"none"}}>Copyright 2019, All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer