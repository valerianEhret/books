import React, { FC } from 'react';
import { useParams } from 'react-router-dom'

import { Col, Row, Typography } from 'antd';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";

export const AboutAuthor: FC = () => {
    const params = useParams<{ id: string }>()
    const authors = useSelector<AppRootStateType, AuthorsState>(state => state.authors)
    return (

        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title>First Name: {authors.authors[params.id].first_name}</Typography.Title>
                <Typography.Title>Last Name: {authors.authors[params.id].last_name}</Typography.Title>
            </Col>
        </Row>

    );
};
