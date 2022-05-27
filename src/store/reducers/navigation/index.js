import {SET_PATH} from '../../actions/types'

const initialParamsState = {
    id: null
}

export const navigationInitialState = {
    router: {
        pathName: '/',
        params: {
            initialParamsState
        }
    },
};
export const navigationReducer = (state, event) => {
    const { type, payload } = event;

    switch (type) {
        case SET_PATH:
            const params = payload.params ? payload.params : initialParamsState
            return {
                ...state,
                router: {
                    ...payload,
                    params
                }
            }
        default:
            return state;
    }
}