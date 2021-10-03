import React from "react";
import {Button, Row, Table} from "antd";
import { NavLink } from "react-router-dom";


export const Books: React.FC = () => {

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'AuthorLastName',
            dataIndex: 'authorLastName',
            key: 'authorLastName',
        },
        {
            title: 'AuthorFirstName',
            dataIndex: 'authorFirstName',
            key: 'authorFirstName',
        },
        {
            title:'Year',
            dataIndex:'year',
            key:'year'
        },
        {
            title:'More',
            dataIndex:   'more',
            key:'more',

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
    ];

    const dataSource = [
        {
            key: 'key',
            title:'title',
            authorFirstName: 'authorFirstName',
            authorLastName: 'authorLastName',
            year:'year',
            more: 'more',
            edit: 'edit',
            delete: 'delete'
        },
        {
            key: 'key',
            title:'title',
            authorFirstName: 'authorFirstName',
            authorLastName: 'authorLastName',
            year:'year',
            more: 'more',
            edit: 'edit',
            delete: 'delete'
        },
        {
            key: 'key',
            title:'title',
            authorFirstName: 'authorFirstName',
            authorLastName: 'authorLastName',
            year:'year',
            more: 'more',
            edit: 'edit',
            delete: 'delete'
        },

    ];

    return (
        <>
            <div style={{margin: 20}}>
            <Row justify={'end'}><Button type="link"><NavLink
                to={'/book/create'}>Create+</NavLink></Button>
            </Row>
                <Table  columns={columns}
                        dataSource={dataSource}
                />


            </div>
        </>
    )
}