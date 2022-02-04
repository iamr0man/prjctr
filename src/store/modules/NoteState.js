import React, { useContext, useState } from 'react';

import { noteInitialState } from '../reducers/note'
import {
    initNoteList,
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
        createNote: createNote(dispatch),
        editNote: editNote(dispatch),
        updateNote: updateNote(dispatch),
        deleteNote: deleteNote(dispatch)
    }))
    return [state, actions]
}