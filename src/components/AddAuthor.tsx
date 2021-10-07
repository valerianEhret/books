import {Layout, Row} from "antd";
import {AuthorForm, FormValues} from "./AuthorForm";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {addAuthorTC, authorsActions, AuthorsState} from "../store/reducers/authors/authorsReducer";
import {Redirect} from "react-router-dom";


export const AddAuthor:React.FC = () => {

    const {isLoading, status} = useSelector<AppRootStateType, AuthorsState>( state => state.authors)
    const dispatch = useDispatch()

    const onSubmitHandler = (values: FormValues) => {
        const firstName = values.firstName.trim()
        const lastName = values.lastName.trim()
        dispatch(addAuthorTC({firstName, lastName}))
    }
    if (status === 'success') return <Redirect to={'/authors'}/>
    return(
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <AuthorForm submit={onSubmitHandler} loading={isLoading}/>
            </Row>
        </Layout>
    )
}
