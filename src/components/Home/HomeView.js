import React from 'react';
import {Button, Input } from "antd";

function HomeView ({ userName, onChangeUserName, onSubmit }) {
    return (
        <form
            className="auth-form"
            name="basic"
            onSubmit={onSubmit}
            autoComplete="off"
        >
            <Input
                className="auth-form__input"
                placeholder="Your name"
                value={userName}
                onInput={(e) => onChangeUserName(e.target.value)}
            />

            <Button
                className="auth-form__button"
                type="primary"
                htmlType="submit"
                disabled={userName.length === 0}
            >
                Log In
            </Button>
        </form>
    );
}

export default HomeView;