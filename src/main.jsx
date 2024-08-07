import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css'
import './assets/sass/style.scss';

// ======================BOOTSTRAP======================================================================
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { Provider } from 'react-redux';
import store from '../src/tools/store/shopStore.js'
import {shopData} from './tools/function/calldata.jsx'

shopData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
