import {
    CREATE_NOTE,
    SET_NOTE_LIST,
    TOGGLE_CREATE_FORM,
    UPDATE_NOTE,
    SELECT_NOTE,
    NOTE_TO_EDIT
} from './types'
import {NOTE_LIST} from "../../constants";

// init note list
export const initNoteList = dispatch => () => {
    try {
        debugger
        const data = localStorage.getItem(NOTE_LIST)

        if (!data) {
            localStorage.setItem(NOTE_LIST, JSON.stringify([]))
            dispatch({
                type: SET_NOTE_LIST,
                payload: []
            })
            return
        }

        dispatch({
            type: SET_NOTE_LIST,
            payload: JSON.parse(data)
        })
    } catch {}
}

// select note for displaying
export const selectNote = dispatch => (data) => {
    dispatch({
        type: SELECT_NOTE,
        payload: data
    })
}

// create note
export const createNote = dispatch => (data) => {
    const noteList = JSON.parse(localStorage.getItem(NOTE_LIST))
    const newNoteList = [...noteList, { id: new Date().getTime(), ...data }]
    localStorage.setItem(NOTE_LIST, JSON.stringify(newNoteList))

    dispatch({
        type: CREATE_NOTE,
        payload: data
    })
}

//
export const editNote = dispatch => (data) => {
    dispatch({
        type: NOTE_TO_EDIT,
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