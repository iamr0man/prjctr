import React  from 'react';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";
import {useNavigationState} from "../../../store/modules/NavigationState";

function CreateNoteForm() {
    const [, actions] = useNoteState()
    const [formState, formActions] = useFormState()
    const [, navigationActions] = useNavigationState()

    const { note } = formState
    const { title, content } = note

    const changeNoteTitle = (value) => {
        formActions.changeNoteTitle(value)
    }

    const changeNoteContent = (value) => {
        formActions.changeNoteContent(value)
    }

    const clearFormState = (e) => {
        formActions.resetNote()
    }

    const onFinish = (e) => {
        if (formState.form.isValid) {
            e.preventDefault()
            if (note.id) {
                actions.updateNote(note)
            } else {
                actions.createNote({title, content})
                clearFormState()
            }
            navigationActions.setPath({ pathName: '/note-list' })
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