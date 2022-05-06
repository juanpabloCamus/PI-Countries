import React from "react";
import img from '../../assets/arrowback.png'
import { Link } from "react-router-dom";

function BackButton(){
    return(
    <Link to={'/home'}>
        <img alt="arrowBack" src={img}></img>
    </Link>
    )
}

export default BackButton;