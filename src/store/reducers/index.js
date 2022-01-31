import { SET_NOTE_LIST, CREATE_NOTE, SELECT_NOTE, NOTE_TO_EDIT, TOGGLE_CREATE_FORM } from '../actions/types'

export default function (state, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_NOTE_LIST:
            return {
                ...state,
                notes: payload,
            }
        case TOGGLE_CREATE_FORM:
            return {
                ...state,
                isCreateFormOpen: payload
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
        case SELECT_NOTE:
            return {
                ...state,
                selectedNote: payload
            }
        default:
            return state;
    }
}