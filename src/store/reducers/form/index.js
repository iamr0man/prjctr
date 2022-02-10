import {CHANGE_NOTE, RESET_NOTE, SET_TOUCHED_FLAG, TOGGLE_CREATE_FORM} from "../../actions/types";
import {CREATE, IS_NOT_EMPTY, LENGTH_SMALLER_THAN} from "../../../constants";
import {isFormValid, validate} from "../../../validation/rules";

export const formInitialState = {
    note: {
        id: '',
        title: '',
        content: '',
    },
    form: {
        errors: {
            title: [],
            content: []
        },
        isValid: false,
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
            let errors = {}
            if (typeof payload.title === 'string') {
                errors = {
                    ...state.form.errors,
                    title: validate({ prop: 'Title', value: payload.title, rules: [IS_NOT_EMPTY, { [LENGTH_SMALLER_THAN]: 15 }]})
                }
            }
            if (typeof payload.content === 'string') {
                errors = {
                    ...state.form.errors,
                    content: validate({ prop: 'Content', value: payload.content, rules: [IS_NOT_EMPTY, { [LENGTH_SMALLER_THAN]: 1000 }]})
                }
            }
            return {
                ...state,
                note: { ...state.note, ...payload },
                form: {
                    errors,
                    isValid: !!isFormValid(state, errors),
                    touched: {
                        ...state.form.touched,
                    }
                }
            }
        case SET_TOUCHED_FLAG:
            return {
                ...state,
                form: {
                    ...state.form,
                    errors: {
                        title: validate({ prop: 'Title', value: state.note.title, rules: [IS_NOT_EMPTY, { [LENGTH_SMALLER_THAN]: 15 }]}),
                        content: validate({ prop: 'Content', value: state.note.content, rules: [IS_NOT_EMPTY, { [LENGTH_SMALLER_THAN]: 1000 }]})
                    },
                    isValid: !!isFormValid(state, state.form.errors),
                    touched: {
                        ...state.form.touched,
                        ...payload
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