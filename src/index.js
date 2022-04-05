import React from 'react';
import ReactDOM from 'react-dom';
// 使用Router 会报错，TypeError: Cannot read property 'location' of undefined, 因为不会把路由的三个参数传给组件，history、location、match
// 只能使用 BrowserRouter 或者 HashRouter
import {Router, BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
