import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";
import {Redirect, useParams} from "react-router-dom";
import {AuthorForm, FormValues} from "../components/AuthorForm";
import {Layout, Row} from "antd";

export const EditAuthor:React.FC = () => {

    const {authors, status, isLoading} = useSelector<AppRootStateType, AuthorsState>(state => state.authors)
    const params = useParams<{ id: string }>()
    const {id, last_name, first_name} = authors[params.id]
    const dispatch = useDispatch()

    const onSubmitHandler = (values:FormValues) => {
        const firstName = values.firstName.trim()
        const lastName = values.lastName.trim()
        // dispatch thunk
    }
    if (status === 'success') return <Redirect to={'/authors'}/>

    return (
         <Layout>
            <Row justify="center" align="middle" className="h100">
                <AuthorForm submit={onSubmitHandler} myValues={{lastName: last_name, firstName: first_name}}
                            loading={isLoading}/>
            </Row>
        </Layout>

    )
}