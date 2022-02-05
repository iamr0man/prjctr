import {SELECT_NOTE, TOGGLE_CREATE_FORM} from "../../actions/types";
import { CREATE } from "../../../constants";

export const formInitialState = {
    noteMode: CREATE,
    selectedNote: null
}
export const formListReducer = (state, event) => {
    const { type, payload } = event

    switch (type) {
        case TOGGLE_CREATE_FORM:
            return {
                ...state,
                noteMode: payload
            }
        case SELECT_NOTE:
            return {
                ...state,
                selectedNote: payload
            }
        default:
            return state
    }
}