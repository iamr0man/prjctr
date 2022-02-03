import React, {useEffect, useState} from 'react';

import { Form } from 'antd';

import './index.scss'
import CreateNoteFormView from "./CreateNoteFormView";
import {useNoteState} from "../../../store/modules/NoteState";

function CreateNoteForm(props) {
    const [state, action] = useNoteState()
    const { noteToEdit } = state

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [isHtmlPasted, setPastedFlag] = useState(false)

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
        setPastedFlag(false)
    }

    const onFinish = () => {
        if (!noteToEdit) {
            action.createNote({ title, content })
            clearFormState()
            return
        }
        action.updateNote({ id: noteToEdit.id, title, content })
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
            setPastedFlag={setPastedFlag}
       />
    );
}

export default CreateNoteForm;