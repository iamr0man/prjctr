import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FormProvider} from "./components/Providers/form";
import {NoteListProvider} from "./components/Providers/note";
import {NavigationProvider} from "./components/Providers/navigation";
import {AuthProvider} from "./components/Providers/auth";

import { history } from './navigation/index'

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <AuthProvider>
              <NavigationProvider>
                  <FormProvider>
                      <NoteListProvider>
                        <App />
                      </NoteListProvider>
                  </FormProvider>
              </NavigationProvider>
          </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
