import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
            // return {...state, searchField: action.payload} - this is using an object spread operator
        default:
            return state;
    }
}