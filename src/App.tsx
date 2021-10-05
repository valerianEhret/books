import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {AppRouter} from "./components/AppRouter";
import { Layout } from 'antd';

function App() {
  return (
    <Layout>
        <Navbar/>
        <Layout.Content className={'h100'}>
            <AppRouter/>
        </Layout.Content>
    </Layout>
  );
}

export default App;
