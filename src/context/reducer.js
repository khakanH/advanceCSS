import { TOOGLE_Filter } from "./types";
export default (state, { type, payload }) => {
    switch (type) {
        case TOOGLE_Filter:
            return {
                ...state,
                filterGuest: !state.filterGuest
            }
        
        default:
            return state
    }

}