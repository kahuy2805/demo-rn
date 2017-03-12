import signInApi from 'apis/SignInApi'

// Action Type
export const REQUEST = 'Request'
export const SUCCESS = 'Success'
export const FAILED = 'Failed'

// Action creator

export function loginRequest() {
    return {
        type: REQUEST
    }
}

export function loginSuccess(json) {
    return {
        type: SUCCESS,
        payload: json
    }
}

export function loginFailed(error) {
    return {
        type: SUCCESS,
        payload: error.message
    }
}

// reducer
export const INITIAL_STATE = {
    error: '',
    loading: false
};

export function signInReducer(state = INITIAL_STATE, action) {
    switch (action.state) {
        case REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

// Load data

export function login(userCredentials) {
    return (dispatch, getState) => {
        dispatch(loginRequest);
        return signInApi.login(userCredentials)
        .then (json => {
            dispatch(loginSuccess(json))
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            dispatch(loginRequestFailed(error))
    });
    }
}