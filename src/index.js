import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux'
import store from "./store/index"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n ={ i18n}>
      <Suspense fallback= {<div>Loading.....</div>}>
        <Provider store={store}>
            <App />
        </Provider>
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
