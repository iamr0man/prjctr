import React from 'react';
import {Button} from "antd";

function ReturnButton({ onReturnBack }) {
    return (
        <Button
            className="app__return-back-button"
            type="primary"
            htmlType="button"
            onClick={() => onReturnBack()}
        >
            Return to List
        </Button>
    );
}

export default ReturnButton;