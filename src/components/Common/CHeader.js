import React from 'react';
import './index.scss'
import { Typography } from "antd";
const { Title } = Typography;

function CHeader(props) {
    return (
        <div className="common-header">
            <Typography>
                <Title level={props.level}>
                    {props.text}
                </Title>
            </Typography>
            {props.children}
        </div>
    );
}

export default CHeader;