import { GET_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY, SET_SEARCH} from "../actions/actions";

const initialState = {
    countries: [],
    country: {},
    search: ''
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

        default: return {...state}
    }
};

export default reducer;