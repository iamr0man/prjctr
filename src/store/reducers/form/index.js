import {
    CHANGE_NOTE,
    CONTENT_CHANGED,
    RESET_NOTE,
    SET_TOUCHED_FLAG,
    TITLE_CHANGED,
    TOGGLE_CREATE_FORM
} from "../../actions/types";
import {getContentErrors, getTitleErrors, isFormValid} from "../../../validation";
import {CREATE_FORM_MODE} from "../../../constants";

const generateTitleErrors = (state, title) => ({
    ...state.form.errors,
    title: getTitleErrors(title)
})

const generateContentErrors = (state, content) => ({
    ...state.form.errors,
    content: getContentErrors(content)
})

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
    noteMode: CREATE_FORM_MODE
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
            let errorsOnChange = {
                title: getTitleErrors(payload.title),
                content: getContentErrors(payload.content)
            }

            return {
                ...state,
                note: payload,
                form: {
                    isValid: isFormValid(state, errorsOnChange),
                    errors: errorsOnChange,
                    touched: {
                        ...state.form.touched,
                    }
                }
            }
        case TITLE_CHANGED:
            let titleErrors = generateTitleErrors(state, payload)

            const updatedNoteTitle = { ...state.note, title: payload }

            return {
                ...state,
                note: updatedNoteTitle,
                form: {
                    isValid: isFormValid(state, titleErrors),
                    errors: titleErrors,
                    touched: {
                        ...state.form.touched,
                    }
                }
            }
        case CONTENT_CHANGED:
            let contentErrors = generateContentErrors(state, payload)
            const updatedNoteContent = { ...state.note, content: payload }

            return {
                ...state,
                note: updatedNoteContent,
                form: {
                    isValid: isFormValid(state, contentErrors),
                    errors: contentErrors,
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