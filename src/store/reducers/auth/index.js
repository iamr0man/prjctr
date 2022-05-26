import {LOGIN, LOGOUT} from '../../actions/types'

export const authInitialState = {
    isLoggedIn: false,
    userName: ''
};
export const authReducer = (state, event) => {
    const { type, payload } = event;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                ...payload
            }
        case LOGOUT:
            return {
                ...authInitialState
            }
        default:
            return state;
    }
}
