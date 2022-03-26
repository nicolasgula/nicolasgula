//REACT
import React from 'react';
import ReactDOM from 'react-dom';
//APP
import App from './App';
//REACT-ROUTER
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
