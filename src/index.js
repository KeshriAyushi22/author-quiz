import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './Components/AuthorQuiz';
import * as serviceWorker from './serviceWorker';

/*--code using jsx--*/
export function render(){
  ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz />
  </React.StrictMode>,
  document.getElementById('root')
)}
render();


/*--pure code using js--*/
// ReactDOM.render(
//   React.createElement(
//     'h1',
//     null,
//     React.createElement(
//       Sum,
//       {a:3,b:4},
//       null
//     )),document.getElementById('root')
  
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
