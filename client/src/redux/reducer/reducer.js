import {
    GET_COUNTRIES,
    GET_COUNTRY_DETAIL,
    SET_SEARCH, SET_COUNTRIES_CONTINENT,
    GET_ACTIVITIES,
    ORDER_BY_POPULATION,
    ORDER_BY_ALPHA 
} from "../actions/actions";

const initialState = {
    countries: [],
    country: {},
    activities: [],
    search: '',
    order: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES:{
            return{
                ...state,
                countries: action.payload,
            }
        }
        
        case GET_COUNTRY_DETAIL:{
            return{
                ...state,
                country: action.payload
            }
        }

        case GET_ACTIVITIES:{
            return{
                ...state,
                activities: action.payload
            }
        }

        case SET_SEARCH:{
            return{
                ...state,
                search: action.search
            }
        }

        case SET_COUNTRIES_CONTINENT:{
            return{
                ...state,
                countries: state.countries.filter(c => c.continent === action.continent)
            }
        }
        
        case ORDER_BY_ALPHA :{
            return{
                ...state,
                countries: state.countries.reverse()
            }
        }

        case ORDER_BY_POPULATION:{
            let sort = action.payload
            if (sort === 'asc') sort = state.countries.sort((a,b) => b.population - a.population);
            if (sort === 'dsc') sort = state.countries.sort((a,b) => a.population - b.population);
            if (sort === 'off') return{...state}
            return{
                ...state,
                countries: sort,
            }
        }

        default: return {...state}
    }
};

export default reducer;