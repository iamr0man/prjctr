import React, {useEffect, useMemo, useState} from 'react';

import {Button, Form, Input} from 'antd';
import {createNote, updateNote} from '../../../store/actions'
import ContentInput from "../ContentInput/ContentInput";
import {useDispatch, useSelector} from "react-redux";

import './index.scss'

function CreateNoteForm(props) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isHtmlPasted, setPastedFlag] = useState(false)

    const noteToEdit = useSelector(state => state.noteToEdit)
    const dispatch = useDispatch()

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

    const checkIsHtml = (decodedContent) => {
        const isHTMLRegEx = /<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/g
        return decodedContent.match(isHTMLRegEx)
    }

    const onFinish = () => {
        if (!noteToEdit) {
        // useful condition because package generate any text in P tag wrapper
        // if (isHtmlPasted && checkIsHtml(content)) {
            dispatch(createNote({ title, content }))
            clearFormState()
            return
        // } else if (!checkIsHtml(content)) {
        //     dispatch(createNote({ title, content }))
        //     clearFormState()
        // }
        }
        dispatch(updateNote({ id: noteToEdit.id, title, content }))
    };

    return (
        <Form
            className="create-form"
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item>
                <Form.Item
                    name="title"
                    rules={[
                        { required: true, message: 'Please input title!' },
                        { max: 15, message: 'Title must be max 15 characters.' },
                    ]}
                >
                    <Input
                        placeholder="Title"
                        value={title}
                        onInput={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <p
                    className={`create-form__error-text ${title.length > 15 && 'create-form__error-text--active' }`}
                >
                    {title.length}/15
                </p>
            </Form.Item>

            <ContentInput
                content={content}
                noteToEdit={noteToEdit}
                setPastedFlag={setPastedFlag}
                setContent={setContent}
            />

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CreateNoteForm;