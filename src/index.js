import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import data from './data';

console.log(data);
ReactDOM.render(
  <App profield={data.profield} />,
  document.getElementById('root')
);
