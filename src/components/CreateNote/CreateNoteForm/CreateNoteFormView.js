import React from 'react';
import {Button, Input} from "antd";
import ContentInput from "../ContentInput";

function CreateNoteFormView({ form, onFinish, title, content, onChangeNote }) {
    return (
        <form
            className="create-form"
            name="basic"
            onSubmit={onFinish}
            autoComplete="off"
        >
            <div className="create-form__row">
                <Input
                    placeholder="Title"
                    value={title}
                    onInput={(e) => onChangeNote({ key: 'title', value: e.target.value })}
                />
                <p
                    className={`create-form__error-text ${title.length > 15 && 'create-form__error-text--active' }`}
                >
                    {title.length}/15
                </p>
            </div>

            <div className="create-form__row">
                <ContentInput
                    content={content}
                    onChangeNote={onChangeNote}
                />
            </div>

            <Button
                type="primary"
                htmlType="submit"
            >
                Submit
            </Button>
        </form>
    );
}

export default CreateNoteFormView;