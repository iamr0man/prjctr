import {CHANGE_NOTE, CONTENT_CHANGED, RESET_NOTE, SET_TOUCHED_FLAG, TITLE_CHANGED} from "./types";

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

export const setTouchedFlag = dispatch => (data) => {
  dispatch({
    type: SET_TOUCHED_FLAG,
    payload: data
  })
}
