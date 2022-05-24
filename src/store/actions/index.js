import {
    CHANGE_NOTE, CONTENT_CHANGED,
    CREATE_NOTE, DELETE_NOTE, RESET_NOTE,
    SET_NOTE_LIST, SET_PATH, SET_TOUCHED_FLAG, TITLE_CHANGED,
    UPDATE_NOTE, DO_LOGIN, DO_LOGOUT
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

export const changeNote = dispatch => (data) => {
    dispatch({
        type: CHANGE_NOTE,
        payload: data
    })
}

export const changeNoteTitle = dispatch => (data) => {
    dispatch({
        type: TITLE_CHANGED,
        payload: data
    })
}
export const changeNoteContent = dispatch => (data) => {
    dispatch({
        type: CONTENT_CHANGED,
        payload: data
    })
}

export const resetNote = dispatch => (data) => {
    dispatch({
        type: RESET_NOTE,
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

export const setTouchedFlag = dispatch => (data) => {
    dispatch({
        type: SET_TOUCHED_FLAG,
        payload: data
    })
}

export const setPath = dispatch => (data) => {
    dispatch({
        type: SET_PATH,
        payload: data
    })
}

export const doLogin = dispatch => (data) => {
    dispatch({
        type: DO_LOGIN,
        payload: data
    })
}
export const doLogout = dispatch => () => {
    dispatch({ type: DO_LOGOUT })
}
