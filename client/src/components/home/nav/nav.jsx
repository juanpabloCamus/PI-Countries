import React from "react";
import styles from './nav.module.css'
import Logo from "./logo/logo";
import SeacrhBar from "./searchBar/searchBar";
import AddAct from "./addActivity/addAct";

const Nav = (props) => {
    return(
    <div className={styles.navContainer}>
        <Logo/>
        <SeacrhBar/>
        <AddAct></AddAct>
    </div>
    )
}

export default Nav;