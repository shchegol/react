import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout'
import Main from './pages/Main'
import './styles/main.scss';

const app = document.getElementById('react-root');

ReactDOM.render(
    <Layout>
        <Main/>
    </Layout>,
    app);