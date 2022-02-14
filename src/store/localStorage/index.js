import {NOTE_LIST} from "../../constants";

export const getNoteList = () => {
    const data = localStorage.getItem(NOTE_LIST)

    if (!data) {
        localStorage.setItem(NOTE_LIST, JSON.stringify([]))
        return []
    }

    return JSON.parse(data)
}

export const saveNewList = (newNoteList) => {
    localStorage.setItem(NOTE_LIST, JSON.stringify(newNoteList))
}