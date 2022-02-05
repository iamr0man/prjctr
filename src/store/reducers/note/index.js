import { SET_NOTE_LIST, CREATE_NOTE, NOTE_TO_EDIT } from '../../actions/types'

export const noteInitialState = {
    notes: [],
    noteToEdit: null,
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
        case NOTE_TO_EDIT:
            return {
                ...state,
                noteToEdit: payload
            }
        default:
            return state;
    }
}