import {CHANGE_NOTE, RESET_NOTE, TOGGLE_CREATE_FORM} from "../../actions/types";
import {CREATE, IS_NOT_EMPTY, LENGTH_GREATER_THAN} from "../../../constants";
import {isFormValid, validate} from "../../../validation/rules";

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
            return {
                ...state,
                note: { ...state.note, ...payload },
                form: {
                    isValid: isFormValid(payload),
                    errors: {
                        title: validate({
                            prop: 'Title',
                            value: payload.title,
                            rules: [IS_NOT_EMPTY, { LENGTH_GREATER_THAN: 15 }]
                        }),
                        content: validate({
                            prop: 'Content',
                            value: payload.content,
                            rules: [IS_NOT_EMPTY, { LENGTH_GREATER_THAN: 1000 }]
                        })
                    }
                }
            }
        case RESET_NOTE:
            return {
                ...state,
                note: { id: '', title: '', content: '', },
                form: formInitialState.form
            }
        default:
            return state
    }
}