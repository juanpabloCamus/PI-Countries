import { GET_COUNTRIES, GET_COUNTRY_DETAIL, SET_SEARCH, SET_COUNTRIES_CONTINENT, COUNTRY_POPULATION,GET_ACTIVITIES, COUNTRY_ALPHA} from "../actions/actions";

const initialState = {
    countries: [],
    country: {},
    activities: [],
    search: '',
    population: "off",
    alpha: 'asc'
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:{
            return{
                ...state,
                countries: action.payload
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

        case COUNTRY_POPULATION:{
            return{
                ...state,
                population: action.turn
            }
        }

        case COUNTRY_ALPHA:{
            return{
                ...state,
                alpha: action.turn
            }
        }

        default: return {...state}
    }
};

export default reducer;