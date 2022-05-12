import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const SET_SEARCH = 'SET_SEARCH';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const ORDER_BY_ALPHA = 'ORDER_BY_ALPHA';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const CLEAN_COUNTRY_DETAIL = 'CLEAN_COUNTRY_DETAIL'; 

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
    return async function(dispatch){
        return(
            axios(`http://localhost:3001/countries?name=${search}`)
            .then(resp => resp.data)
            .then(data => dispatch({type: SET_SEARCH, payload: data}))
            .catch(resp => alert(resp.response.data))
        )
    }
}

export const filterByContinent = (continent) => {
    return(
        {type: FILTER_BY_CONTINENT, continent:continent}
    )
}

export const orderByPopulation = (payload) => {
    return(
        {type: ORDER_BY_POPULATION, payload:payload}
    )
}

export const orderByAlpha = (payload) => {
    return(
        {type: ORDER_BY_ALPHA, payload:payload}
    )
}

export const filterByActivity = (payload) => {
    return {
        type: FILTER_BY_ACTIVITY, payload: payload
    }
}

export const cleanCountryDetail = () => {
    return {
        type: CLEAN_COUNTRY_DETAIL
    }
}
