const defaultState = {
    isLoggedIn: false,
    isLoading: false,
    error: '',
    profile: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        token: '',
    }
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN_START': 
            return {
                ...state,
                isLoading: true,
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                profile: {
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    token: action.token,
                }
            };

        case 'LOGIN_ERROR': 
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        case 'GET_TOKEN_START':
            return {
                ...state,
                isLoading:true,
            };

        case 'GET_TOKEN_SUCCESS':
            return {
                ...state,
                isLoading:false,
                isLoggedIn:true,
                profile: {
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    token: action.token,
                }
            };

        case 'GET_TOKEN_ERROR':
            return {
                ...state,
                isLoading:false,
                error: action.error,
            };

        case 'LOGOUT_START':
            return {
                ...state,
                isLoading:true,
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoading:false,
                isLoggedIn:false,
            };

        case 'LOGOUT_ERROR':
            return {
                ...state,
                isLoading:false,
            };

        case 'UPDATE_PROFIL_START':
            return {
                ...state,
                isLoading:true,
            };

        case 'UPDATE_PROFIL_SUCCESS':
            console.log(action);
            return {
                ...state,
                isLoading:false,
                profile: {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                }
            }

        case 'UPDATE_PROFIL_ERROR':
            return {
                ...state,
                isLoading:false,
                error: action.error,
            };

        default:
            return state;
    }
}
