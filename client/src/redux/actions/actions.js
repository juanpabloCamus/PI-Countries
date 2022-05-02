import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const SET_SEARCH = 'SET_SEARCH';

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

export const addActivity = (activity) => {
    return async function(dispatch){
        return(
            axios.post('http://localhost:3001/activities',{activity})
            .then(dispatch({type: ADD_ACTIVITY}))
            
        )
    }
}

export const setSearch = (search) => {
    return(
        {type: SET_SEARCH, search:search}
    )
}