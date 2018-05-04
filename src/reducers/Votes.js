const defaultState = {
    votes: {},
    isLoading:false,
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_MY_VOTES_START': 
            return {
                ...state,
                isLoading: true,
            };

        case 'GET_MY_VOTES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                votes: action.votes,
            };

        case 'GET_MY_VOTES_ERROR': 
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        default:
            return state;
    }
}
