import { GET_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY, SET_SEARCH, SET_COUNTRIES_CONTINENT, SET_COUNTRIES_ALPHA, COUNTRY_POPULATION} from "../actions/actions";

const initialState = {
    countries: [],
    country: {},
    search: '',
    order: 'Ascendent',
    population: "off"
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

        case ADD_ACTIVITY:{
            return{
                ...state
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

        case SET_COUNTRIES_ALPHA:{
            return{
                ...state, order: action.order, countries: state.countries.reverse()
            }
        }

        default: return {...state}
    }
};

export default reducer;