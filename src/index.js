import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/app/App';
import { store } from "./services/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

