import {
    CREATE_NOTE,
    DELETE_NOTE,
    SET_NOTE_LIST,
    UPDATE_NOTE
} from './types'

export const initNoteList = dispatch => (data) => {
    dispatch({
        type: SET_NOTE_LIST,
        payload: data
    })
}

export const createNote = dispatch => (data) => {
    dispatch({
        type: CREATE_NOTE,
        payload: data
    })
}

export const updateNote = dispatch => (newData) => {
    dispatch({
        type: UPDATE_NOTE,
        payload: newData
    })
}

export const deleteNote = dispatch => (id) => {
    dispatch({
        type: DELETE_NOTE,
        payload: id
    })
}
