import { v4 as uuidv4 } from 'uuid';
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
            const newNote = {
                ...payload,
                id: uuidv4()
            }
            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        default:
            return state;
    }
}