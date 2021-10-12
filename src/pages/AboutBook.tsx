import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {BooksState} from "../store/reducers/books/booksReducer";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";
import {Col, Row, Typography} from "antd";


export const AboutBook: React.FC = () => {
    const params = useParams<{ id: string }>()
    const books = useSelector<AppRootStateType, BooksState>(state => state.books)
    const authors = useSelector<AppRootStateType, AuthorsState>(state => state.authors)
    return (

        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title>book title:{books.books.filter(el=> el.id === params.id)[0].title}</Typography.Title>
                <Typography.Title>Author's first name: {authors.authors[books.books.filter(el=> el.id === params.id)[0].author_id].first_name}</Typography.Title>
                <Typography.Title>Author's last name: {authors.authors[books.books.filter(el=> el.id === params.id)[0].author_id].last_name}</Typography.Title>
                <Typography.Title>Year: {books.books.filter(el=> el.id === params.id)[0].year}</Typography.Title>
            </Col>
        </Row>

    );
};
