import React from 'react';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";

function CreateNoteForm() {
    const [, actions] = useNoteState()
    const [formState, formActions] = useFormState()

    const { note } = formState
    const { title, content } = note

    const changeNote = ({ key, value }) => {
        formActions.changeNote({ [key]: value })
    }

    const clearFormState = (e) => {
        formActions.resetNote()
    }

    const onFinish = (e) => {
        e.preventDefault()
        if (note.id) {
            actions.updateNote({ id: note.id, title, content })
            return
        }
        actions.createNote({ id: new Date().getTime(), title, content })
        clearFormState()
    };

    return (
       <CreateNoteFormView
            title={title}
            content={content}
            onChangeNote={changeNote}
            onFinish={onFinish}
       />
    );
}

export default CreateNoteForm;