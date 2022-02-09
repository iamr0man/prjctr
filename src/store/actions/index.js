import {
    CHANGE_NOTE,
    CREATE_NOTE, RESET_NOTE,
    SET_NOTE_LIST,
    TOGGLE_CREATE_FORM,
} from './types'
import {NOTE_LIST} from "../../constants";

// init note list
export const initNoteList = dispatch => (data) => {
    try {
        dispatch({
            type: SET_NOTE_LIST,
            payload: data
        })
    } catch {}
}

// create note
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

export const resetNote = dispatch => (data) => {
    dispatch({
        type: RESET_NOTE,
        payload: data
    })
}

export const updateNote = dispatch => (newData) => {
    const noteList = JSON.parse(localStorage.getItem(NOTE_LIST))
    let noteIndexToUpdate = noteList.findIndex(v => v.id === newData.id)
    noteList[noteIndexToUpdate] = newData
    localStorage.setItem(NOTE_LIST, JSON.stringify(noteList))

    dispatch({
        type: SET_NOTE_LIST,
        payload: noteList
    })
}


// delete note
export const deleteNote = dispatch => (id) => {
    const noteList = JSON.parse(localStorage.getItem(NOTE_LIST))
    const newNoteList = noteList.filter(v => v.id !== id)

    localStorage.setItem(NOTE_LIST, JSON.stringify(newNoteList))
    dispatch({
        type: SET_NOTE_LIST,
        payload: newNoteList
    })
}

// toggle create form
export const toggleCreateForm = dispatch => (data) => {
    dispatch({
        type: TOGGLE_CREATE_FORM,
        payload: data
    })
}