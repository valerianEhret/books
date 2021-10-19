import React from 'react';
import {Layout, Row} from "antd";
import {BookForm, FormValues} from "../components/BookForm";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {BooksState, editBookTC} from "../store/reducers/books/booksReducer";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";

export const EditBook:React.FC = () => {
    const {isLoading, status, books} = useSelector<AppRootStateType, BooksState>(state => state.books)
    const {authors} = useSelector<AppRootStateType, AuthorsState>(state => state.authors)
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    const {title, year, author_id} = books.filter(el => el.id === id)[0]
    const authorsKeys = Object.keys(authors)
    const allAuthors = authorsKeys.map(authorID => authors[authorID])
    const onSubmitHandler = (values: FormValues) => {
        if (values.year) {
            dispatch(editBookTC({id: id, year: values.year, title: values.title, authorID: values.authorID}))
        }
    }
    if (status === 'success') return <Redirect to={'/books'}/>
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <BookForm loading={isLoading} submit={onSubmitHandler} authors={allAuthors}
                          myValues={{title, year, authorID: author_id}}/>
            </Row>
        </Layout>
    );
}