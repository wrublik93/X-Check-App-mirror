import 'core-js/stable';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import Header from './components/layouts/Header/index';
import Main from './components/layouts/Main';
import './index.scss';

const App = () => {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
};

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
