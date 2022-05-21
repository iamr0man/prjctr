import React  from 'react';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useFormState} from "../../../store/modules/FormState";
import {useNoteService} from "../../../services/note";

function CreateNoteForm() {
    const [formState, formActions] = useFormState()
    const noteService = useNoteService()

    const { note } = formState
    const { title, content } = note

    const changeNoteTitle = (value) => {
        formActions.changeNoteTitle(value)
    }

    const changeNoteContent = (value) => {
        formActions.changeNoteContent(value)
    }

    const onFinish = (e) => {
        if (formState.form.isValid) {
            e.preventDefault()
            if (note.id) {
                noteService.updateNote(note)
            } else {
                noteService.createNote({ title, content })
            }
        }
    };

    return (
       <CreateNoteFormView
            form={formState.form}
            title={title}
            content={content}
            formIsValid={formState.form.isValid}
            onInputFocus={(value) => formActions.setTouchedFlag(value)}
            onChangeNoteTitle={changeNoteTitle}
            onChangeNoteContent={changeNoteContent}
            onFinish={onFinish}
       />
    );
}

export default CreateNoteForm;
