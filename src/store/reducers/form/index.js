import {CHANGE_NOTE, RESET_NOTE, SET_TOUCHED_FLAG, TOGGLE_CREATE_FORM} from "../../actions/types";
import {CREATE_FORM_MODE} from "../../../constants";
import {getContentErrors, getTitleErrors, isFormValid} from "../../../validation";

export const formInitialState = {
    note: {
        id: '',
        title: '',
        content: '',
    },
    form: {
        isValid: false,
        errors: {
            title: [],
            content: []
        },
        touched: {
            title: false,
            content: false
        }
    },
    noteMode: CREATE
}
export const formListReducer = (state, event) => {
    const { type, payload } = event

    switch (type) {
        case TOGGLE_CREATE_FORM:
            return {
                ...state,
                noteMode: payload
            }
        case CHANGE_NOTE:
            let errorsOnChange = { ...state.form.errors }
            if (typeof payload.title === 'string') {
                errorsOnChange.title =  getTitleErrors(payload.title)
            }
            if (typeof payload.content === 'string') {
                errorsOnChange.content = getContentErrors(payload.content)
            }
            const updatedNote = { ...state.note, ...payload }

            return {
                ...state,
                note: updatedNote,
                form: {
                    isValid: isFormValid(state, errorsOnChange),
                    errors: errorsOnChange,
                    touched: {
                        ...state.form.touched,
                    }
                }
            }
        case SET_TOUCHED_FLAG:
            let errorsOnTouched = {
                title: getTitleErrors(state.note.title),
                content: getContentErrors(state.note.content)
            }

            return {
                ...state,
                form: {
                    ...state.form,
                    isValid: isFormValid(state, errorsOnTouched),
                    errors: errorsOnTouched,
                    touched: {
                        ...state.form.touched,
                        ...payload
                    } 
                }
            }
        case RESET_NOTE:
            return {
                ...formInitialState
            }
        default:
            return state
    }
}