import React, { useEffect } from "react";
import Country from "./country/country";
import { getCountries } from "../../../redux/actions/actions";
import { connect } from "react-redux";
import './countriesContainer.css'

const CountriesContainer = (props) => {

    useEffect(() => {
        props.getCountries()
    }, [])
    
    return(
        <div className="countriesContainer">
            {props.countries?.map(c => (
                <div>
                    <Country
                      key={c.id}
                      id={c.id}
                      name = {c.commonName}
                      continent={c.continent}
                      img = {c.flagImg}  
                    />
                </div>
            ))}
        </div>     
    )
}

export const mapStateToProps = (state) => {
    return{
      countries: state.countries
    }
}
  
export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries: () => dispatch(getCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
