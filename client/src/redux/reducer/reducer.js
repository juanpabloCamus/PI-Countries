import {
    GET_COUNTRIES,
    GET_COUNTRY_DETAIL,
    SET_SEARCH, FILTER_BY_CONTINENT,
    GET_ACTIVITIES,
    ORDER_BY_POPULATION,
    ORDER_BY_ALPHA,
    FILTER_BY_ACTIVITY,
    CLEAN_COUNTRY_DETAIL 
} from "../actions/actions";

const initialState = {
    countries: [],
    country: {},
    activities: [],
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
                countries: action.payload
            }
        }

        case FILTER_BY_CONTINENT :{
            return{
                ...state,
                countries: state.countries.filter(c => c.continent === action.continent)
            }
        }
        
        case ORDER_BY_ALPHA :{
            if (action.payload === 'Aasc'){
                if (state.countries[0].commonName === 'Afghanistan') return {...state};
                else return {...state, countries: state.countries.reverse()}
            }
            if (action.payload === 'Adsc'){
                if (state.countries[0].commonName === 'Zimbabwe') return {...state};
                else return {...state, countries: state.countries.reverse()}
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

        case FILTER_BY_ACTIVITY:{
            let act = state.activities.filter(a => a.name === action.payload);
            return{
                ...state,
                countries:act[0].Countries
            }  
        }  
        
        case CLEAN_COUNTRY_DETAIL:{
            return{
                ...state,
                country: {}
            }
        }

        default: return {...state}
    }
};

export default reducer;