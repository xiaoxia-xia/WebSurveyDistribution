import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import { createStore, appyMiddleware, applyMiddleware} from 'redux';


import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
<Provider store = {store}> <App /></Provider>,
document.querySelector('#root')
);

