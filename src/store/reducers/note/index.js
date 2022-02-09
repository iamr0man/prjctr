import { SET_NOTE_LIST, CREATE_NOTE } from '../../actions/types'

export const noteInitialState = {
    notes: [],
};
export const noteListReducer = (state, event) => {
    const { type, payload } = event;

    switch (type) {
        case SET_NOTE_LIST:
            return {
                ...state,
                notes: payload,
            }
        case CREATE_NOTE:
            return {
                ...state,
                notes: [...state.notes, payload]
            }
        default:
            return state;
    }
}