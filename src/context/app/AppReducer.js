import { FETCH_API, SET_FILTERED_THERAPISTS } from '../actions.js';

export default (state, action) => {
    switch(action.type) {
        case FETCH_API:
            return {
                ...state,
                data: action.payload,
                filteredTherapists: action.payload
            }
        case SET_FILTERED_THERAPISTS:
            return {
                ...state,
                filteredTherapists: action.payload
            }
    }
}