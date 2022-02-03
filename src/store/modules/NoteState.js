import React, { useContext, useState } from 'react';

import { noteInitialState } from '../reducers/'
import {
    initNoteList,
    selectNote,
    createNote,
    editNote,
    updateNote,
    deleteNote
} from '../actions'

export const NoteListContext = React.createContext([noteInitialState, () => undefined])

export const useNoteState = () => {
    const [state, dispatch] = useContext(NoteListContext)
    const [actions] = useState(() => ({
        initNoteList: initNoteList(dispatch),
        selectNote: selectNote(dispatch),
        createNote: createNote(dispatch),
        editNote: editNote(dispatch),
        updateNote: updateNote(dispatch),
        deleteNote: deleteNote(dispatch)
    }))
    return [state, actions]
}