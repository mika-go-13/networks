import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "mobx-react";
import RootStore from "./store";

ReactDOM.render(
  <Provider store={new RootStore()}>
    <App/>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
