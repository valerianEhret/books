import React from "react";
import {Button, Row, Table} from "antd";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AuthorsState, deleteAuthorTC} from "../store/reducers/authors/authorsReducer";
import {BackDrop} from "../components/BackDrop";


export const Authors: React.FC = () => {

    const {authors, isLoading} = useSelector<AppRootStateType, AuthorsState>( state => state.authors)
    const dispatch = useDispatch()

    const columns = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'SecondName',
            dataIndex: 'secondName',
            key: 'secondName',
        },
        {
            title: 'More',
            dataIndex: 'more',
            key: 'address',
            render: (id: string) => <NavLink to={`/author/${id}`}>more</NavLink>
        },
        {
            title: 'Edit',
            key: 'edit',
            dataIndex: 'edit',
        },
        {
            title: 'Delete',
            key: 'delete',
            dataIndex: 'delete',
            render:(id:string)=> <Button onClick={ ()=>{dispatch(deleteAuthorTC(id))} }>delete</Button>
        }
    ]


    const keys = Object.keys(authors)

    const dataSource =  keys.map( (id)=>{
        return {
            key: 'key',
            firstName: authors[id].first_name,
            secondName: authors[id].last_name,
            more: id,
            edit: 'more',
            delete: id
        }
    })

    return (
        <>
            {isLoading && <BackDrop/>}
            <div style={{margin: 20}}>
                <Row justify={'end'}><Button type="link"><NavLink
                    to={'/author/create'}>Create+</NavLink></Button>
                </Row>
                <Table  columns={columns}
                        dataSource={dataSource}
                />

            </div>
        </>
    )
}