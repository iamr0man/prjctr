import React from 'react';
import {Button, Input} from "antd";
import ContentInput from "../ContentInput";
import { MAX_TITLE_LENGTH } from "../../../constants";

function CreateNoteFormView({ form, title, content, formIsValid, onInputFocus, onChangeNote, onFinish }) {
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
                    onFocus={() => onInputFocus({ title: true })}
                    onInput={(e) => onChangeNote({ key: 'title', value: e.target.value })}
                />
                {form.touched.title && form.errors.title.length > 0 && <span className='create-form__error-text create-form__error-title-text create-form__error-text--active'>{form.errors.title[0]}</span>}
                <p
                    className={`create-form__error-counter ${title.length > MAX_TITLE_LENGTH ? 'create-form__error-counter--active' : '' }`}
                >
                    {title.length}/{MAX_TITLE_LENGTH}
                </p>
            </div>

            <div className="create-form__row">
                <ContentInput
                    content={content}
                    onInputFocus={() => onInputFocus({ content: true })}
                    onChangeNote={onChangeNote}
                />
                {form.touched.content && form.errors.content.length > 0 && <span className='create-form__error-text create-form__error-content-text create-form__error-text--active'>{form.errors.content[0]}</span>}
            </div>

            <Button
                type="primary"
                htmlType="submit"
                disabled={!formIsValid}
            >
                Submit
            </Button>
        </form>
    );
}

export default CreateNoteFormView;