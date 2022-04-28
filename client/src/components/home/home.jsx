import React from "react";
import CountriesContainer from "../countries/countriesContainer";

const Home = (props) => {
    return(
        <div className="homediv">
            <h1 className="h1">Home</h1>
            <CountriesContainer></CountriesContainer>
        </div>
    )
}

export default Home