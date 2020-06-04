import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogsReducer from "./reducers/blogsReducer";

const store = createStore(blogsReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
