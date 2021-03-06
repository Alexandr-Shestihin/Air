import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rerenderAllTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>
      </React.StrictMode>,
      document.getElementById('root')
   );
}
rerenderAllTree(store.getState())

store.subscribe(() => {
   rerenderAllTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
