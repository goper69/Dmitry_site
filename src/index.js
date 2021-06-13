import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if(!window.localStorage.getItem("language")) window.localStorage.setItem("language","ua");
if(!window.localStorage.getItem("pathname")) window.localStorage.setItem("pathname","/");
ReactDOM.render(<App/>,document.getElementById("root"));