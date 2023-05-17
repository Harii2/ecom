import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store,persistor} from "./redux/store"
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import app from "./firebase.js"

import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <PersistGate loading="loading" persistor={persistor} app = {app}>
         <App/>
      </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();