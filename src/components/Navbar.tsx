import React from 'react';
import {Layout, Menu, Row} from 'antd';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <Layout.Header>
            <Row justify={'center'}>
                <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
                    <Menu.Item>
                        <NavLink to={'/'}>Main</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to={'/books'}>Books</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to={'/authors'}>Authors</NavLink>
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
}

