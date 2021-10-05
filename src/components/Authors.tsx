import React from "react";
import {Button, Row, Table} from "antd";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AuthorType} from "../store/reducers/authors/authorsReducer";

export const Authors: React.FC = () => {

    const authors = useSelector<AppRootStateType, Array<AuthorType>>( state => state.authors.authors)


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
        }
    ]


    const dataSource =  authors.map( (el)=>{
        return {
            key: 'key',
            firstName: el.first_name,
            secondName: el.last_name,
            more: 'more',
            edit: 'more',
            delete: 'more'
        }
    })

    return (
        <>
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