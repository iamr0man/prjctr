import React, {useEffect, useState} from 'react';

import { Form } from 'antd';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useNoteState} from "../../../store/modules/NoteState";

function CreateNoteForm(props) {
    const [state, actions] = useNoteState()
    const { noteToEdit } = state

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [form] = Form.useForm();

    useEffect(() => {
        if (noteToEdit) {
            form.setFieldsValue({
                title: noteToEdit.title,
            });
            setTitle(noteToEdit.title)
            setContent(noteToEdit.content)
            return
        }
        form.setFieldsValue({
            title: '',
        });
        setTitle('')
        setContent('')
    }, [noteToEdit])

    const clearFormState = () => {
        form.resetFields();
        setTitle('')
        setContent('')
    }

    const onFinish = () => {
        if (!noteToEdit) {
            actions.createNote({ title, content })
            clearFormState()
            return
        }
        actions.updateNote({ id: noteToEdit.id, title, content })
    };

    return (
       <CreateNoteFormView
            form={form}
            onFinish={onFinish}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            noteToEdit={noteToEdit}
       />
    );
}

export default CreateNoteForm;