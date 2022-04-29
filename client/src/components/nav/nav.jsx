import React from "react";
import { Link } from 'react-router-dom';
import './nav.css'
import Logo from "./logo/logo";
import SeacrhBar from "./searchBar/searchBar";
import AddAct from "./addActivity/addAct";

const Nav = (props) => {
    return(
    <div className='nav'>
        <Logo/>
        <SeacrhBar/>
        <AddAct></AddAct>
    </div>
    )
}

export default Nav;