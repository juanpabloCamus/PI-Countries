import React from "react";
import { connect } from "react-redux";
import { getCountries, setCountriesContinent, setCountriesAlpha, countriesByPopulation } from "../../../../redux/actions/actions";
import './filters.css';

const Filters = (props) => {

    const selectContinent = async (e) => {
        await props.getCountries()
        if (e.target.value === 'All') props.getCountries()
        else props.setCountriesContinent(e.target.value);
    }

    const selectPopulation = async (e) => {
        if (e.target.value === '---') props.countriesByPopulation("off")
        if (e.target.value === 'Ascendent') props.countriesByPopulation("asc")
        if (e.target.value === 'Descendent') props.countriesByPopulation("dsc")
    }

    const selectAlpha = (e) => {
        props.setCountriesAlpha(e.target.value)
    }

    return(
        <div className="filters">
            <div>
                <span>Filter by continent:</span><br></br>
                <select onChange={e => selectContinent(e)}>
                    <option selected>All</option>
                    <option>Africa</option>
                    <option>Antarctica</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Oceania</option>
                </select>
            </div>

            <div>
            <span>Alphabetical Order:</span><br></br>
            <select onChange={e => selectAlpha(e)}>
                <option selected>Ascendent</option>
                <option>Descendent</option>
            </select>
            </div>

            <div>
            <span>Population:</span><br></br>
            <select onChange={e => selectPopulation(e)}>
                <option selected>---</option>
                <option>Ascendent</option>
                <option>Descendent</option>
            </select>
            </div>
        </div>
    )  
}

export const mapDispatchToProps = (dispatch) => {
    return{
      setCountriesContinent: (S) => dispatch(setCountriesContinent(S)),
      getCountries: () => dispatch(getCountries()),
      setCountriesAlpha: (o) => dispatch(setCountriesAlpha(o)),
      countriesByPopulation: (p) => dispatch(countriesByPopulation(p))
    }
}

export const mapStateToProps = (state) => {
    return{
      countries: state.countries,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);