import React from 'react';

function AppService (noteActions, formActions, navigationActions) {

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
        createNote,
        updateNote,
        openNote,
        editNote,
        deleteNote,
        openFormNote
    }
}

export default AppService;