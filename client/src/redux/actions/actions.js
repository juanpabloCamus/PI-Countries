import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_COUNTRIES_CONTINENT = 'SET_COUNTRIES_CONTINENT';
export const COUNTRY_POPULATION = 'COUNTRY_POPULATION';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const COUNTRY_ALPHA = 'COUNTRY_ALPHA';

// export const getCountries = () => {
//     return async function(dispatch){
//         return(
//             fetch('http://localhost:3001/countries')
//             .then(resp => resp.json())
//             .then(data => dispatch({type: GET_COUNTRIES, payload: data}))
//         )
//     }
// }

export const getCountries = () => {
    return async function(dispatch){
        return(
            axios('http://localhost:3001/countries')
            .then(resp => resp.data)
            .then(data => dispatch({type: GET_COUNTRIES, payload: data}))
        )
    }
}

export const getCountryDetail = (id) => {
    return async function(dispatch){
        return(
            fetch(`http://localhost:3001/countries/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({type: GET_COUNTRY_DETAIL, payload: data}))
        )
    }
}

export const getActivities = () => {
    return async function(dispatch){
        return(
            fetch(`http://localhost:3001/activities`)
            .then(resp => resp.json())
            .then(data => dispatch({type: GET_ACTIVITIES, payload: data}))
        )
    }
}

export const setSearch = (search) => {
    return(
        {type: SET_SEARCH, search:search}
    )
}

export const setCountriesContinent = (continent) => {
    return(
        {type: SET_COUNTRIES_CONTINENT, continent:continent}
    )
}

export const countriesByPopulation = (turn) => {
    return{
        type: COUNTRY_POPULATION, turn: turn
    }
}

export const countriesByAlpha = (turn) => {
    return{
        type: COUNTRY_ALPHA, turn: turn
    }
}

