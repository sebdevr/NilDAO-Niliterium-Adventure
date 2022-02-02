import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import './fonts/Anglodavek/Anglodavek-a55E.ttf'
import './fonts/Anglodavek/AnglodavekBold-EOO9.ttf'
import './fonts/Anglodavek/AnglodavekBoldItalic-Oggd.ttf'
import './fonts/Anglodavek/AnglodavekItalic-Z22Z.ttf'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
