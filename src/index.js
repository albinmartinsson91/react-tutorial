import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

//Create Store Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//Import Counter Reducer Function
import store from './store'


ReactDOM.render(
	//Wraps Router around our app so that we can access match, location
	<Provider store={store}> 
		<BrowserRouter>
			<App />
	   	</BrowserRouter>
   	</Provider>
 	, document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
