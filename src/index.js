import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProviders from "./components/AppProviders";

import { history } from './navigation/index'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AppProviders>
        <App />
      </AppProviders>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
