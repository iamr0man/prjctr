import React  from 'react';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";
import {useNavigationState} from "../../../store/modules/NavigationState";
import AppService from "../../../services/app";

function CreateNoteForm() {
    const [, actions] = useNoteState()
    const [formState, formActions] = useFormState()
    const [, navigationActions] = useNavigationState()
    const appService = AppService(actions, formActions, navigationActions)

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
                appService.updateNote(note)
            } else {
                appService.createNote({ title, content })
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