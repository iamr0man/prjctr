import React from "react";
import {NoteServiceContext} from "../services/note";

import {useNoteState} from "../store/modules/NoteState";
import {useNavigationState} from "../store/modules/NavigationState";
import {useFormState} from "../store/modules/FormState";
import {useAuthState} from "../store/modules/AuthState";

const createNoteServiceProvider = (noteActions, navigationActions, formActions, authActions) => {
    const doLogin = (userName) => {
        authActions.doLogin({
            isLoggedIn: true,
            userName
        })
        navigationActions.setPath({ pathName: '/note-list'})
    }

    const doLogout = () => {
        authActions.doLogout()
        navigationActions.setPath({ pathName: '/'})
    }

    const createNote = (payload) => {
        noteActions.createNote(payload)
        formActions.resetNote()
        navigationActions.setPath({ pathName: '/note-list' })
    }

    const updateNote = (note) => {
        noteActions.updateNote(note)
        navigationActions.setPath({ pathName: '/note-list' })
    }

    const openNote = (item) => {
        formActions.changeNote(item)
        navigationActions.setPath({
            pathName: '/note-details',
            params: {
                id: item.id
            }
        })
    }

    const editNote = (item) => {
        formActions.changeNote(item)

        formActions.setTouchedFlag({ title: true })
        formActions.setTouchedFlag({ content: true })

        navigationActions.setPath({
            pathName: '/form-note/edit',
            params: {
                id: item.id
            }
        })
    }

    const deleteNote = (item, note) => {
        noteActions.deleteNote(item.id)

        if (note && note.id === item.id) {
            formActions.resetNote()
        }
    }

    const openFormNote = () => {
        formActions.resetNote()
        navigationActions.setPath({ pathName: '/form-note/create' })
    }

    return {
        doLogin,
        doLogout,
        createNote,
        updateNote,
        openNote,
        editNote,
        deleteNote,
        openFormNote
    }
}

export const NoteServiceProvider = ({ children }) => {
    const [, noteActions] = useNoteState()
    const [, navigationActions] = useNavigationState()
    const [, formActions] = useFormState()
    const [, authActions] = useAuthState()

    const actions = createNoteServiceProvider(noteActions, navigationActions, formActions, authActions)

    return (
      <NoteServiceContext.Provider value={actions}>
          {children}
      </NoteServiceContext.Provider>
    )
}
