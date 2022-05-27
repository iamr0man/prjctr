import React from 'react';
import './index.scss'
import { Typography } from "antd";
const { Title } = Typography;

function CHeader({ level, text, children }) {
    return (
        <div className="common-header">
            <Typography>
                <Title level={level}>
                    {text}
                </Title>
            </Typography>
            {children}
        </div>
    );
}

export default CHeader;