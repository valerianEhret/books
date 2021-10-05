import React from "react";
import {Button, Row, Table} from "antd";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AuthorsState} from "../store/reducers/authors/authorsReducer";


export const Authors: React.FC = () => {

    const {authors} = useSelector<AppRootStateType, AuthorsState>( state => state.authors)


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


    const keys = Object.keys(authors)

    const dataSource =  keys.map( (id)=>{
        return {
            key: 'key',
            firstName: authors[id].first_name,
            secondName: authors[id].last_name,
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