import React from "react";
import styles from './logo.module.css'
import img from '../../../../../assets/logoworld.png'

export function Logo (){
    return(
        <div className={styles.logoContainer}>
            <img alt="arrowBack" src={img} className={styles.navLogo}></img>
            <h5 className={styles.navTitle}>Countries Wiki</h5>
        </div> 
    )
}

export default Logo