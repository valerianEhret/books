import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Layout, Row} from "antd";
import {AppRootStateType} from "../store/store";
import {addBookTC, BooksState, StatusType} from "../store/reducers/books/booksReducer";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";
import {BookForm, FormValues} from "../components/BookForm";
import {formatDate} from "../utils/date";

export const AddBook: React.FC = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.books.isLoading)
    // const status = useSelector<AppRootStateType, StatusType>(state => state.books.status)

    // const {isLoading, status} = useSelector<AppRootStateType, BooksState>( state => state.books)
    const dispatch = useDispatch()



    const {authors} = useSelector<AppRootStateType, AuthorsState>(state => state.authors)
    // const {addBookTC} = useActions()
    const authorsKeys = Object.keys(authors)
    const allAuthors = authorsKeys.map(id => authors[id])
    const onSubmitHandler = (values: FormValues) => {
        if (values.year) {
            dispatch (addBookTC( {
                    title: values.title,
                    author_id: values.authorID,
                    year: values.year,
                    created_at: formatDate(new Date())
                }
            ))
        }
    }
    // if (status === 'success') return <Redirect to={'/books'}/>
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <BookForm loading={isLoading} submit={onSubmitHandler} authors={allAuthors}/>
            </Row>
        </Layout>
    );
};