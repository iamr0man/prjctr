import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import ContentInput from "../ContentInput";

function CreateNoteFormView({ form, onFinish, title, setTitle, content, setContent, noteToEdit, setPastedFlag }) {
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

export default CreateNoteFormView;