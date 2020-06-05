import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogsReducer from './reducers/blogsReducer'
import notificationReducer from './reducers/notificationReducer'
import usersReducer from './reducers/usersReducer'


const reducer = combineReducers({
    blogs: blogsReducer,
    notification: notificationReducer,
    users: usersReducer
})



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())

export default store
