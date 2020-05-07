import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from "redux";
import rootReducer from './redux/rootReducre'
import {Provider} from "react-redux";


const userModal = {
    uid: 534324,
    name: 'Neta',
    age: 22
};
const store = createStore(rootReducer, { user: userModal } ,composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
