import React from "react";
import {Button, Row, Table} from "antd";
import { NavLink } from "react-router-dom";


export const Authors: React.FC = () => {

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

    const dataSource = [
        {
            key: 'key',
            firstName: 'firstName',
            secondName: 'secondName',
            more: 'more',
            edit: 'more',
            delete: 'more'
        },
        {
            key: 'key',
            firstName: 'firstName',
            secondName: 'secondName',
            more: 'more',
            edit: 'more',
            delete: 'more'
        },
        {
            key: 'key',
            firstName: 'firstName',
            secondName: 'secondName',
            more: 'more',
            edit: 'more',
            delete: 'more'
        },

    ];

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