const defaultState = {
    places: {},
    isLoading:false,
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_ALL_PLACES_START': 
            return {
                ...state,
                isLoading: true,
            };

        case 'GET_ALL_PLACES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                places: action.places,
            };

        case 'GET_ALL_PLACES_ERROR': 
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        default:
            return state;
    }
}
