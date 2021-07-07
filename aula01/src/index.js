import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Exemplo from './teste'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path='/exemplo' component={Exemplo}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();