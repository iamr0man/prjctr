import {DO_LOGIN, DO_LOGOUT} from '../../actions/types'

export const authInitialState = {
    isLoggedIn: false,
    userName: ''
};
export const authReducer = (state, event) => {
    const { type, payload } = event;

    switch (type) {
        case DO_LOGIN:
            return {
                ...state,
                ...payload
            }
        case DO_LOGOUT:
            return {
                ...authInitialState
            }
        default:
            return state;
    }
}