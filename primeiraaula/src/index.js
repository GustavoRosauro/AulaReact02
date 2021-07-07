import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exemplo from './exemplo';
import Exercicio from './exercicio';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cadastro from './cadastro';
//Rotas para chamar os nossos componentes React
// npm i react-router-dom para instalar as rotas
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/cadastro' component={Cadastro}/>
      <Route exact path='/exercicio' component={Exercicio}/>
      <Route exact path='/exemplo' component={Exemplo}/>
      <Route exact path="/" component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
