import React from 'react';
import {Button} from "antd";
import CHeader from "../../Common/CHeader";

function Welcome ({ userName, onLogout }) {
    return (
        <>
            <CHeader level={1} text={`Hi, ${userName}`} />
            <Button
                className="app__return-back-button"
                type="primary"
                htmlType="button"
                onClick={() => onLogout()}
            >
                Log Out
            </Button>
        </>
    );
}

export default Welcome;