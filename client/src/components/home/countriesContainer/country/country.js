import React from "react";
import './country.css';
import { Link } from "react-router-dom";

const Country = (props) => {

    
    return(
        <Link to={`/home/${props.id}`}>
            <div className="country">
            <h4>{props.name}</h4>
            <h5>{props.continent}</h5>
            <img src={props.img}></img>
            </div>
        </Link>
    )
}

export default Country;