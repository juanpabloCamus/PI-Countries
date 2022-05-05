import React from "react";
import { connect } from "react-redux";
import { getCountries, setCountriesContinent, countriesByPopulation, countriesByAlpha } from "../../../../redux/actions/actions";
import './filters.css';

const Filters = (props) => {

    const selectContinent = async (e) => {
        await props.getCountries()
        if (e.target.value === 'All') props.getCountries()
        else props.setCountriesContinent(e.target.value);
    }

    const selectPopulation = (e) => {
        if (e.target.value === '---') {props.countriesByPopulation("off"); props.countriesByAlpha("asc")}
        if (e.target.value === 'Ascendent'){props.countriesByPopulation("asc");props.countriesByAlpha("off");} 
        if (e.target.value === 'Descendent') {props.countriesByPopulation("dsc"); props.countriesByAlpha("off")}
    }

    const selectAlpha = (e) => {
        if (e.target.value === '---') {props.countriesByAlpha("off"); props.countriesByPopulation("asc");} 
        if (e.target.value === 'Ascendent') {props.countriesByAlpha("asc"); props.countriesByPopulation("off");}
        if (e.target.value === 'Descendent') {props.countriesByAlpha("dsc"); props.countriesByPopulation("off");}
    }

    return(
        <div className="filters">
            <div>
                <span>Continent:</span><br></br>
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
                <option >---</option>
                <option>Ascendent</option>
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
      setCountriesContinent: (continent) => dispatch(setCountriesContinent(continent)),
      getCountries: () => dispatch(getCountries()),
      countriesByPopulation: (turn) => dispatch(countriesByPopulation(turn)),
      countriesByAlpha: (turn) => dispatch(countriesByAlpha(turn))
    }
}

export const mapStateToProps = (state) => {
    return{
      countries: state.countries,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);