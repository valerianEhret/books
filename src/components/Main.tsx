import React from "react";
import {Col, Row, Typography} from "antd";
import { NavLink } from "react-router-dom";


export const Main: React.FC = () => {
    return (
        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title><NavLink to={'/books'}>Books</NavLink></Typography.Title>
                <Typography.Title><NavLink to={'/authors'}>Authors</NavLink></Typography.Title>
            </Col>
        </Row>
    )
}