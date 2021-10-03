import React from 'react';
import './App.css';
import Layout from "antd/es/layout/layout";
import {Navbar} from "./components/Navbar";
import {Main} from "./components/Main";

function App() {
  return (
    <Layout>
        <Navbar/>
        <Main/>
    </Layout>
  );
}

export default App;
