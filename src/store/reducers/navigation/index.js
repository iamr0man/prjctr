import {SET_PATH} from '../../actions/types'

export const navigationInitialState = {
    router: {
        pathName: '/note-list',
        params: {
            id: null
        }
    },
};
export const navigationReducer = (state, event) => {
    const { type, payload } = event;

    switch (type) {
        case SET_PATH:
            return {
                ...state,
                router: {
                    ...state.router,
                    ...payload
                }
            }
        default:
            return state;
    }
}